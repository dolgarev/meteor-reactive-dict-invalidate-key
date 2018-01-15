Package.describe({
  name: 'liberation:reactive-dict-invalidate-key',
  version: '0.0.2',
  // Brief, one-line summary of the package.
  summary: 'A new method "invalidateKey" for ReaсtiveDict.',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/dolgarev/meteor-reactive-dict-invalidate-key.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.5.2');
  api.use(['ecmascript', 'reactive-dict']);
  api.mainModule('reactive-dict-invalidate-key.js');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('liberation:reactive-dict-invalidate-key');
  api.mainModule('reactive-dict-invalidate-key-tests.js');
});
