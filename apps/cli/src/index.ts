import { Command } from "commander";

process.on("SIGINT", () => process.exit(0));
process.on("SIGTERM", () => process.exit(0));

async function main() {
  const program = new Command()
    .name("launchkey")
    .description("CLI for launchkey")
    .version("0.0.1", "-v, --version", "display the version number");

  program.parse();
}

main();
