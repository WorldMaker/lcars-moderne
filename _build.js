import { build } from 'esbuild'
import { sassPlugin } from 'esbuild-sass-plugin'


await build({
    entryPoints: ['lcars-moderne.sass'],
    bundle: true,
    sourcemap: true,
    minify: true,
    outfile: 'dist/lcars-moderne.css',
    plugins: [sassPlugin()],
    loader: {
        ".png": "dataurl",
        ".woff": "copy",
        ".woff2": "copy"
    }
})

await build({
    entryPoints: ['lcars-shell.js'],
    bundle: true,
    sourcemap: true,
    minify: true,
    outfile: 'dist/index.js'
})
