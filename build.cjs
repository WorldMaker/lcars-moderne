const esbuild = require('esbuild')
const sassPlugin = require('esbuild-plugin-sass')

async function build() {
    await esbuild.build({
        entryPoints: ['lcars-moderne.sass'],
        bundle: true,
        sourcemap: true,
        minify: true,
        outfile: 'dist/lcars-moderne.css',
        plugins: [sassPlugin()],
        loader: {
            ".woff": "copy",
            ".woff2": "copy"
        }
    })

    await esbuild.build({
        entryPoints: ['lcars-shell.js'],
        bundle: true,
        sourcemap: true,
        minify: true,
        outfile: 'dist/index.js'
    })
}

build().catch(() => process.exit(1))
