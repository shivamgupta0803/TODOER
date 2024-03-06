import {
  Ie
} from "/build/_shared/chunk-FZ2UKIPG.js";
import {
  require_auth
} from "/build/_shared/chunk-STVP2I4H.js";
import {
  Links,
  LiveReload,
  Meta,
  NavLink,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData2 as useLoaderData
} from "/build/_shared/chunk-53LESN4X.js";
import "/build/_shared/chunk-WEAPBHQG.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-7PHB3BFD.js";
import {
  createHotContext
} from "/build/_shared/chunk-FDJG7ORA.js";
import "/build/_shared/chunk-JR22VO6P.js";
import "/build/_shared/chunk-CJ4MY3PQ.js";
import {
  __toESM
} from "/build/_shared/chunk-PZDJHGND.js";

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-TBNMIP6B.css";

// app/component/HomeNavbar.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/component/HomeNavbar.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/component/HomeNavbar.tsx"
  );
  import.meta.hot.lastModified = "1709612493232.1934";
}
var Navbar = ({
  user
}) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: user ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: " flex flex-wrap items-center justify-between mx-auto p-2 bg-pink-200", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-5xl font-extrabold flex justify-start ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500", children: "Todo App" }, void 0, false, {
      fileName: "app/component/HomeNavbar.tsx",
      lineNumber: 29,
      columnNumber: 15
    }, this) }, void 0, false, {
      fileName: "app/component/HomeNavbar.tsx",
      lineNumber: 28,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: " w-full md:block md:w-auto", id: "navbar-default", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "font-medium flex flex-col p-4 md:p-0 mt-2 bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse bg-transparent", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, { to: "/", className: "block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500", "aria-current": "page", children: "Home" }, void 0, false, {
        fileName: "app/component/HomeNavbar.tsx",
        lineNumber: 36,
        columnNumber: 19
      }, this) }, void 0, false, {
        fileName: "app/component/HomeNavbar.tsx",
        lineNumber: 35,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, { to: "/todoList", className: "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent", children: "TodoLists" }, void 0, false, {
        fileName: "app/component/HomeNavbar.tsx",
        lineNumber: 39,
        columnNumber: 19
      }, this) }, void 0, false, {
        fileName: "app/component/HomeNavbar.tsx",
        lineNumber: 38,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, { to: "/catagory", className: "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent", children: "AddCatagory" }, void 0, false, {
        fileName: "app/component/HomeNavbar.tsx",
        lineNumber: 42,
        columnNumber: 19
      }, this) }, void 0, false, {
        fileName: "app/component/HomeNavbar.tsx",
        lineNumber: 41,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, { to: "/todoAdd", className: "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent", children: "AddTodo" }, void 0, false, {
        fileName: "app/component/HomeNavbar.tsx",
        lineNumber: 45,
        columnNumber: 19
      }, this) }, void 0, false, {
        fileName: "app/component/HomeNavbar.tsx",
        lineNumber: 44,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, { to: "/search", className: "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent", children: "Search" }, void 0, false, {
        fileName: "app/component/HomeNavbar.tsx",
        lineNumber: 48,
        columnNumber: 19
      }, this) }, void 0, false, {
        fileName: "app/component/HomeNavbar.tsx",
        lineNumber: 47,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, { to: "http://localhost:5555", target: "__blank", className: "rounded-lg px-3 py-2 text-slate-600 font-medium hover:bg-slate-100 hover:text-slate-900", children: "Report" }, void 0, false, {
        fileName: "app/component/HomeNavbar.tsx",
        lineNumber: 51,
        columnNumber: 19
      }, this) }, void 0, false, {
        fileName: "app/component/HomeNavbar.tsx",
        lineNumber: 50,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, { to: "/logout", className: "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent border-dotted border-2 border-white-600 ", children: "Logout" }, void 0, false, {
        fileName: "app/component/HomeNavbar.tsx",
        lineNumber: 54,
        columnNumber: 19
      }, this) }, void 0, false, {
        fileName: "app/component/HomeNavbar.tsx",
        lineNumber: 53,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", { name: "profile", id: "", style: {
        background: "none"
      }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "", children: "profile" }, void 0, false, {
          fileName: "app/component/HomeNavbar.tsx",
          lineNumber: 59,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "", children: user.name }, void 0, false, {
          fileName: "app/component/HomeNavbar.tsx",
          lineNumber: 60,
          columnNumber: 19
        }, this)
      ] }, void 0, true, {
        fileName: "app/component/HomeNavbar.tsx",
        lineNumber: 56,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/component/HomeNavbar.tsx",
      lineNumber: 34,
      columnNumber: 15
    }, this) }, void 0, false, {
      fileName: "app/component/HomeNavbar.tsx",
      lineNumber: 33,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/component/HomeNavbar.tsx",
    lineNumber: 27,
    columnNumber: 11
  }, this) }, void 0, false, {
    fileName: "app/component/HomeNavbar.tsx",
    lineNumber: 26,
    columnNumber: 15
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", { className: "bg-white border-gray-200 ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-wrap items-center justify-between mx-auto p-2 bg-pink-200", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-5xl font-extrabold flex justify-start ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500", children: "Todo App" }, void 0, false, {
      fileName: "app/component/HomeNavbar.tsx",
      lineNumber: 68,
      columnNumber: 15
    }, this) }, void 0, false, {
      fileName: "app/component/HomeNavbar.tsx",
      lineNumber: 67,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "hidden w-full md:block md:w-auto", id: "navbar-default", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "font-medium flex flex-col p-4 md:p-0 mt-4  bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse  bg-transparent", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, { to: "/login", className: "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent", children: "Login" }, void 0, false, {
        fileName: "app/component/HomeNavbar.tsx",
        lineNumber: 75,
        columnNumber: 19
      }, this) }, void 0, false, {
        fileName: "app/component/HomeNavbar.tsx",
        lineNumber: 74,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, { to: "/register", className: "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent", children: "Register" }, void 0, false, {
        fileName: "app/component/HomeNavbar.tsx",
        lineNumber: 78,
        columnNumber: 19
      }, this) }, void 0, false, {
        fileName: "app/component/HomeNavbar.tsx",
        lineNumber: 77,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/component/HomeNavbar.tsx",
      lineNumber: 73,
      columnNumber: 15
    }, this) }, void 0, false, {
      fileName: "app/component/HomeNavbar.tsx",
      lineNumber: 72,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/component/HomeNavbar.tsx",
    lineNumber: 66,
    columnNumber: 11
  }, this) }, void 0, false, {
    fileName: "app/component/HomeNavbar.tsx",
    lineNumber: 65,
    columnNumber: 18
  }, this) }, void 0, false, {
    fileName: "app/component/HomeNavbar.tsx",
    lineNumber: 25,
    columnNumber: 10
  }, this);
};
_c = Navbar;
var HomeNavbar_default = Navbar;
var _c;
$RefreshReg$(_c, "Navbar");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/root.tsx
var import_auth = __toESM(require_auth(), 1);
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/root.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/root.tsx"
  );
}
var meta = () => {
  return [{
    title: "New Remix App"
  }, {
    name: "description",
    content: "Welcome to Remix!"
  }];
};
var links = () => [{
  rel: "stylesheet",
  href: tailwind_default
}];
function App() {
  _s();
  const user = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { charSet: "utf-8" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 52,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 53,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Meta, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 54,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Links, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 55,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 51,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Ie, { position: "top-center", reverseOrder: false }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 58,
        columnNumber: 8
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(HomeNavbar_default, { user }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 65,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Outlet, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 66,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ScrollRestoration, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 67,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Scripts, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 68,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(LiveReload, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 69,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 57,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/root.tsx",
    lineNumber: 50,
    columnNumber: 10
  }, this);
}
_s(App, "bH1LW0VjtDD5/q6YH82IbqfBSnU=", false, function() {
  return [useLoaderData];
});
_c2 = App;
var _c2;
$RefreshReg$(_c2, "App");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  App as default,
  links,
  meta
};
//# sourceMappingURL=/build/root-BOTQYEC5.js.map
