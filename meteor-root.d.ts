declare module 'meteor/meteor' {
  namespace Meteor {
    /**
     * Absolute path to the running server bundle directory (`programs/server`).
     * Same as `process.cwd()` on the server.
     */
    const rootPath: string;

    /**
     * Application root directory: path before the first `.meteor` segment in
     * `rootPath`. When `.meteor` is not present (typical production bundles),
     * equals `rootPath`.
     */
    const absolutePath: string;
  }
}
