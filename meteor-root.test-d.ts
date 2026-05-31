/// <reference path="./meteor-root.d.ts" />

import path from 'path';
import { expectError, expectType } from 'tsd';
import { Meteor } from 'meteor/meteor';

expectType<string>(Meteor.rootPath);
expectType<string>(Meteor.absolutePath);

expectType<string>(path.join(Meteor.rootPath, 'assets', 'app', 'config.json'));
expectType<string>(path.join(Meteor.absolutePath, 'private', 'file.txt'));

expectError(function assignRootPathAsNumber() {
  const value: number = Meteor.rootPath;
  return value;
});

expectError(function assignAbsolutePathAsNumber() {
  const value: number = Meteor.absolutePath;
  return value;
});
