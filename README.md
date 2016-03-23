Meteor.rootPath
========
Get current path on your server, where is Meteor application is running
__This package supports Windows.__ Thanks to [@Konard](https://github.com/Konard).

Install:
========
```shell
meteor add ostrio:meteor-root
```

Usage:
========
```javascript
var pathToFile = Meteor.rootPath + '/folder/where/is/your/file.json';
```
Returns absolute path to `programs/server` folder of your compiled application, without trailing slash

```javascript
var pathToFile = Meteor.absolutePath + '/.meteor/local/build/programs/server/folder/where/is/your/file.json';
```
Returns absolute path to `.meteor` folder of your compiled application, without trailing slash