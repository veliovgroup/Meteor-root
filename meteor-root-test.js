import { Meteor } from 'meteor/meteor';
import './meteor-root.js';

Tinytest.add('Meteor.rootPath (see console for path)', (test) => {
  console.log(`Meteor.rootPath is: ${Meteor.rootPath}`);
  test.isTrue(/\.meteor/.test(Meteor.rootPath));
  test.equal(Meteor.rootPath, process.cwd());
});

Tinytest.add('Meteor.absolutePath (see console for path)', (test) => {
  console.log(`Meteor.absolutePath is: ${Meteor.absolutePath}`);
  test.equal(Meteor.absolutePath, process.cwd().split('/.meteor/')[0]);
});
