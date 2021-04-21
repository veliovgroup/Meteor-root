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
- 👨‍💻 Globally available `Meteor.absolutePath` — absolute path to `.meteor` directory.

![meteor-root atmosphere library](https://raw.githubusercontent.com/veliovgroup/Meteor-root/master/meteor-root.jpg)

## Installation

```shell
meteor add ostrio:meteor-root
```

## Usage

```js
const pathToFile = `${Meteor.rootPath}/directory/where/is/your/file.json`;
```

Returns absolute path to `programs/server` directory of your compiled application, without trailing slash.

```js
const pathToFile = `${Meteor.absolutePath}/.meteor/local/build/programs/server/directory/where/is/your/file.json`;
```

Returns absolute path to `.meteor` directory of your compiled application, without trailing slash.

__Note__: Be aware of the path stored in `Meteor.absolutePath`, it points to the location where Meteor application is running. It isn't guaranteed to be the same path as the path of your project. For example, running Meteor in test-mode will return a path from a temporary location where it's running.

## Special thanks

- Thanks to [@Konard](https://github.com/Konard) for testing and maintaining Windows support.

## Testing

1. Clone this package
2. In Terminal (*Console*) go to directory where package is cloned
3. Then run:

```shell
# Default
meteor test-packages ./

# With custom port
meteor test-packages ./ --port 8888

# With local MongoDB and custom port
MONGO_URL="mongodb://127.0.0.1:27017/meteor-root-test" meteor test-packages ./ --port 8888
```

## Support this project:

- Star on [GitHub](https://github.com/veliovgroup/Meteor-root)
- Star on [Atmosphere](https://atmospherejs.com/ostrio/meteor-root)
- [Sponsor maintainer via GitHub](https://github.com/sponsors/dr-dimitru) — support open source with one-time contribution or on a regular basis
- [Sponsor veliovgroup via GitHub](https://github.com/sponsors/veliovgroup) — support company behind this package
- [Support via PayPal](https://paypal.me/veliovgroup) — support our open source contributions
- Use [ostr.io](https://ostr.io) — [Monitoring](https://snmp-monitoring.com), [Analytics](https://ostr.io/info/web-analytics), [WebSec](https://domain-protection.info), [Web-CRON](https://web-cron.info) and [Pre-rendering](https://prerendering.com) for a website
