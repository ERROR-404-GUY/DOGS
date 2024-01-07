import type { RequestHandler } from "./$types";
import { error } from "@sveltejs/kit";
import { PUBLIC_MEDIA_URL_PREFIX } from "$env/static/public";
import { AwsClient } from "aws4fetch";
import { XMLParser } from "fast-xml-parser";
import {
  AWS_ACCESS_KEY_ID,
  AWS_BUCKET_URL,
  AWS_SECRET_ACCESS_KEY,
} from "$env/static/private";
import { v4 as uuid } from "uuid";

type S3ListResponse = {
  ListBucketResult: {
    Contents: {
      Key: string;
    }[];
  };
};

type UploadResult = {
  file: string;
  status: number;
  url?: string;
  error?: string;
};

const aws = new AwsClient({
  accessKeyId: AWS_ACCESS_KEY_ID,
  secretAccessKey: AWS_SECRET_ACCESS_KEY,
});

export const POST: RequestHandler = async ({ request }) => {
  const form = await request.formData();
  const files = form.getAll("file") as File[];
  const result: UploadResult[] = [];
  for (const file of files) {
    if (!file.name) {
      throw error(400, {
        message: "Invalid file",
      });
    }

    let ext: string;
    switch (file.type) {
      case "image/jpeg":
        ext = "jpeg";
        break;
      case "image/png":
        ext = "png";
        break;
      case "image/webp":
        ext = "webp";
        break;
      default:
        const i = file.name.lastIndexOf(".");
        ext = i > 0 ? file.name.substring(i) : "";
    }

    const filepath = `dogs/${uuid()}.${ext}`;
    const body = Buffer.from(new Uint8Array(await file.arrayBuffer()));
    const req = await aws.sign(`${AWS_BUCKET_URL}/${filepath}`, {
      method: "PUT",
      body,
    });
    const res = await fetch(req);
    if (res.ok) {
      result.push({
        file: file.name,
        status: res.status,
        url: PUBLIC_MEDIA_URL_PREFIX + "/" + filepath,
      });
    } else {
      result.push({
        file: file.name,
        status: res.status,
        error: await res.text(),
      });
    }
  }
  return new Response(JSON.stringify(result));
};

export const GET: RequestHandler = async ({ fetch }) => {
  const signedRequest = await aws.sign(AWS_BUCKET_URL);
  const res = await fetch(signedRequest);
  if (res.ok) {
    const parser = new XMLParser();
    const doc: S3ListResponse = parser.parse(await res.text());
    const images = doc.ListBucketResult.Contents.map((c) => c.Key);
    return new Response(JSON.stringify(images));
  } else {
    return new Response(await res.text(), { status: res.status });
  }
};
