import { build, emptyDir } from "https://deno.land/x/dnt@0.32.0/mod.ts"
import { join } from "https://deno.land/std@0.168.0/path/mod.ts"

await emptyDir("./npm/deno-code")

const dirname = new URL(".", import.meta.url).pathname

const entry = join(dirname, "../packages/deno-code/main.ts")
const map = join(dirname, "../import_map.json")

await build({
  importMap: map,
  typeCheck: false,
  test: false,
  entryPoints: [entry],
  outDir: "./npm/deno-code",
  shims: {
    deno: true
  },
  packageManager: "yarn",
  package: {
    name: "@npm/deno-code",
    version: Deno.args[0],
    description: "Deno code"
  }
})
