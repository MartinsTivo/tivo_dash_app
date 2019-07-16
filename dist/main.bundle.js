/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main/main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/electron-is-dev/index.js":
/*!***********************************************!*\
  !*** ./node_modules/electron-is-dev/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nconst electron = __webpack_require__(/*! electron */ \"electron\");\n\nconst app = electron.app || electron.remote.app;\n\nconst isEnvSet = 'ELECTRON_IS_DEV' in process.env;\nconst getFromEnv = parseInt(process.env.ELECTRON_IS_DEV, 10) === 1;\n\nmodule.exports = isEnvSet ? getFromEnv : !app.isPackaged;\n\n\n//# sourceURL=webpack:///./node_modules/electron-is-dev/index.js?");

/***/ }),

/***/ "./node_modules/github-url-to-object/dist/commonjs.js":
/*!************************************************************!*\
  !*** ./node_modules/github-url-to-object/dist/commonjs.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isUrl = __webpack_require__(/*! is-url */ \"./node_modules/is-url/index.js\")\n\nvar laxUrlRegex = /(?:(?:[^:]+:)?[/][/])?(?:.+@)?([^/]+)([/][^?#]+)/\n\nmodule.exports = function (repoUrl, opts) {\n  var obj = {}\n  opts = opts || {}\n\n  if (!repoUrl) { return null }\n\n  // Allow an object with nested `url` string\n  // (common practice in package.json files)\n  if (repoUrl.url) { repoUrl = repoUrl.url }\n\n  if (typeof repoUrl !== 'string') { return null }\n\n  var shorthand = repoUrl.match(/^([\\w-_]+)\\/([\\w-_\\.]+)(?:#([\\w-_\\.]+))?$/)\n  var mediumhand = repoUrl.match(/^github:([\\w-_]+)\\/([\\w-_\\.]+)(?:#([\\w-_\\.]+))?$/)\n  var antiquated = repoUrl.match(/^git@[\\w-_\\.]+:([\\w-_]+)\\/([\\w-_\\.]+)$/)\n\n  if (shorthand) {\n    obj.user = shorthand[1]\n    obj.repo = shorthand[2]\n    obj.branch = shorthand[3] || 'master'\n    obj.host = 'github.com'\n  } else if (mediumhand) {\n    obj.user = mediumhand[1]\n    obj.repo = mediumhand[2]\n    obj.branch = mediumhand[3] || 'master'\n    obj.host = 'github.com'\n  } else if (antiquated) {\n    obj.user = antiquated[1]\n    obj.repo = antiquated[2].replace(/\\.git$/i, '')\n    obj.branch = 'master'\n    obj.host = 'github.com'\n  } else {\n    // Turn git+http URLs into http URLs\n    repoUrl = repoUrl.replace(/^git\\+/, '')\n\n    if (!isUrl(repoUrl)) { return null }\n\n    var ref = repoUrl.match(laxUrlRegex) || [];\n    var hostname = ref[1];\n    var pathname = ref[2];\n    if (!hostname) { return null }\n    if (hostname !== 'github.com' && hostname !== 'www.github.com' && !opts.enterprise) { return null }\n\n    var parts = pathname.match(/^\\/([\\w-_]+)\\/([\\w-_\\.]+)(\\/tree\\/[\\w-_\\.\\/]+)?(\\/blob\\/[\\w-_\\.\\/]+)?/)\n    // ([\\w-_\\.]+)\n    if (!parts) { return null }\n    obj.user = parts[1]\n    obj.repo = parts[2].replace(/\\.git$/i, '')\n\n    obj.host = hostname || 'github.com'\n\n    if (parts[3] && /^\\/tree\\/master\\//.test(parts[3])) {\n      obj.branch = 'master'\n      obj.path = parts[3].replace(/\\/$/, '')\n    } else if (parts[3]) {\n      obj.branch = parts[3].replace(/^\\/tree\\//, '').match(/[\\w-_.]+\\/{0,1}[\\w-_]+/)[0]\n    } else if (parts[4]) {\n      obj.branch = parts[4].replace(/^\\/blob\\//, '').match(/[\\w-_.]+\\/{0,1}[\\w-_]+/)[0]\n    } else {\n      obj.branch = 'master'\n    }\n  }\n\n  if (obj.host === 'github.com') {\n    obj.apiHost = 'api.github.com'\n  } else {\n    obj.apiHost = (obj.host) + \"/api/v3\"\n  }\n\n  obj.tarball_url = \"https://\" + (obj.apiHost) + \"/repos/\" + (obj.user) + \"/\" + (obj.repo) + \"/tarball/\" + (obj.branch)\n  obj.clone_url = \"https://\" + (obj.host) + \"/\" + (obj.user) + \"/\" + (obj.repo)\n\n  if (obj.branch === 'master') {\n    obj.https_url = \"https://\" + (obj.host) + \"/\" + (obj.user) + \"/\" + (obj.repo)\n    obj.travis_url = \"https://travis-ci.org/\" + (obj.user) + \"/\" + (obj.repo)\n    obj.zip_url = \"https://\" + (obj.host) + \"/\" + (obj.user) + \"/\" + (obj.repo) + \"/archive/master.zip\"\n  } else {\n    obj.https_url = \"https://\" + (obj.host) + \"/\" + (obj.user) + \"/\" + (obj.repo) + \"/blob/\" + (obj.branch)\n    obj.travis_url = \"https://travis-ci.org/\" + (obj.user) + \"/\" + (obj.repo) + \"?branch=\" + (obj.branch)\n    obj.zip_url = \"https://\" + (obj.host) + \"/\" + (obj.user) + \"/\" + (obj.repo) + \"/archive/\" + (obj.branch) + \".zip\"\n  }\n\n  // Support deep paths (like lerna-style repos)\n  if (obj.path) {\n    obj.https_url += obj.path\n  }\n\n  obj.api_url = \"https://\" + (obj.apiHost) + \"/repos/\" + (obj.user) + \"/\" + (obj.repo)\n\n  return obj\n}\n\n\n\n//# sourceURL=webpack:///./node_modules/github-url-to-object/dist/commonjs.js?");

