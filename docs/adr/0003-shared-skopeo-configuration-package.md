# Shared LaunchKey Configuration Package

LaunchKey Configuration lives in a shared `@launchkey/config` package instead of the
CLI package. The CLI is currently the only runtime entry point, but future
packages need to consume the same configuration without depending on CLI
modules.

The default user configuration file is `~/.launchkey/config.toml`. LaunchKey Users can
override the file path with `LAUNCHKEY_CONFIG_PATH`. Missing default configuration
is valid and falls back to built-in defaults; a missing explicit
`LAUNCHKEY_CONFIG_PATH` is an error because the user selected that source.

Configuration precedence is per key:

1. Environment overrides
2. TOML file values
3. Built-in defaults

Telemetry configuration is represented as:

```toml
[telemetry]
enabled = false
otlp_endpoint = "http://localhost:4318"
```

Environment overrides preserve the existing telemetry contract:
`LAUNCHKEY_TELEMETRY` accepts only `true` or `false`, and `LAUNCHKEY_OTLP_ENDPOINT`
must be an absolute URL. This keeps the opt-in telemetry decision from
0002 intact while allowing persistent user configuration.

The shared package exports both Effect `Config` descriptors and a resolved
`LaunchKeyConfig` service/layer. Descriptors support validation and tooling, while
deep application modules consume the resolved service through the Effect
environment.

The CLI exposes `launchkey config validate`, `launchkey config init`, and
`launchkey config path`. Validation checks the file source, environment overrides,
and effective configuration separately so an invalid lower-precedence source is
not hidden by an override.
