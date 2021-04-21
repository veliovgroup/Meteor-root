import { Meteor } from 'meteor/meteor';
import path from 'path';

Meteor.rootPath = path.resolve('.');
Meteor.absolutePath = Meteor.rootPath.split(`${path.sep}.meteor`)[0];
