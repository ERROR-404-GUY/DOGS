import type { RequestHandler } from './$types';
import { error } from '@sveltejs/kit';
import { dev } from "$app/environment";
import { PUBLIC_MEDIA_URL_PREFIX } from '$env/static/public';

export const POST: RequestHandler = async ({ request, params, locals }) => {
  const bucket = locals.DOG_BUCKET;
  if (!bucket) {
      throw error(500, {
          message:
              'Must run in cloudflare workers environment. Run the wrangler-proxy locally: wrangler dev node_modules/wrangler-proxy/dist/worker.js --remote',
      });
  }


  const form = await request.formData();
	const file = form.get('file') as File;
  if (!file.name) {
    throw error(400, {
      message:
           'Invalid file',
  });
  }

  const filePath = 'dogs/' + file.name;
  const res = await bucket.put(filePath, file, {
		httpMetadata: {
			contentType: file.type,
		},
		customMetadata: {
			name: file.name,
		},
	});

  if (!dev && !res) {
		console.log('up res:', res);
	}

  return new Response(JSON.stringify({ url: PUBLIC_MEDIA_URL_PREFIX + '/' + filePath }));
};