/***/ }),

/***/ "./node_modules/is-url/index.js":
/*!**************************************!*\
  !*** ./node_modules/is-url/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n/**\n * Expose `isUrl`.\n */\n\nmodule.exports = isUrl;\n\n/**\n * RegExps.\n * A URL must match #1 and then at least one of #2/#3.\n * Use two levels of REs to avoid REDOS.\n */\n\nvar protocolAndDomainRE = /^(?:\\w+:)?\\/\\/(\\S+)$/;\n\nvar localhostDomainRE = /^localhost[\\:?\\d]*(?:[^\\:?\\d]\\S*)?$/\nvar nonLocalhostDomainRE = /^[^\\s\\.]+\\.\\S{2,}$/;\n\n/**\n * Loosely validate a URL `string`.\n *\n * @param {String} string\n * @return {Boolean}\n */\n\nfunction isUrl(string){\n  if (typeof string !== 'string') {\n    return false;\n  }\n\n  var match = string.match(protocolAndDomainRE);\n  if (!match) {\n    return false;\n  }\n\n  var everythingAfterProtocol = match[1];\n  if (!everythingAfterProtocol) {\n    return false;\n  }\n\n  if (localhostDomainRE.test(everythingAfterProtocol) ||\n      nonLocalhostDomainRE.test(everythingAfterProtocol)) {\n    return true;\n  }\n\n  return false;\n}\n\n\n//# sourceURL=webpack:///./node_modules/is-url/index.js?");

/***/ }),

