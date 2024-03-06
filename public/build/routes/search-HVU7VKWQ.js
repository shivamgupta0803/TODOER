import {
  require_db
} from "/build/_shared/chunk-I53UWI2S.js";
import {
  require_auth
} from "/build/_shared/chunk-STVP2I4H.js";
import {
  Form,
  init_dist,
  useLoaderData
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

// app/routes/search.tsx
var import_react2 = __toESM(require_react(), 1);
init_dist();
var import_auth = __toESM(require_auth(), 1);
var import_db = __toESM(require_db(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/search.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/search.tsx"
  );
  import.meta.hot.lastModified = "1709209571465.7996";
}
var Search = () => {
  _s();
  const todos = useLoaderData();
  const [search, setSearch] = (0, import_react2.useState)("");
  const [newTodo, setNewTodo] = (0, import_react2.useState)([]);
  function handleChange(e) {
    setSearch(e.target.value.toLowerCase());
  }
  function handleClick() {
    console.log("Todos data:", todos);
    if (typeof todos === "object" && todos !== null) {
      const todosArray = Object.values(todos);
      let filteredTodos = todosArray.filter((todo) => {
        return todo.title.includes(search);
      });
      setNewTodo(filteredTodos);
    } else {
      console.error("Todos data is not an object or is null");
    }
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-8 text-center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-6xl text-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500", children: "Search" }, void 0, false, {
        fileName: "app/routes/search.tsx",
        lineNumber: 83,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/routes/search.tsx",
        lineNumber: 82,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "search flex justify-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "search", name: "search", id: "", onChange: handleChange, className: "border  w-1/2 h-12 pl-6" }, void 0, false, {
          fileName: "app/routes/search.tsx",
          lineNumber: 88,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", onClick: handleClick, className: " h-12 w-32 bg-green-400", children: "Go" }, void 0, false, {
          fileName: "app/routes/search.tsx",
          lineNumber: 89,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/search.tsx",
        lineNumber: 87,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/search.tsx",
      lineNumber: 80,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ol", { className: "flex flex-col items-center", children: newTodo.map((todo) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "border-2 mt-6 w-96 h-12 rounded-full bg-rose-200", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "pt-2 text-2xl", children: todo.title }, void 0, false, {
      fileName: "app/routes/search.tsx",
      lineNumber: 94,
      columnNumber: 29
    }, this) }, todo.id, false, {
      fileName: "app/routes/search.tsx",
      lineNumber: 93,
      columnNumber: 42
    }, this)) }, void 0, false, {
      fileName: "app/routes/search.tsx",
      lineNumber: 92,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/search.tsx",
    lineNumber: 79,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/routes/search.tsx",
    lineNumber: 78,
    columnNumber: 10
  }, this);
};
_s(Search, "JnzySVq7kIiZz2VDtSLi0gPPYUw=", false, function() {
  return [useLoaderData];
});
_c = Search;
var search_default = Search;
var _c;
$RefreshReg$(_c, "Search");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  search_default as default
};
//# sourceMappingURL=/build/routes/search-HVU7VKWQ.js.map
