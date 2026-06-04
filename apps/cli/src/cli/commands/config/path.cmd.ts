import { resolveConfigPath } from "@launchkey/config";
import { Console, Effect } from "effect";
import { Command } from "effect/unstable/cli";

export const pathCommand = Command.make("path").pipe(
	Command.withDescription("Print the effective LaunchKey Configuration path"),
	Command.withShortDescription("Print config path"),
	Command.withHandler(() =>
		Effect.gen(function* () {
			const path = yield* resolveConfigPath();

			yield* Console.log(path.path);
		}).pipe(
			Effect.withSpan("launchkey.cli.config.path", {
				attributes: {
					"cli.command": "config path",
					"launchkey.command": "config path",
				},
			}),
			Effect.annotateLogs({
				"launchkey.command": "config path",
			}),
		),
	),
);
