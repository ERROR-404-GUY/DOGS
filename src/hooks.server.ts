import { connectR2 } from 'wrangler-proxy';
import { UPLOAD_BUCKET } from '$env/static/private';

export const handle = ({ event, resolve }) => {
  event.locals.DOG_BUCKET = event.platform?.env?.DOG_BUCKET ?? connectR2('UPLOAD_BUCKET', { hostname: 'http://192.168.0.34:8787' });
  // or connectD1('D1', { hostname: 'custom-host-name' });
  // default hostname is `http://127.0.0.1:8787`
  return resolve(event);
};