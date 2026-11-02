export const hooks = {
  afterAllResolved(lockfile) {
    for (const [packageId, pkg] of Object.entries(lockfile.packages ?? {})) {
      const resolution = pkg.resolution;
      if (
        /^(?:@[^/]+\/)?[^@/]+@\d+\.\d+\.\d+(?:[-+(]|$)/.test(packageId) &&
        resolution?.integrity &&
        !resolution.type &&
        !resolution.gitHosted
      ) {
        delete resolution.tarball;
      }
    }
    return lockfile;
  }
};
