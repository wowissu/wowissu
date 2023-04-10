const staticPaths = new Set(["/wowissu/","/wowissu/@qwik-city-not-found-paths.js","/wowissu/@qwik-city-plan.mjs","/wowissu/@qwik-city-static-paths.js","/wowissu/demo/flower/","/wowissu/demo/todolist/","/wowissu/entry.ssr.js","/wowissu/entry.ssr.mjs","/wowissu/package.json","/wowissu/sitemap.xml"]);
function isStaticPath(method, url) {
  if (method.toUpperCase() !== 'GET') {
    return false;
  }
  const p = url.pathname;
  if (p.startsWith("/wowissu/build/")) {
    return true;
  }
  if (p.startsWith("/wowissu/assets/")) {
    return true;
  }
  if (staticPaths.has(p)) {
    return true;
  }
  if (p.endsWith('/q-data.json')) {
    const pWithoutQdata = p.replace(/\/q-data.json$/, '');
    if (staticPaths.has(pWithoutQdata + '/')) {
      return true;
    }
    if (staticPaths.has(pWithoutQdata)) {
      return true;
    }
  }
  return false;
}
export { isStaticPath };