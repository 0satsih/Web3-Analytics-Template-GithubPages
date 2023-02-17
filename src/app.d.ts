// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
		declare namespace App {
			interface Locals {}
			interface Platform {
				env: { COUNTER: DurableObjectNamespace };
				context: { waitUntil(promise: Promise<any>): void };
				caches: CacheStorage & { default: Cache };
			}
			interface Session {}
			interface Stuff {}
		}
		
	}
	declare module 'chart.js' {
		interface TooltipPositionerMap {
		  myCustomPositioner: TooltipPositionerFunction<ChartType>;
		}
	  }
}

export {};
