import {
  require_auth
} from "/build/_shared/chunk-STVP2I4H.js";
import {
  Link,
  isRouteErrorResponse,
  useActionData,
  useRouteError
} from "/build/_shared/chunk-53LESN4X.js";
import "/build/_shared/chunk-WEAPBHQG.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-7PHB3BFD.js";
import {
  createHotContext
} from "/build/_shared/chunk-FDJG7ORA.js";
import "/build/_shared/chunk-JR22VO6P.js";
import {
  require_react
} from "/build/_shared/chunk-CJ4MY3PQ.js";
import {
  __toESM
} from "/build/_shared/chunk-PZDJHGND.js";

// app/routes/login.tsx
var import_react = __toESM(require_react(), 1);
var import_auth = __toESM(require_auth(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/login.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/login.tsx"
  );
  import.meta.hot.lastModified = "1709272695181.1582";
}
function ErrorBoundary() {
  _s();
  const error = useRouteError();
  if (isRouteErrorResponse(error)) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full h-screen flex flex-col justify-center items-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: " font-bold text-5xl text-red-700", children: [
        error.status,
        " ",
        error.statusText
      ] }, void 0, true, {
        fileName: "app/routes/login.tsx",
        lineNumber: 33,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "font-semibold text-xl", children: error.data.message }, void 0, false, {
        fileName: "app/routes/login.tsx",
        lineNumber: 36,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/login", className: "text-semibold", children: "try again" }, void 0, false, {
        fileName: "app/routes/login.tsx",
        lineNumber: 38,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/login.tsx",
      lineNumber: 32,
      columnNumber: 12
    }, this);
  } else if (error instanceof Error) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: "Error" }, void 0, false, {
        fileName: "app/routes/login.tsx",
        lineNumber: 44,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: error.message }, void 0, false, {
        fileName: "app/routes/login.tsx",
        lineNumber: 45,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "The stack trace is:" }, void 0, false, {
        fileName: "app/routes/login.tsx",
        lineNumber: 46,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("pre", { children: error.stack }, void 0, false, {
        fileName: "app/routes/login.tsx",
        lineNumber: 47,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/login.tsx",
      lineNumber: 43,
      columnNumber: 12
    }, this);
  } else {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: "Unknown Error" }, void 0, false, {
      fileName: "app/routes/login.tsx",
      lineNumber: 50,
      columnNumber: 12
    }, this);
  }
}
_s(ErrorBoundary, "oAgjgbJzsRXlB89+MoVumxMQqKM=", false, function() {
  return [useRouteError];
});
_c = ErrorBoundary;
var Login = () => {
  _s2();
  const data = useActionData();
  const [loading, setLoading] = (0, import_react.useState)(false);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-center font-semibold text-2xl mt-24 mb-5", children: "Login" }, void 0, false, {
      fileName: "app/routes/login.tsx",
      lineNumber: 89,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", { method: "POST", className: "flex flex-col w-72 gap-2 m-auto", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "email", name: "email", className: "bg-slate-100 p-2 rounded-xl", id: "", placeholder: "shivam@examle.com", required: true }, void 0, false, {
        fileName: "app/routes/login.tsx",
        lineNumber: 91,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "password", name: "password", className: "bg-slate-100 p-2 rounded-xl", id: "", placeholder: "password", required: true }, void 0, false, {
        fileName: "app/routes/login.tsx",
        lineNumber: 93,
        columnNumber: 9
      }, this),
      loading ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { role: "status", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { "aria-hidden": "true", className: "w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600", viewBox: "0 0 100 101", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z", fill: "currentColor" }, void 0, false, {
            fileName: "app/routes/login.tsx",
            lineNumber: 97,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z", fill: "currentFill" }, void 0, false, {
            fileName: "app/routes/login.tsx",
            lineNumber: 98,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/login.tsx",
          lineNumber: 96,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "sr-only", children: "Loading..." }, void 0, false, {
          fileName: "app/routes/login.tsx",
          lineNumber: 100,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/login.tsx",
        lineNumber: 95,
        columnNumber: 20
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "bg-black w-32 rounded-xl p-2 text-white font-semibold m-auto", children: "Login" }, void 0, false, {
        fileName: "app/routes/login.tsx",
        lineNumber: 101,
        columnNumber: 20
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/login.tsx",
      lineNumber: 90,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-center text-zinc-500 mt-2", children: [
      "don't have an account?",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/register", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "font-semibold ml-2 cursor-pointer text-black text-center", children: "Register" }, void 0, false, {
        fileName: "app/routes/login.tsx",
        lineNumber: 108,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/login.tsx",
        lineNumber: 107,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/login.tsx",
      lineNumber: 105,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/login.tsx",
    lineNumber: 88,
    columnNumber: 10
  }, this);
};
_s2(Login, "vsCre/K0OxEww+ZIufu5DEuzFrk=", false, function() {
  return [useActionData];
});
_c2 = Login;
var login_default = Login;
var _c;
var _c2;
$RefreshReg$(_c, "ErrorBoundary");
$RefreshReg$(_c2, "Login");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  ErrorBoundary,
  login_default as default
};
//# sourceMappingURL=/build/routes/login-4ZDCM7IT.js.map
