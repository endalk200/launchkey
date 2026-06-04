import { type ConfigValidationReport, validateLaunchKeyConfig } from "@launchkey/config";
import { Console, Effect } from "effect";
import { Command } from "effect/unstable/cli";
import { ConfigValidationFailed } from "../../../runtime/failures.js";

export const formatConfigValidationReport = (report: ConfigValidationReport): ReadonlyArray<string> => [
	report.file.message,
	report.env.message,
	report.effective.message,
];

export const configValidationHasFailures = (report: ConfigValidationReport): boolean =>
	[report.file, report.env, report.effective].some((status) => status._tag === "invalid");

export const validateCommand = Command.make("validate").pipe(
	Command.withDescription("Validate LaunchKey Configuration sources"),
	Command.withShortDescription("Validate config"),
	Command.withHandler(() =>
		Effect.gen(function* () {
			const report = yield* validateLaunchKeyConfig;
			const hasFailures = configValidationHasFailures(report);

			const validationLogAttributes = {
				"launchkey.config.path": report.path.path,
				"launchkey.config.path_source": report.path.source,
				"launchkey.config.valid": !hasFailures,
				"launchkey.config.file_validation_status": report.file._tag,
				"launchkey.config.env_validation_status": report.env._tag,
				"launchkey.config.effective_validation_status": report.effective._tag,
			};

			if (hasFailures) {
				yield* Effect.logWarning("LaunchKey Configuration validation failed", validationLogAttributes);
			} else {
				yield* Effect.logInfo("Validated LaunchKey Configuration", validationLogAttributes);
			}

			for (const line of formatConfigValidationReport(report)) {
				yield* Console.log(line);
			}

			if (hasFailures) {
				return yield* Effect.fail(new ConfigValidationFailed());
			}
		}).pipe(
			Effect.withSpan("launchkey.cli.config.validate", {
				attributes: {
					"cli.command": "config validate",
					"launchkey.command": "config validate",
				},
			}),
			Effect.annotateLogs({
				"launchkey.command": "config validate",
			}),
		),
	),
);
