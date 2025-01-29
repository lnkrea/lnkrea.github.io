import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    kit: {
        adapter: adapter({
            pages: 'build',
            assets: 'build',
            fallback: null
        }),
        // Uncomment and set the base path if deploying to a subpath
        // paths: {
        //     base: '/your-repo-name'
        // }
    }
};

export default config;