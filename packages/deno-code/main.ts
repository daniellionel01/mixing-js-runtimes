import { chalk, utils, node } from "./deps.ts"

console.log(chalk.yellow.bold("Running deno code..."))

console.log("8 + 2 =", utils.add(8, 2))

node.runMyCode()
