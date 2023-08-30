import adapter from '@sveltejs/adapter-static'
import { vitePreprocess } from '@sveltejs/kit/vite'

// noinspection JSUnusedGlobalSymbols
export default {
	kit: {
		adapter: adapter()
	},
	preprocess: vitePreprocess()
}
