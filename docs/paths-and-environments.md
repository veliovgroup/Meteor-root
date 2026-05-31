# Paths and environments

## What each property returns

| Property | Typical dev / `meteor test-packages` | Typical production bundle |
| --- | --- | --- |
| `Meteor.rootPath` | `.../your-app/.meteor/local/build/programs/server` | `.../bundle/programs/server` |
| `Meteor.absolutePath` | `.../your-app` | Same as `Meteor.rootPath` when `.meteor` is absent from the path |

Both values are resolved from `path.resolve('.')` (server `process.cwd()`), without a trailing slash.

## Implementation

```js
Meteor.rootPath = path.resolve('.');
Meteor.absolutePath = Meteor.rootPath.split(`${path.sep}.meteor`)[0];
```

`absolutePath` strips everything from the first `${path.sep}.meteor` segment onward. On Windows, `${path.sep}.meteor` resolves to `\.meteor`.

## Edge cases

### Production bundles

Deployed apps usually run from `programs/server` and the filesystem path no longer contains `.meteor`. In that case `Meteor.absolutePath === Meteor.rootPath`.

Use `Meteor.rootPath` for files colocated with the running server bundle. Do not assume `Meteor.absolutePath` points to your git checkout on production.

### `meteor test-packages`

Meteor copies the package into a temporary app under `.meteor/local/build/...`. Paths reflect that temp tree, not your package checkout directory.

### `meteor test` / `--full-app`

Same temporary-build behavior as package tests. Paths follow the test runner app, not your project root.

### Windows

Always build paths with `path.join()` / `path.resolve()`. Do not hardcode `/` separators when comparing against these values.

## Alternatives

For new code that only needs the server bundle directory, `process.cwd()` on the server is equivalent to `Meteor.rootPath` once this package is loaded.

This package exists to provide a stable, documented global API used by older Meteor packages (for example `ostrio:files`).