/***/ "./node_modules/update-electron-app/index.js":
/*!***************************************************!*\
  !*** ./node_modules/update-electron-app/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const assert = __webpack_require__(/*! assert */ \"assert\")\nconst isURL = __webpack_require__(/*! is-url */ \"./node_modules/is-url/index.js\")\nconst isDev = __webpack_require__(/*! electron-is-dev */ \"./node_modules/update-electron-app/node_modules/electron-is-dev/index.js\")\nconst ms = __webpack_require__(/*! ms */ \"./node_modules/update-electron-app/node_modules/ms/index.js\")\nconst gh = __webpack_require__(/*! github-url-to-object */ \"./node_modules/github-url-to-object/dist/commonjs.js\")\nconst path = __webpack_require__(/*! path */ \"path\")\nconst fs = __webpack_require__(/*! fs */ \"fs\")\nconst os = __webpack_require__(/*! os */ \"os\")\nconst {format} = __webpack_require__(/*! util */ \"util\")\nconst pkg = __webpack_require__(/*! ./package.json */ \"./node_modules/update-electron-app/package.json\")\nconst userAgent = format(\n  '%s/%s (%s: %s)',\n  pkg.name,\n  pkg.version,\n  os.platform(),\n  os.arch()\n)\nconst supportedPlatforms = ['darwin', 'win32']\n\nmodule.exports = function updater (opts = {}) {\n  // check for bad input early, so it will be logged during development\n  opts = validateInput(opts)\n\n  // don't attempt to update during development\n  if (isDev) {\n    const message = 'update-electron-app config looks good; aborting updates since app is in development mode'\n    opts.logger ? opts.logger.log(message) : console.log(message)\n    return\n  }\n\n  opts.electron.app.isReady()\n    ? initUpdater(opts)\n    : opts.electron.app.on('ready', () => initUpdater(opts))\n}\n\nfunction initUpdater (opts) {\n  const {host, repo, updateInterval, logger, electron} = opts\n  const {app, autoUpdater, dialog} = electron\n  const feedURL = `${host}/${repo}/${process.platform}-${process.arch}/${app.getVersion()}`\n  const requestHeaders = {'User-Agent': userAgent}\n\n  function log (...args) {\n    logger.log(...args)\n  }\n\n  // exit early on unsupported platforms, e.g. `linux`\n  if (typeof process !== 'undefined' && process.platform && !supportedPlatforms.includes(process.platform)) {\n    log(`Electron's autoUpdater does not support the '${process.platform}' platform`)\n    return\n  }\n\n  log('feedURL', feedURL)\n  log('requestHeaders', requestHeaders)\n  autoUpdater.setFeedURL(feedURL, requestHeaders)\n\n  autoUpdater.on('error', err => {\n    log('updater error')\n    log(err)\n  })\n\n  autoUpdater.on('checking-for-update', () => {\n    log('checking-for-update')\n  })\n\n  autoUpdater.on('update-available', () => {\n    log('update-available; downloading...')\n  })\n\n  autoUpdater.on('update-not-available', () => {\n    log('update-not-available')\n  })\n\n  if (opts.notifyUser) {\n    autoUpdater.on('update-downloaded', (event, releaseNotes, releaseName, releaseDate, updateURL) => {\n      log('update-downloaded', arguments)\n\n      const dialogOpts = {\n        type: 'info',\n        buttons: ['Restart', 'Later'],\n        title: 'Application Update',\n        message: process.platform === 'win32' ? releaseNotes : releaseName,\n        detail: 'A new version has been downloaded. Restart the application to apply the updates.'\n      }\n\n      dialog.showMessageBox(dialogOpts, (response) => {\n        if (response === 0) autoUpdater.quitAndInstall()\n      })\n    })\n  }\n\n  // check for updates right away and keep checking later\n  autoUpdater.checkForUpdates()\n  setInterval(() => { autoUpdater.checkForUpdates() }, ms(updateInterval))\n}\n\nfunction validateInput (opts) {\n  const defaults = {\n    host: 'https://update.electronjs.org',\n    updateInterval: '10 minutes',\n    logger: console,\n    notifyUser: true\n  }\n  const {host, updateInterval, logger, notifyUser} = Object.assign({}, defaults, opts)\n\n  // allows electron to be mocked in tests\n  const electron = opts.electron || __webpack_require__(/*! electron */ \"electron\")\n\n  let repo = opts.repo\n  if (!repo) {\n    const pkgBuf = fs.readFileSync(path.join(electron.app.getAppPath(), 'package.json'))\n    const pkg = JSON.parse(pkgBuf.toString())\n    const repoString = (pkg.repository && pkg.repository.url) || pkg.repository\n    const repoObject = gh(repoString)\n    assert(\n      repoObject,\n      'repo not found. Add repository string to your app\\'s package.json file'\n    )\n    repo = `${repoObject.user}/${repoObject.repo}`\n  }\n\n  assert(\n    repo && repo.length && repo.includes('/'),\n    'repo is required and should be in the format `owner/repo`'\n  )\n\n  assert(\n    isURL(host) && host.startsWith('https'),\n    'host must be a valid HTTPS URL'\n  )\n\n  assert(\n    typeof updateInterval === 'string' && updateInterval.match(/^\\d+/),\n    'updateInterval must be a human-friendly string interval like `20 minutes`'\n  )\n\n  assert(\n    ms(updateInterval) >= 5 * 60 * 1000,\n    'updateInterval must be `5 minutes` or more'\n  )\n\n  assert(\n    logger && typeof logger.log,\n    'function'\n  )\n\n  return {host, repo, updateInterval, logger, electron, notifyUser}\n}\n\n\n//# sourceURL=webpack:///./node_modules/update-electron-app/index.js?");

