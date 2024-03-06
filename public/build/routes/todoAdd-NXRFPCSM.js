import {
  require_node
} from "/build/_shared/chunk-NBEH4DGX.js";
import {
  require_db
} from "/build/_shared/chunk-I53UWI2S.js";
import {
  require_auth
} from "/build/_shared/chunk-STVP2I4H.js";
import {
  Form,
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

// app/routes/todoAdd.tsx
var import_node = __toESM(require_node(), 1);
var import_db = __toESM(require_db(), 1);
var import_auth = __toESM(require_auth(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/todoAdd.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/todoAdd.tsx"
  );
  import.meta.hot.lastModified = "1709210152347.7925";
}
function AddTodo() {
  _s();
  const data = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-5xl font-extrabold text-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500", children: "What do you want to do today?" }, void 0, false, {
      fileName: "app/routes/todoAdd.tsx",
      lineNumber: 71,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/routes/todoAdd.tsx",
      lineNumber: 70,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("hr", {}, void 0, false, {
      fileName: "app/routes/todoAdd.tsx",
      lineNumber: 75,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/routes/todoAdd.tsx",
      lineNumber: 76,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/routes/todoAdd.tsx",
      lineNumber: 77,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-center w-full h-80 ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { action: "", method: "POST", className: "mt-12 ", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-around gap-5  ", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "title-hd  ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "", children: "Title:" }, void 0, false, {
          fileName: "app/routes/todoAdd.tsx",
          lineNumber: 82,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/routes/todoAdd.tsx",
          lineNumber: 81,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", name: "title", className: "border-2 bg-grey-300 rounded-full h-12 w-80 pl-4", placeholder: "Create New Todo ", required: true }, void 0, false, {
          fileName: "app/routes/todoAdd.tsx",
          lineNumber: 85,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/routes/todoAdd.tsx",
          lineNumber: 84,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/todoAdd.tsx",
        lineNumber: 80,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
        fileName: "app/routes/todoAdd.tsx",
        lineNumber: 88,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ol", { className: "flex justify-center pl-12 ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", { name: "categoryId", id: "", className: "w-60 h-10 rounded-full text-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "", children: "Please Select Category" }, void 0, false, {
          fileName: "app/routes/todoAdd.tsx",
          lineNumber: 91,
          columnNumber: 29
        }, this),
        data.map((category) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: category.id, children: category.category_Name }, void 0, false, {
          fileName: "app/routes/todoAdd.tsx",
          lineNumber: 93,
          columnNumber: 51
        }, this))
      ] }, void 0, true, {
        fileName: "app/routes/todoAdd.tsx",
        lineNumber: 90,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/routes/todoAdd.tsx",
        lineNumber: 89,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-center mt-12 ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", className: "p-1 text-white bg-green-400 rounded-full m-auto w-40 h-12", children: "Add" }, void 0, false, {
        fileName: "app/routes/todoAdd.tsx",
        lineNumber: 98,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/routes/todoAdd.tsx",
        lineNumber: 97,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/todoAdd.tsx",
      lineNumber: 79,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/routes/todoAdd.tsx",
      lineNumber: 78,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/todoAdd.tsx",
    lineNumber: 69,
    columnNumber: 10
  }, this);
}
_s(AddTodo, "5thj+e1edPyRpKif1JmVRC6KArE=", false, function() {
  return [useLoaderData];
});
_c = AddTodo;
var _c;
$RefreshReg$(_c, "AddTodo");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  AddTodo as default
};
//# sourceMappingURL=/build/routes/todoAdd-NXRFPCSM.js.map
