// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		interface Error {
      code?: string;
      message?: string;    
    }
		interface Locals {
			DOG_BUCKET: R2Bucket;
		}
		// interface PageData {}
		interface Platform {
			env: {
				DOG_BUCKET: R2Bucket;
			};
			context: {
				waitUntil(promise: Promise<any>): void;
			};
			caches: CacheStorage & { default: Cache };
		}
	}
}

export {};
