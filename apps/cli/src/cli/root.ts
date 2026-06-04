import { Command } from "effect/unstable/cli";
import { configCommand } from "./commands/config/index.js";
import { versionCommand } from "./commands/version.cmd.js";

export const commandCatalog = [versionCommand, configCommand] as const;

export const makeRootCommand = (commands: typeof commandCatalog = commandCatalog) =>
	Command.make("launchkey").pipe(
		Command.withDescription("Manage LaunchKey configuration and local developer workflows."),
		Command.withSubcommands(commands),
	);

export const rootCommand = makeRootCommand();
