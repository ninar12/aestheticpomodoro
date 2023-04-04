"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// server.js
var server_exports = {};
__export(server_exports, {
  handler: () => handler
});
module.exports = __toCommonJS(server_exports);
var import_netlify = require("@remix-run/netlify");

// server-entry-module:@remix-run/dev/server-build
var server_build_exports = {};
__export(server_build_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});

// node_modules/@remix-run/dev/dist/config/defaults/node/entry.server.react-stream.tsx
var entry_server_react_stream_exports = {};
__export(entry_server_react_stream_exports, {
  default: () => handleRequest
});
var import_stream = require("stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_runtime = require("react/jsx-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return (0, import_isbot.default)(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onAllReady() {
          let body = new import_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onShellReady() {
          let body = new import_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          console.error(error), responseStatusCode = 500;
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.jsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  meta: () => meta
});
var import_react2 = require("@remix-run/react");

// app/index.css
var app_default = "/build/_assets/index-LZNZVGWE.css";

// public/favicon.ico
var favicon_default = "/build/_assets/favicon-KEYQRVOS.ico";

// app/root.jsx
var import_jsx_runtime2 = require("react/jsx-runtime"), meta = () => ({
  charset: "utf-8",
  title: "lana pomodoro",
  viewport: "width=device-width,initial-scale=1"
}), links = () => [
  {
    rel: "stylesheet",
    href: app_default
  },
  {
    rel: "icon",
    href: favicon_default
  }
];
function App() {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Meta, {}),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_react2.Links, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("link", { rel: "preconnect", href: "https://fonts.googleapis.com" }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("link", { rel: "icon", href: "../public/favicon.ico", type: "image/png" })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("body", { style: { overflowY: "hidden", overflowX: "hidden", fontFamily: "PlantinMTLightItalic, cambria, serif", margin: 0, background: "#FFFDF6" }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Outlet, {}),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.ScrollRestoration, {}),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Scripts, {}),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.LiveReload, {})
    ] })
  ] });
}

// app/routes/index.jsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index
});

