Meteor.rootPath
========
Get current path on your server, where is Meteor application is running

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
Returns absolute path to `programs/server` folder of your compiled application