/***/ }),

/***/ "./node_modules/update-electron-app/node_modules/electron-is-dev/index.js":
/*!********************************************************************************!*\
  !*** ./node_modules/update-electron-app/node_modules/electron-is-dev/index.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nconst getFromEnv = parseInt(process.env.ELECTRON_IS_DEV, 10) === 1;\nconst isEnvSet = 'ELECTRON_IS_DEV' in process.env;\n\nmodule.exports = isEnvSet ? getFromEnv : (process.defaultApp || /node_modules[\\\\/]electron[\\\\/]/.test(process.execPath));\n\n\n//# sourceURL=webpack:///./node_modules/update-electron-app/node_modules/electron-is-dev/index.js?");

/***/ }),

/***/ "./node_modules/update-electron-app/node_modules/ms/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/update-electron-app/node_modules/ms/index.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Helpers.\n */\n\nvar s = 1000;\nvar m = s * 60;\nvar h = m * 60;\nvar d = h * 24;\nvar w = d * 7;\nvar y = d * 365.25;\n\n/**\n * Parse or format the given `val`.\n *\n * Options:\n *\n *  - `long` verbose formatting [false]\n *\n * @param {String|Number} val\n * @param {Object} [options]\n * @throws {Error} throw an error if val is not a non-empty string or a number\n * @return {String|Number}\n * @api public\n */\n\nmodule.exports = function(val, options) {\n  options = options || {};\n  var type = typeof val;\n  if (type === 'string' && val.length > 0) {\n    return parse(val);\n  } else if (type === 'number' && isFinite(val)) {\n    return options.long ? fmtLong(val) : fmtShort(val);\n  }\n  throw new Error(\n    'val is not a non-empty string or a valid number. val=' +\n      JSON.stringify(val)\n  );\n};\n\n/**\n * Parse the given `str` and return milliseconds.\n *\n * @param {String} str\n * @return {Number}\n * @api private\n */\n\nfunction parse(str) {\n  str = String(str);\n  if (str.length > 100) {\n    return;\n  }\n  var match = /^(-?(?:\\d+)?\\.?\\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(\n    str\n  );\n  if (!match) {\n    return;\n  }\n  var n = parseFloat(match[1]);\n  var type = (match[2] || 'ms').toLowerCase();\n  switch (type) {\n    case 'years':\n    case 'year':\n    case 'yrs':\n    case 'yr':\n    case 'y':\n      return n * y;\n    case 'weeks':\n    case 'week':\n    case 'w':\n      return n * w;\n    case 'days':\n    case 'day':\n    case 'd':\n      return n * d;\n    case 'hours':\n    case 'hour':\n    case 'hrs':\n    case 'hr':\n    case 'h':\n      return n * h;\n    case 'minutes':\n    case 'minute':\n    case 'mins':\n    case 'min':\n    case 'm':\n      return n * m;\n    case 'seconds':\n    case 'second':\n    case 'secs':\n    case 'sec':\n    case 's':\n      return n * s;\n    case 'milliseconds':\n    case 'millisecond':\n    case 'msecs':\n    case 'msec':\n    case 'ms':\n      return n;\n    default:\n      return undefined;\n  }\n}\n\n/**\n * Short format for `ms`.\n *\n * @param {Number} ms\n * @return {String}\n * @api private\n */\n\nfunction fmtShort(ms) {\n  var msAbs = Math.abs(ms);\n  if (msAbs >= d) {\n    return Math.round(ms / d) + 'd';\n  }\n  if (msAbs >= h) {\n    return Math.round(ms / h) + 'h';\n  }\n  if (msAbs >= m) {\n    return Math.round(ms / m) + 'm';\n  }\n  if (msAbs >= s) {\n    return Math.round(ms / s) + 's';\n  }\n  return ms + 'ms';\n}\n\n/**\n * Long format for `ms`.\n *\n * @param {Number} ms\n * @return {String}\n * @api private\n */\n\nfunction fmtLong(ms) {\n  var msAbs = Math.abs(ms);\n  if (msAbs >= d) {\n    return plural(ms, msAbs, d, 'day');\n  }\n  if (msAbs >= h) {\n    return plural(ms, msAbs, h, 'hour');\n  }\n  if (msAbs >= m) {\n    return plural(ms, msAbs, m, 'minute');\n  }\n  if (msAbs >= s) {\n    return plural(ms, msAbs, s, 'second');\n  }\n  return ms + ' ms';\n}\n\n/**\n * Pluralization helper.\n */\n\nfunction plural(ms, msAbs, n, name) {\n  var isPlural = msAbs >= n * 1.5;\n  return Math.round(ms / n) + ' ' + name + (isPlural ? 's' : '');\n}\n\n\n//# sourceURL=webpack:///./node_modules/update-electron-app/node_modules/ms/index.js?");