// app/timer.jsx
var import_react3 = require("react"), import_react_youtube = __toESM(require("react-youtube")), import_react_router = require("react-router"), import_jsx_runtime3 = require("react/jsx-runtime"), PomodoroTimer = () => {
  let [workSeconds, setWorkSeconds] = (0, import_react3.useState)(1500), [restSeconds, setRestSeconds] = (0, import_react3.useState)(300), [isWorking, setIsWorking] = (0, import_react3.useState)(!1), [isResting, setIsResting] = (0, import_react3.useState)(!1), [sessionCount, setSessionCount] = (0, import_react3.useState)(0), [session, setSession] = (0, import_react3.useState)(null), [player, setPlayer] = (0, import_react3.useState)(null), youtubeID = "p1IIHbbdekA", onReady = (e) => {
    setPlayer(e.target);
  }, onRestart = (e) => {
    setPlayer(e.target), player.restartVideo();
  };
  function play() {
    player.playVideo();
  }
  function stop() {
    player.pauseVideo();
  }
  function togglePlay(yes) {
    yes ? play() : stop();
  }
  (0, import_react3.useEffect)(() => {
    let workInterval = null, restInterval = null;
    return isWorking ? (setSession("working"), workInterval = setInterval(() => {
      setWorkSeconds((seconds) => seconds - 1);
    }, 1e3)) : !isWorking && workSeconds !== 1500 && (stop(), clearInterval(workInterval)), isResting && sessionCount != 0 ? (setSession("resting"), restInterval = setInterval(() => {
      setRestSeconds((seconds) => seconds - 1);
    }, 1e3)) : !isResting && restSeconds !== 300 && (stop(), clearInterval(restInterval)), workSeconds === 0 && sessionCount != 4 ? (setSessionCount(sessionCount + 1), play(), setIsWorking(!1), setSession("resting"), setIsResting(!0), setWorkSeconds(1500), setRestSeconds(300)) : workSeconds === 0 && sessionCount == 4 ? (setRestSeconds(900), setSessionCount(sessionCount + 1), play(), setIsWorking(!1), setSession("resting"), setIsResting(!0), setWorkSeconds(1500)) : restSeconds === 0 && (setRestSeconds(300), stop(), setIsWorking(!0), setSession("working"), setIsResting(!1), setWorkSeconds(1500)), () => {
      clearInterval(workInterval), clearInterval(restInterval);
    };
  }, [isWorking, isResting, restSeconds, workSeconds, sessionCount]);
  let toggleTimer = () => {
    session == "working" || sessionCount == 0 ? setIsWorking(!isWorking) : session == "resting" && (togglePlay(!isResting), setIsResting(!isResting));
  }, resetTimer = () => {
    setSession("working"), stop(), isWorking ? (setIsWorking(!1), setWorkSeconds(1500), setIsResting(!1), setSessionCount(0)) : isResting && (setIsResting(!1), setRestSeconds(300), setIsWorking(!1), setSessionCount(0));
  }, formatTime = (timeInSeconds) => {
    let minutes = Math.floor(timeInSeconds / 60), seconds = timeInSeconds % 60;
    return `${minutes < 10 ? "0" + minutes : minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
  };
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_jsx_runtime3.Fragment, { children: [
    session == "working" || sessionCount == 0 ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { style: { position: "absolute", marginLeft: 400, marginTop: -455 }, children: "w0rk" }) : /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { style: { position: "absolute", marginLeft: 400, marginTop: -455 }, children: "r3st" }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { style: { filter: "drop-shadow(2px 2px 1px white)", filter: "drop-shadow(1.95px 1.95px 2.6px white)", position: "fixed", fontSize: "16px", top: "495px", left: "500px" }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { style: { marginBottom: 0, fontWeight: "bold", fontSize: "14px", transform: "skew(-0.5deg, -0.2deg)", color: "black", marginLeft: -25 }, children: "\uFE36\uA4A6\uA4B7pomodoro timer\u2661\uA4B7\uA4A6\uFE36" }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { style: { display: "flex", flexDirection: "row" }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react_youtube.default, { videoId: youtubeID, onEnd: onRestart, onReady, opts: { height: "20px", width: "20px", playerVars: { controls: 1 } } }),
        session == "working" || sessionCount == 0 ? /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { style: { marginBottom: 0, fontWeight: "bold", fontFamily: "sans-serif", color: "black", marginLeft: 10 }, children: [
          formatTime(workSeconds),
          "\u2730"
        ] }) : /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { style: { marginBottom: 0, color: "black", fontWeight: "bold", fontFamily: "sans-serif", marginLeft: 10 }, children: [
          "\u2605\u22C6",
          formatTime(restSeconds),
          "\u22C6\u2605"
        ] })
      ] }),
      session == "working" ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("button", { onClick: toggleTimer, children: isWorking ? "\u23F8 pause" : "\u{1F469}\u{1F3FB}\u200D\u{1F4BB} start" }) : /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("button", { onClick: toggleTimer, children: isResting ? "\u23F8 pause" : "\u{1F469}\u{1F3FB}\u200D\u{1F4BB} start" }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("button", { onClick: resetTimer, children: "\u{1F48E}reset" }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { style: { fontSize: "11px", fontWeight: "bold", marginTop: 2, color: "#D75F5D", transform: "skew(-0.5deg, -1deg)" }, children: [
        "\u2765 \u{1F15E}\u{1F15C}\u{1F156} \u2764 \u{1F339} session_count: ",
        sessionCount
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("footer", { children: "aesthetic pomodoro timer for lana del rey stans. plays unreleased lana during rest periods. used with create-react-app and embedded youtube video. lana stan vol\u03C5\u043Ce : \u2581\u2582\u2583\u2584\u2585\u2586\u2587\u2589" })
  ] });
}, timer_default = PomodoroTimer;

// public/workspace copy 2.png
var workspace_copy_2_default = "/build/_assets/workspace copy 2-T7W3KEY2.png";

// app/routes/index.jsx
var import_jsx_runtime4 = require("react/jsx-runtime");
function Index() {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { style: { background: "#FFFDF6", overflowY: "hidden", fontFamily: "PlantinMTLightItalic", lineHeight: "1.4" }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("img", { style: { marginLeft: 150, maxWidth: 800, width: 800, height: "100%" }, src: workspace_copy_2_default, alt: "work-space" }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(timer_default, {})
  ] });
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "d6d46766", entry: { module: "/build/entry.client-W6XJQKRX.js", imports: ["/build/_shared/chunk-JOEOFPPD.js", "/build/_shared/chunk-EKJCLIAO.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-L64D7GUI.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-Y2JVNLK5.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, cssBundleHref: void 0, hmr: void 0, url: "/build/manifest-D6D46766.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", future = { unstable_cssModules: !1, unstable_cssSideEffectImports: !1, unstable_dev: !1, unstable_postcss: !1, unstable_tailwind: !1, unstable_vanillaExtract: !1, v2_errorBoundary: !1, v2_meta: !1, v2_normalizeFormMethod: !1, v2_routeConvention: !1 }, publicPath = "/build/", entry = { module: entry_server_react_stream_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  }
};

// server.js
var handler = (0, import_netlify.createRequestHandler)({
  build: server_build_exports,
  mode: "production"
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  handler
});
