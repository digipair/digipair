# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Digipair is an AI platform that provides tools for creating and managing AI agents through a PINS (Programming Intelligence for Natural Systems) language. The project consists of:

- **Engine**: Core interpreter for the PINS language (`libs/engine/`)
- **Factory**: Web application for training and configuring AI agents (`apps/factory/`)
- **Skills**: Modular libraries providing specific functionality (`libs/skill-*/`)

## Architecture

This is an Nx monorepo with the following structure:

- `apps/` - Applications (factory web app)
- `libs/` - Libraries and skills (engine + 60+ skill packages)
- `docs/` - Documentation website
- `tools/` - Build and deployment scripts

## Development Commands

**Build & Test:**
```bash
# Build specific package
yarn nx build <package-name>
# Examples:
yarn nx build engine
yarn nx build factory

# Run tests
yarn nx test <package-name>

# Lint code
yarn nx lint <package-name>
```

**Factory Development:**
```bash
# Start factory app in development
yarn nx serve factory
# Runs on http://localhost:4200 by default

# Build factory for production
yarn nx build factory
```

**Publishing:**
```bash
# Publish all packages (see complex publish script in package.json)
yarn publish --npmversion <version>
```

## Key Technologies

- **TypeScript** - Primary language
- **NestJS** - Backend framework for factory app
- **Nx** - Monorepo management
- **Rollup** - Package bundling
- **Jest** - Testing framework
- **Various AI/ML libraries** - LangChain, TensorFlow, OpenAI, etc.

## Skills System

Skills are modular packages that extend the engine's capabilities:
- Each skill in `libs/skill-*` has its own package.json and schema
- Skills include integrations for APIs (OpenAI, AWS S3, MongoDB), web components, utilities, etc.
- Skills are built independently and can be published separately

## Factory Application

The factory app (`apps/factory/`) is a NestJS web application that:
- Provides a web interface for managing AI agents
- Serves on port 8080 by default (configurable via PORT env var)
- Uses DIGIPAIR_FACTORY_PATH env var for data directory (defaults to `./factory`)
- Automatically copies initial configuration files from assets on first run

## Working with Tests

Most packages have Jest configuration. Run tests for specific packages:
```bash
yarn nx test skill-basic
yarn nx test engine
```

## Environment Setup

The factory app expects:
- `PORT` - Server port (default: 8080)  
- `DIGIPAIR_FACTORY_PATH` - Directory for factory data (default: ./factory)