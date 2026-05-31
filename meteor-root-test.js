import { Meteor } from 'meteor/meteor';
import path from 'path';
import './meteor-root.js';

const meteorSegment = `${path.sep}.meteor`;

Tinytest.add('Meteor.rootPath — type and presence', (test) => {
  test.isTrue(typeof Meteor.rootPath === 'string');
  test.isTrue(Meteor.rootPath.length > 0);
});

Tinytest.add('Meteor.rootPath — equals server process.cwd()', (test) => {
  test.equal(Meteor.rootPath, process.cwd());
});

Tinytest.add('Meteor.rootPath — equals path.resolve(".")', (test) => {
  test.equal(Meteor.rootPath, path.resolve('.'));
});

Tinytest.add('Meteor.rootPath — contains .meteor in test-packages environment', (test) => {
  test.isTrue(Meteor.rootPath.includes('.meteor'));
  test.isTrue(Meteor.rootPath.includes(meteorSegment));
});

Tinytest.add('Meteor.rootPath — no trailing path separator', (test) => {
  test.isFalse(
    Meteor.rootPath.length > 1 && Meteor.rootPath.endsWith(path.sep)
  );
});

Tinytest.add('Meteor.absolutePath — type and derivation from rootPath', (test) => {
  test.isTrue(typeof Meteor.absolutePath === 'string');
  test.isTrue(Meteor.absolutePath.length > 0);
  test.equal(Meteor.absolutePath, Meteor.rootPath.split(meteorSegment)[0]);
});

Tinytest.add('Meteor.absolutePath — application root before .meteor segment', (test) => {
  test.isTrue(Meteor.absolutePath.length < Meteor.rootPath.length);
  test.isFalse(Meteor.absolutePath.includes(meteorSegment));
  test.notEqual(Meteor.absolutePath, Meteor.rootPath);
});

Tinytest.add('Meteor.absolutePath — no trailing path separator', (test) => {
  test.isFalse(
    Meteor.absolutePath.length > 1 && Meteor.absolutePath.endsWith(path.sep)
  );
});

Tinytest.add('Meteor.absolutePath — production bundle without .meteor segment', (test) => {
  const productionRoot = path.join('/var', 'www', 'app', 'bundle', 'programs', 'server');
  test.equal(productionRoot.split(meteorSegment)[0], productionRoot);
});

Tinytest.add('Meteor paths — path.join for bundle-relative files', (test) => {
  const filePath = path.join(Meteor.rootPath, 'assets', 'app', 'config.json');
  test.isTrue(path.isAbsolute(filePath));
  test.isTrue(filePath.startsWith(Meteor.rootPath));
});

Tinytest.add('Meteor paths — path.join for app-root-relative files', (test) => {
  const filePath = path.join(Meteor.absolutePath, 'private', 'file.txt');
  test.isTrue(path.isAbsolute(filePath));
  test.isTrue(filePath.startsWith(Meteor.absolutePath));
});

Tinytest.add('Meteor paths — Windows-style .meteor split', (test) => {
  const rootPath = 'C:\\Projects\\my-app\\.meteor\\local\\build\\programs\\server';
  const expected = rootPath.split(`${path.win32.sep}.meteor`)[0];
  test.equal(expected, 'C:\\Projects\\my-app');
});

Tinytest.add('Meteor paths — absolutePath prefix of rootPath in dev/test', (test) => {
  test.isTrue(Meteor.rootPath.startsWith(Meteor.absolutePath));
  test.equal(
    Meteor.rootPath.slice(Meteor.absolutePath.length),
    `${meteorSegment}${Meteor.rootPath.split(meteorSegment)[1]}`
  );
});
