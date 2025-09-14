# launchkey

A universal CLI and template distribution system for rapid project scaffolding across any language and framework.

## Vision

Inspired by the exceptional developer experience of shadcn/ui's CLI and registry system, launchkey aims to bring that same elegance and efficiency to the broader development ecosystem. While shadcn/ui revolutionized component distribution for React and Next.js projects, launchkey extends this paradigm to support any programming language, framework, or project type.

## The Problem

Starting new projects and adding functionality often involves:

- Searching for boilerplate code across different repositories
- Copy-pasting code that may be outdated or incompatible
- Manually adapting templates to fit your specific tech stack
- Reinventing the wheel for common patterns and integrations
- Inconsistent project structures across teams and organizations

## Our Solution

launchkey provides a unified CLI and registry system that makes code distribution and project scaffolding effortless:

### Template-Driven Project Initialization

```bash
launchkey init
```

Choose from curated templates for any language or framework - from Python FastAPI backends to Rust CLI tools, from React frontends to Go microservices.

### Incremental Feature Addition

```bash
launchkey add authentication
launchkey add database
launchkey add ci-cd
```

Add complex functionality with a single command. Each addition intelligently integrates with your existing codebase, following your project's conventions and patterns.

### Flexible Registry System

- **Default Registry**: Curated, high-quality templates and components maintained by the community
- **Custom Registries**: Configure your own registries for internal tools, company standards, or specialized use cases
- **Private Registries**: Keep proprietary templates and components secure within your organization

## Inspired by Excellence

launchkey builds upon the foundation laid by shadcn/ui's innovative approach to component distribution. Where shadcn/ui excels in the React ecosystem, launchkey expands this model to serve the entire software development landscape:

- **Language Agnostic**: Support for Python, JavaScript, TypeScript, Rust, Go, Java, C#, and more
- **Framework Flexible**: Works with any framework or no framework at all
- **Registry Driven**: Extensible system that grows with your needs
- **Developer Focused**: Prioritizes developer experience and rapid iteration

## Key Principles

- **Code Ownership**: Templates and components are copied into your project, not abstracted away
- **Customizable**: Every piece of generated code can be modified to fit your specific needs
- **Composable**: Mix and match components from different registries and sources
- **Consistent**: Maintain coding standards and architectural patterns across projects
- **Discoverable**: Rich metadata and search capabilities to find exactly what you need

## What Makes It Different

Unlike traditional scaffolding tools that provide one-time project generation, launchkey enables continuous enhancement throughout your project's lifecycle. Add new features, integrate third-party services, or adopt new patterns without the friction of manual implementation.

The registry system ensures that best practices evolve with the community, while the CLI provides a consistent interface regardless of your technology choices.

## Current Status

launchkey is in early development. We're currently designing the core architecture, registry format, and CLI interface. The technical implementation details will be shared as the project evolves.

## License

MIT
