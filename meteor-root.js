var path            = Npm.require('path');
Meteor.rootPath     = path.resolve('.');
Meteor.absolutePath = Meteor.rootPath.split(path.sep + '.meteor')[0];
