# Testing

Run tests with [`@zodern/mtest`](https://github.com/zodern/mtest):

```shell
npm install
npm test              # mtest + tsd
npm run test:once     # runtime Tinytest only
npm run test:types    # TypeScript declarations (tsd)
```

Do not use bare `meteor test-packages` for CI — mtest runs Tinytest headlessly and reports results in the terminal.

## Requirements

- Meteor 2.x or 3.x
- Node.js with `@zodern/mtest` (devDependency)
- Chromium/Chrome for Puppeteer (mtest launches headless browser for the `test-in-console` driver)

## Apple Silicon / missing Chrome

If mtest fails with `spawn Unknown system error -88`, bundled Puppeteer Chromium may be incompatible. Point Puppeteer at a local Chrome/Chromium binary:

```shell
export PUPPETEER_EXECUTABLE_PATH="/path/to/Google Chrome for Testing"
npm test
```

Playwright-installed Chrome for Testing works:

```shell
export PUPPETEER_EXECUTABLE_PATH="$HOME/Library/Caches/ms-playwright/chromium-1223/chrome-mac-arm64/Google Chrome for Testing.app/Contents/MacOS/Google Chrome for Testing"
npm test
```

## TypeScript type tests

Declaration tests use [`tsd`](https://github.com/SamVerschueren/tsd) against `meteor-root.d.ts` (module augmentation on `meteor/meteor`):

```shell
npm run test:types
```

## Options

```shell
# Custom port
npm test -- --port 8888

# Specific Meteor release
npm test -- --release 3.4.1

# Local MongoDB
MONGO_URL="mongodb://127.0.0.1:27017/meteor-root-test" npm test
```

## Watch mode

Omit `--once` to re-run on file changes:

```shell
npx mtest --package ./
```
