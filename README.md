# Meteor.rootPath

<a href="https://www.patreon.com/bePatron?u=20396046">
  <img src="https://c5.patreon.com/external/logo/become_a_patron_button@2x.png" width="160">
</a>

Get the path to currently running instance of Meteor application on a  __server__.

Features:

- 🤓 Support Windows, Linux, and MacOS environments;
- 👨‍💻 Globally available `Meteor.rootPath` — absolute path to `programs/server` directory
- 👨‍💻 Globally available `Meteor.absolutePath` — absolute path to `.meteor` directory

![meteor-root atmosphere library](https://raw.githubusercontent.com/VeliovGroup/Meteor-root/master/meteor-root.jpg)

## Install:

```shell
meteor add ostrio:meteor-root
```

## Usage:

```js
const pathToFile = Meteor.rootPath + '/directory/where/is/your/file.json';
```

Returns absolute path to `programs/server` directory of your compiled application, without trailing slash.

```js
const pathToFile = Meteor.absolutePath + '/.meteor/local/build/programs/server/directory/where/is/your/file.json';
```

Returns absolute path to `.meteor` directory of your compiled application, without trailing slash.

__Note__: Be aware of the path stored in `Meteor.absolutePath`, it points to the location where Meteor application is running. It isn't guaranteed to be the same path as the path of your project. For example, running Meteor in test-mode will return a path from a temporary location where it's running.

Thanks to [@Konard](https://github.com/Konard) for testing and maintaining Windows support.

## Support this project:

- [Become a patron](https://www.patreon.com/bePatron?u=20396046) — support my open source contributions with monthly donation
- Use [ostr.io](https://ostr.io) — [Monitoring](https://snmp-monitoring.com), [Analytics](https://ostr.io/info/web-analytics), [WebSec](https://domain-protection.info), [Web-CRON](https://web-cron.info) and [Pre-rendering](https://prerendering.com) for a website