/***/ }),

/***/ "./node_modules/update-electron-app/package.json":
/*!*******************************************************!*\
  !*** ./node_modules/update-electron-app/package.json ***!
  \*******************************************************/
/*! exports provided: _args, _development, _from, _id, _inBundle, _integrity, _location, _phantomChildren, _requested, _requiredBy, _resolved, _spec, _where, bugs, dependencies, description, devDependencies, homepage, jest, license, main, name, repository, scripts, standard, types, version, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"_args\\\":[[\\\"update-electron-app@1.5.0\\\",\\\"C:\\\\\\\\Users\\\\\\\\martinstiltins\\\\\\\\Documents\\\\\\\\TIVO_Win\\\"]],\\\"_development\\\":true,\\\"_from\\\":\\\"update-electron-app@1.5.0\\\",\\\"_id\\\":\\\"update-electron-app@1.5.0\\\",\\\"_inBundle\\\":false,\\\"_integrity\\\":\\\"sha512-g7noW9JfQ8Hwq6zw9lmZei+R/ikOIBcaZ04TbmIcU5zNfv23HkN80QLLAyiR/47KvfS4sjnh2/wuDq5nh8+0mQ==\\\",\\\"_location\\\":\\\"/update-electron-app\\\",\\\"_phantomChildren\\\":{},\\\"_requested\\\":{\\\"type\\\":\\\"version\\\",\\\"registry\\\":true,\\\"raw\\\":\\\"update-electron-app@1.5.0\\\",\\\"name\\\":\\\"update-electron-app\\\",\\\"escapedName\\\":\\\"update-electron-app\\\",\\\"rawSpec\\\":\\\"1.5.0\\\",\\\"saveSpec\\\":null,\\\"fetchSpec\\\":\\\"1.5.0\\\"},\\\"_requiredBy\\\":[\\\"#DEV:/\\\"],\\\"_resolved\\\":\\\"https://registry.npmjs.org/update-electron-app/-/update-electron-app-1.5.0.tgz\\\",\\\"_spec\\\":\\\"1.5.0\\\",\\\"_where\\\":\\\"C:\\\\\\\\Users\\\\\\\\martinstiltins\\\\\\\\Documents\\\\\\\\TIVO_Win\\\",\\\"bugs\\\":{\\\"url\\\":\\\"https://github.com/electron/update-electron-app/issues\\\"},\\\"dependencies\\\":{\\\"electron-is-dev\\\":\\\"^0.3.0\\\",\\\"github-url-to-object\\\":\\\"^4.0.4\\\",\\\"is-url\\\":\\\"^1.2.4\\\",\\\"ms\\\":\\\"^2.1.1\\\"},\\\"description\\\":\\\"A drop-in module that adds autoUpdating capabilities to Electron apps\\\",\\\"devDependencies\\\":{\\\"jest\\\":\\\"^22.4.3\\\",\\\"semantic-release\\\":\\\"^15.13.12\\\",\\\"standard\\\":\\\"^11.0.1\\\",\\\"standard-markdown\\\":\\\"^5.0.1\\\",\\\"travis-deploy-once\\\":\\\"^4.4.1\\\",\\\"tslint\\\":\\\"^5.10.0\\\",\\\"typescript\\\":\\\"^2.8.3\\\"},\\\"homepage\\\":\\\"https://github.com/electron/update-electron-app#readme\\\",\\\"jest\\\":{\\\"testURL\\\":\\\"http://localhost\\\"},\\\"license\\\":\\\"MIT\\\",\\\"main\\\":\\\"index.js\\\",\\\"name\\\":\\\"update-electron-app\\\",\\\"repository\\\":{\\\"type\\\":\\\"git\\\",\\\"url\\\":\\\"git+https://github.com/electron/update-electron-app.git\\\"},\\\"scripts\\\":{\\\"lint\\\":\\\"tslint -c tslint.json index.d.ts\\\",\\\"semantic-release\\\":\\\"semantic-release\\\",\\\"test\\\":\\\"jest && standard --fix && npm run lint && standard-markdown\\\",\\\"travis-deploy-once\\\":\\\"travis-deploy-once\\\",\\\"watch\\\":\\\"jest --watch --notify --notifyMode=change --coverage\\\"},\\\"standard\\\":{\\\"env\\\":{\\\"jest\\\":true}},\\\"types\\\":\\\"index.d.ts\\\",\\\"version\\\":\\\"1.5.0\\\"}\");\n\n//# sourceURL=webpack:///./node_modules/update-electron-app/package.json?");

/***/ }),

