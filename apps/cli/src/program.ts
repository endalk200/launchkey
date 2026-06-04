import { NodeServices } from "@effect/platform-node";
import { LaunchKeyConfig } from "@launchkey/config";
import { Effect, Layer } from "effect";

import { runCli } from "./cli/run.js";
import { handleCliFailure } from "./runtime/failures.js";
import { telemetryLayer } from "./runtime/telemetry.js";

const LaunchKeyConfigLayer = LaunchKeyConfig.layer;
const TelemetryLayer = telemetryLayer.pipe(Layer.provide(LaunchKeyConfigLayer));
const MainLayer = Layer.mergeAll(LaunchKeyConfigLayer, TelemetryLayer).pipe(Layer.provideMerge(NodeServices.layer));

export const program = runCli.pipe(Effect.provide(MainLayer), Effect.catchTags(handleCliFailure));
