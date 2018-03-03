Meteor.rootPath
========
Get current path on your server, where is Meteor application is running.

__This package supports Windows.__ Thanks to [@Konard](https://github.com/Konard).

Install:
========
```shell
meteor add ostrio:meteor-root
```

Usage:
========
```javascript
const pathToFile = Meteor.rootPath + '/folder/where/is/your/file.json';
```
Returns absolute path to `programs/server` folder of your compiled application, without trailing slash.

```javascript
const pathToFile = Meteor.absolutePath + '/.meteor/local/build/programs/server/folder/where/is/your/file.json';
```
Returns absolute path to `.meteor` folder of your compiled application, without trailing slash.

__Note__: Be aware of that the path, returned by `Meteor.absolutePath` returns the location from where your Meteor application is running from. This is not guaranteed to be the same as the path of your project. Running Meteor in test-mode, for example, will return a path from a temporary location it's running.