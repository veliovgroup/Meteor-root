Package.describe({
  name: 'ostrio:meteor-root',
  version: '1.1.1',
  summary: '[Server] Get path on a server where Meteor application is currently running',
  git: 'https://github.com/veliovgroup/Meteor-root',
  documentation: 'README.md'
});

Package.onUse((api) => {
  api.versionsFrom('2.0');
  api.use('ecmascript', 'server');
  api.mainModule('meteor-root.js', 'server');
});

Package.onTest((api) => {
  api.use(['tinytest', 'ecmascript'], 'server');
  api.addFiles('meteor-root-test.js', 'server');
});
