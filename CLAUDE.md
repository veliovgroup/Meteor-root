# CLAUDE.md

This file provides guidance to agentic IDEs/CLI dev tools when working with code in this repository.

## What this is

`ostrio:meteor-root` is a tiny **server-only Meteor (Atmosphere) package** that exposes two globals on the `Meteor` object:

- `Meteor.rootPath` — `path.resolve('.')`, equal to the server's `process.cwd()`; the absolute path to the running app's `programs/server` directory, with no trailing separator.
- `Meteor.absolutePath` — the portion of `rootPath` before the `${path.sep}.meteor` segment. In dev / `meteor test-packages` this is the application root (before `.meteor`); in production bundles (no `.meteor` in the path) it equals `rootPath`.

The entire implementation is `meteor-root.js` (5 lines). Keep it minimal and dependency-free — only Node's `path` and `meteor/meteor` are used. The package exists to provide a stable, documented global API relied on by older Meteor packages (e.g. `ostrio:files`); treat the two globals' behavior as a public contract.

## Commands

```shell
npm install        # installs @zodern/mtest (the only devDependency)
npm test           # runs the test suite via mtest --package ./ --once
npm test -- --port 8888                                   # custom port
MONGO_URL="mongodb://127.0.0.1:27017/meteor-root-test" npm test   # with local MongoDB
```

```shell
npm test -- --release 3.4.1   # pin a specific Meteor release
npx mtest --package ./        # watch mode (omit --once)
```

Tests use [`@zodern/mtest`](https://github.com/zodern/mtest), which runs Tinytest in the terminal and **requires a Chromium/Chrome binary for Puppeteer**. Do not use bare `meteor test-packages` for CI. There is no separate build or lint step; types are validated downstream via `meteor lint` in consuming apps that use `zodern:types`.

To run a single test, comment out the other `Tinytest.add(...)` blocks in `meteor-root-test.js` — mtest/Tinytest has no built-in name filter here.

**Apple Silicon / missing Chrome:** if mtest fails with `spawn Unknown system error -88`, point Puppeteer at a real Chrome binary via `PUPPETEER_EXECUTABLE_PATH` (e.g. a Playwright "Google Chrome for Testing"). See `docs/testing.md`.

CI (`.github/workflows/test.yml`) runs the suite on Node 22 across a Meteor matrix: `2.14`, `2.15`, `2.16`, `3.2`, `3.3.1`, `3.4`. Keep changes compatible across both the 2.x and 3.x lines.

## Architecture & files

- `package.js` — Atmosphere manifest. Declares `server` architecture for the main module (`meteor-root.js`), the types file (`meteor-root.d.ts`), and tests (`meteor-root-test.js`). Supports Meteor `2.0` and `3.0` (`api.versionsFrom(['2.0', '3.0'])`). **Do not add client code or a client architecture.**
- `package.json` — npm side; only purpose is the `test` script and the `@zodern/mtest` devDependency. `meteor-root.d.ts` augments the `meteor/meteor` module's `Meteor` namespace and must be kept in sync with the two globals.
- `meteor-root-test.js` imports `./meteor-root.js` directly and asserts: types/presence, `process.cwd()` equality, no trailing separator, `.meteor` split behavior, and Windows-style path handling.

## Conventions (from .cursor/rules and the package's nature)

- **Server-only.** Never introduce client code.
- **Cross-platform (Windows, Linux, macOS).** Always use Node `path` (`path.sep`, `path.win32`) for path manipulation — never hardcode `/` or `\`.
- **Keep it dependency-free.** Only `path` and `meteor/meteor`.
- When changing the globals, update `meteor-root.d.ts`, `meteor-root-test.js`, the README, and `.cursor/rules/meteor-root.mdc` together.
- Paths reflect where Meteor is *running*, not the git checkout; test runners use temporary build directories, so tests assert structure/relationships rather than concrete paths.

## Further docs

- `docs/paths-and-environments.md` — behavior across dev / test / production environments.
- `docs/testing.md` — testing details.
