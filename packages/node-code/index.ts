import { add } from "@pkg/node-utils"
import chalk from "chalk"

export function runMyCode() {
  console.log(chalk.yellow.bold("Running node code..."))
  console.log("3 + 5 =", add(3, 5))

  console.log("node process pid", process.pid)
}