/***/ "./src/main/main.ts":
/*!**************************!*\
  !*** ./src/main/main.ts ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! electron */ \"electron\");\n/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(electron__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! url */ \"url\");\n/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(url__WEBPACK_IMPORTED_MODULE_2__);\n\r\n\r\n\r\n__webpack_require__(/*! update-electron-app */ \"./node_modules/update-electron-app/index.js\")();\r\nconst isDev = __webpack_require__(/*! electron-is-dev */ \"./node_modules/electron-is-dev/index.js\");\r\n// this should be placed at top of main.js to handle setup events quickly\r\n// squirrel event handled and app will exit in 1000ms, so don't do anything else\r\nif (!handleSquirrelEvent(electron__WEBPACK_IMPORTED_MODULE_0__[\"app\"])) {\r\n    let mainWindow;\r\n    function createWindow() {\r\n        mainWindow = new electron__WEBPACK_IMPORTED_MODULE_0__[\"BrowserWindow\"]({\r\n            height: 800,\r\n            width: 800\r\n        });\r\n        mainWindow.loadURL(url__WEBPACK_IMPORTED_MODULE_2__[\"format\"]({\r\n            pathname: path__WEBPACK_IMPORTED_MODULE_1__[\"join\"](__dirname, './index.html'),\r\n            protocol: 'file:',\r\n            slashes: true\r\n        }));\r\n        // Open Dev Tools\r\n        // mainWindow.webContents.openDevTools();\r\n        // When window is closed \r\n        mainWindow.on('closed', () => {\r\n            // Close all window elements and handle final actions\r\n            mainWindow = null;\r\n        });\r\n    }\r\n    electron__WEBPACK_IMPORTED_MODULE_0__[\"app\"].on('ready', createWindow);\r\n    electron__WEBPACK_IMPORTED_MODULE_0__[\"app\"].on('window-all-closed', () => {\r\n        if (process.platform != 'darwin') {\r\n            electron__WEBPACK_IMPORTED_MODULE_0__[\"app\"].quit();\r\n        }\r\n    });\r\n    electron__WEBPACK_IMPORTED_MODULE_0__[\"app\"].on('activate', () => {\r\n        if (mainWindow === null) {\r\n            createWindow();\r\n        }\r\n    });\r\n    if (isDev) {\r\n        console.log(\"Running in development\");\r\n    }\r\n    else {\r\n        const server = 'https://github.com/MartinsTivo/tivo_dash_app.git';\r\n        const feed = `${server}/update/${process.platform}/${electron__WEBPACK_IMPORTED_MODULE_0__[\"app\"].getVersion()}`;\r\n        electron__WEBPACK_IMPORTED_MODULE_0__[\"autoUpdater\"].setFeedURL({ url: feed });\r\n        setInterval(() => {\r\n            electron__WEBPACK_IMPORTED_MODULE_0__[\"autoUpdater\"].checkForUpdates();\r\n        }, 60000);\r\n        electron__WEBPACK_IMPORTED_MODULE_0__[\"autoUpdater\"].on('update-downloaded', (event, releaseNotes, releaseName) => {\r\n            const dialogOpts = {\r\n                type: 'info',\r\n                buttons: ['Restart', 'Later'],\r\n                title: 'Application Update',\r\n                message: process.platform === 'win32' ? releaseNotes : releaseName,\r\n                detail: 'A new version has been downloaded. Restart the application to apply the updates.'\r\n            };\r\n            electron__WEBPACK_IMPORTED_MODULE_0__[\"dialog\"].showMessageBox(dialogOpts, (response) => {\r\n                if (response === 0)\r\n                    electron__WEBPACK_IMPORTED_MODULE_0__[\"autoUpdater\"].quitAndInstall();\r\n            });\r\n        });\r\n        electron__WEBPACK_IMPORTED_MODULE_0__[\"autoUpdater\"].on('error', message => {\r\n            console.error('There was a problem updating the application');\r\n            console.error(message);\r\n        });\r\n    }\r\n}\r\nfunction handleSquirrelEvent(application) {\r\n    if (process.argv.length === 1) {\r\n        return false;\r\n    }\r\n    const ChildProcess = __webpack_require__(/*! child_process */ \"child_process\");\r\n    const path = __webpack_require__(/*! path */ \"path\");\r\n    const appFolder = path.resolve(process.execPath, '..');\r\n    const rootAtomFolder = path.resolve(appFolder, '..');\r\n    const updateDotExe = path.resolve(path.join(rootAtomFolder, 'Update.exe'));\r\n    const exeName = path.basename(process.execPath);\r\n    const spawn = function (command, args) {\r\n        let spawnedProcess, error;\r\n        try {\r\n            spawnedProcess = ChildProcess.spawn(command, args, {\r\n                detached: true\r\n            });\r\n        }\r\n        catch (error) { }\r\n        return spawnedProcess;\r\n    };\r\n    const spawnUpdate = function (args) {\r\n        return spawn(updateDotExe, args);\r\n    };\r\n    const squirrelEvent = process.argv[1];\r\n    switch (squirrelEvent) {\r\n        case '--squirrel-install':\r\n        case '--squirrel-updated':\r\n            // Optionally do things such as:\r\n            // - Add your .exe to the PATH\r\n            // - Write to the registry for things like file associations and\r\n            //   explorer context menus\r\n            // Install desktop and start menu shortcuts\r\n            spawnUpdate(['--createShortcut', exeName]);\r\n            setTimeout(application.quit, 1000);\r\n            return true;\r\n        case '--squirrel-uninstall':\r\n            // Undo anything you did in the --squirrel-install and\r\n            // --squirrel-updated handlers\r\n            // Remove desktop and start menu shortcuts\r\n            spawnUpdate(['--removeShortcut', exeName]);\r\n            setTimeout(application.quit, 1000);\r\n            return true;\r\n        case '--squirrel-obsolete':\r\n            // This is called on the outgoing version of your app before\r\n            // we update to the new version - it's the opposite of\r\n            // --squirrel-updated\r\n            application.quit();\r\n            return true;\r\n    }\r\n}\r\n;\r\n\n\n//# sourceURL=webpack:///./src/main/main.ts?");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"assert\");\n\n//# sourceURL=webpack:///external_%22assert%22?");

/***/ }),

/***/ "child_process":
/*!********************************!*\
  !*** external "child_process" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"child_process\");\n\n//# sourceURL=webpack:///external_%22child_process%22?");

/***/ }),

/***/ "electron":
/*!***************************!*\
  !*** external "electron" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"electron\");\n\n//# sourceURL=webpack:///external_%22electron%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"os\");\n\n//# sourceURL=webpack:///external_%22os%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"url\");\n\n//# sourceURL=webpack:///external_%22url%22?");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"util\");\n\n//# sourceURL=webpack:///external_%22util%22?");

/***/ })

/******/ });