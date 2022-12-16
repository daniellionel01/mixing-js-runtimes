
declare global {
  interface Process {
    pid: number
  }
  interface Window { process: Process; }
}

window.process = {
  pid: Deno.pid
}
