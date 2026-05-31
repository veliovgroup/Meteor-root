[![support](https://img.shields.io/badge/support-GitHub-white)](https://github.com/sponsors/veliovgroup)
[![support](https://img.shields.io/badge/support-PayPal-white)](https://paypal.me/veliovgroup)
<a href="https://ostr.io/info/built-by-developers-for-developers">
  <img src="https://ostr.io/apple-touch-icon-60x60.png" height="20">
</a>

# Meteor.rootPath

Get the path to currently running instance of *Meteor* application on a __server__.

__Features:__

- 🤓 Compatibility with Windows, Linux, and MacOS environments;
- 👨‍💻 Globally available `Meteor.rootPath` — absolute path to `programs/server` directory;
- 👨‍💻 Globally available `Meteor.absolutePath` — application root (path before `.meteor` in `rootPath`).

![meteor-root atmosphere library](https://raw.githubusercontent.com/veliovgroup/Meteor-root/master/meteor-root.jpg)

## Installation

```shell
meteor add ostrio:meteor-root
```

## Usage

```js
import path from 'path';

const pathToFile = path.join(Meteor.rootPath, 'directory', 'file.json');
```

Returns absolute path to `programs/server` directory of the running app, without trailing slash. Same as server `process.cwd()`.

```js
import path from 'path';

const pathToFile = path.join(Meteor.absolutePath, 'private', 'file.json');
```

Returns application root when `.meteor` is present in `rootPath` (dev, `meteor test-packages`). In typical production bundles, equals `Meteor.rootPath`. See [docs/paths-and-environments.md](docs/paths-and-environments.md).

> [!NOTE]
> Paths reflect where Meteor is running, not necessarily your git checkout. Test runners use temporary build directories.

## TypeScript

Types ship via `meteor-root.d.ts` (module augmentation on `meteor/meteor`). The package uses `zodern:types` and `package-types.json` at publish time.

In your app, add `zodern:types`, configure `tsconfig.json` paths for `meteor/*` (see [Meteor core types docs](https://docs.meteor.com/cli/using-core-types)), then run `meteor lint`.

## Testing

From the package directory:

```shell
npm install
npm test
```

Runs runtime tests (`mtest`) and TypeScript declaration tests (`tsd`). mtest requires a Chromium/Chrome binary for Puppeteer.

```shell
npm run test:once     # runtime only
npm run test:types    # declarations only

# Custom port (runtime)
npm run test:once -- --port 8888

# With local MongoDB (runtime)
MONGO_URL="mongodb://127.0.0.1:27017/meteor-root-test" npm run test:once
```

## Special thanks

- Thanks to [@Konard](https://github.com/Konard) for testing and maintaining Windows support.

## Support this project:

- Star on [GitHub](https://github.com/veliovgroup/Meteor-root)
- Star on [Atmosphere](https://atmospherejs.com/ostrio/meteor-root)
- [Sponsor maintainer via GitHub](https://github.com/sponsors/dr-dimitru) — support open source with one-time contribution or on a regular basis
- [Sponsor veliovgroup via GitHub](https://github.com/sponsors/veliovgroup) — support company behind this package
- [Support via PayPal](https://paypal.me/veliovgroup) — support our open source contributions
- Use [ostr.io](https://ostr.io) — [Monitoring](https://snmp-monitoring.com), [Analytics](https://ostr.io/info/web-analytics), [WebSec](https://domain-protection.info), [Web-CRON](https://web-cron.info) and [Pre-rendering](https://prerendering.com) for a website
