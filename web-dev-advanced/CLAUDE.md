# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this folder (`web-dev-advanced/` inside the `fullstack-bootcamp` repository).

## Overview

A collection of web-advanced bootcamp challenge solutions, not a single app. Lesson folders are named `<topic>_<lesson>` or `<topic>-<lesson>` (e.g. `typescript-basics/`, `backend-mvc-pattern/`, `nestjs_auth/`, `nextjs_app-router/`, `devops_testing/`, `ai_openai-sdk/`); `real-time-communication/`, `software-design/` and `coding-assessments/` hold one subfolder per lesson or challenge. Each lesson holds one or more **independent projects**. Each project has its own `package.json`, `node_modules` and `pnpm-lock.yaml`. There is no workspace tooling and no build or test command for the whole folder.

The task for a lesson is usually in that lesson's or project's `README.md` (e.g. "Task 1 … Task 3"). Read it before changing a challenge.

Some projects are the same app carried forward across lessons (e.g. `cyber-chat` → `cyber-chat_typeorm` → `cyber-chat_restful` → `cyber-chat_auth` → `cyber-chat_swagger` → `cyber-chat_testing`; `kikis-delivery-service` and `code-snippet-library` across the `nextjs_*` lessons). Each copy is a separate snapshot. Edit only the one the user means, and don't sync changes to the other copies.

## Package manager

All projects use **pnpm** (version pinned in each `package.json` via `packageManager`). Never run `npm install` or `npx` here — that would create a `package-lock.json` next to the `pnpm-lock.yaml`.

- Install: `pnpm install` (`pnpm install --frozen-lockfile` to install exactly the locked versions).
- Run a script: `pnpm <script>` (e.g. `pnpm dev`); arguments are passed through without `--` (`pnpm test --run`).
- Add a package: `pnpm add <pkg>` / `pnpm add -D <pkg>`. pnpm only lets a project import packages listed in its own `package.json` — if an import suddenly can't be found, the package is missing there.
- Run a local binary: `pnpm exec <bin>`; a one-off tool: `pnpm dlx <tool>`.
- Packages with install scripts (`better-sqlite3`, `sqlite3`, `bcrypt`, `esbuild`, `@swc/core`) are allowed in the project's own `pnpm-workspace.yaml` (`allowBuilds`). Never add a `pnpm-workspace.yaml` to a folder that contains other projects.
- Four projects also keep a `bun.lock` because they can be run with Bun (`nestjs_basics-2/cyber-chat`, `nestjs_typeORM/cyber-chat_typeorm`, `typescript-advanced-setup/bun-and-nodemon`, `backend-basics-and-express/bookmark-manager-api`).

## Working in a project

Always `cd` into the specific project directory before running commands. Scripts differ between projects, so check that project's `package.json` first. Typical stacks:

- **Next.js** (`nextjs_*/*`, `ai_*/*`, `real-time-communication/polling_and_server-sent-events/*`): `pnpm dev` / `pnpm build`. Several have a `docker-compose.yml` for Postgres (`docker compose up -d`).
- **NestJS** (`nestjs_*/*`, `devops_*/cyber-chat*`, `real-time-communication/real-time-chat/real-time-communication_backend`): `pnpm start:dev`. Most use TypeORM with SQLite (`better-sqlite3`). `cyber-chat_typeorm` has `pnpm migration:generate|run|revert`. `nestjs_basics-2/cyber-chat` runs on Bun.
- **Express** (`backend-*/*`, `backend_sql-basics/*`): `pnpm dev` (`tsx watch src/index.ts`, or `nodemon` in the MVC challenge).
- **Docker** (`devops_docker-*/*`): Dockerfiles and compose files. `scoreboard-service_adv` has `pnpm docker:dev` / `docker:prod`.

## Tests

Tests are Vitest wherever they exist. Most projects have none, and their `test` script is the default placeholder that exits 1.

- `ai_openai-sdk/openai-sdk-chat`: `pnpm test`, or `pnpm exec vitest run src/lib/formatSentAt.test.ts` for a single file.
- `devops_testing/cyber-chat_testing`: `pnpm exec vitest run` (its `pnpm test` is still the placeholder). Uses `unplugin-swc` for Nest decorators, with a `src` path alias.
- `devops_testing/code-along`: `pnpm exec vitest run cart.spec.ts`.
- `real-time-communication/real-time-chat/real-time-communication_backend`: `pnpm test`, `pnpm test:e2e`.
- `devops_docker-basics/cyber-chat`: Jest (`pnpm test`, `pnpm test:e2e`).

The `package.json` in this folder holds shared Vitest/Testing Library devDependencies and the `lint` script used by the commit hook in `.claude/settings.json`.

## Project-level guidance

`ai_openai-sdk/openai-sdk-chat/CLAUDE.md` documents that app's architecture (server actions, Postgres on port 5434, localStorage vs DB state). Read it when working there.

The `/ship` skill in `ai_openai-sdk/openai-sdk-chat/.claude/skills/ship/` runs tests, `tsc` and lint for `openai-sdk-chat`, then commits the staged changes.

## Git conventions

- Commit subjects are lowercase and imperative (e.g. `add formatSentAt helper for message timestamps with tests`).
- Challenges are developed on `challenge/<topic>` branches and merged into `main` via PR.
- `coding-assessments/` challenges are meant to be solved **without AI help** (see its README). Don't write solutions there unless the user explicitly asks.
