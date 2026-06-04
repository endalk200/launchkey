import { initLaunchKeyConfig } from "@launchkey/config";
import { Console, Effect } from "effect";
import { Command } from "effect/unstable/cli";

export const initCommand = Command.make("init").pipe(
	Command.withDescription("Create a starter LaunchKey Configuration file"),
	Command.withShortDescription("Create config file"),
	Command.withHandler(() =>
		Effect.gen(function* () {
			const path = yield* initLaunchKeyConfig;

			yield* Console.log(`Created LaunchKey Configuration at ${path.path}.`);
		}).pipe(
			Effect.withSpan("launchkey.cli.config.init", {
				attributes: {
					"cli.command": "config init",
					"launchkey.command": "config init",
				},
			}),
			Effect.annotateLogs({
				"launchkey.command": "config init",
			}),
		),
	),
);
