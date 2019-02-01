Package.describe({
  name: 'ostrio:meteor-root',
  version: '1.0.8',
  summary: '[Server] Get current path on server, where is Meteor application is running',
  git: 'https://github.com/VeliovGroup/Meteor-root',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.4');
  api.addFiles('meteor-root.js', 'server');
});

Package.onTest(function(api) {
  api.use(['ostrio:meteor-root', 'tinytest'], 'server');
  api.addFiles('meteor-root-test.js', 'server');
});
