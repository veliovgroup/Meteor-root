Package.describe({
  name: 'ostrio:meteor-root',
  version: '1.0.0',
  summary: '[Server] Get current path on your server, where is Meteor application is running',
  git: 'https://github.com/VeliovGroup/Meteor-root',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1');
  api.addFiles('meteor-root.js', 'server');
});

Npm.depends({
  'fs-extra': '0.16.3'
});