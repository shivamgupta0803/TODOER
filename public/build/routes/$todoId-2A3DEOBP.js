import {
  require_db
} from "/build/_shared/chunk-I53UWI2S.js";
import {
  require_auth
} from "/build/_shared/chunk-STVP2I4H.js";
import {
  Form,
  NavLink,
  useLoaderData2 as useLoaderData,
  useParams,
  useSubmit
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

// app/routes/$todoId.tsx
var import_react2 = __toESM(require_react(), 1);
var import_db = __toESM(require_db(), 1);
var import_auth = __toESM(require_auth(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/$todoId.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/$todoId.tsx"
  );
  import.meta.hot.lastModified = "1709210575331.5037";
}
var TodoId = () => {
  _s();
  const params = useParams();
  const data = useLoaderData();
  const [isEdit, setIsEdit] = (0, import_react2.useState)("");
  const submit = useSubmit();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "container mx-auto", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/routes/$todoId.tsx",
      lineNumber: 61,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/routes/$todoId.tsx",
      lineNumber: 61,
      columnNumber: 15
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-3xl bg-fuchsia-200 border-l-4 border-b-4 border-indigo-500", children: [
      "YOUR TODO ID IS ::- ",
      params.todoId
    ] }, void 0, true, {
      fileName: "app/routes/$todoId.tsx",
      lineNumber: 62,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("hr", {}, void 0, false, {
      fileName: "app/routes/$todoId.tsx",
      lineNumber: 62,
      columnNumber: 129
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/routes/$todoId.tsx",
      lineNumber: 63,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-2xl text-center", children: "YOUR SUBTODO IS ..." }, void 0, false, {
      fileName: "app/routes/$todoId.tsx",
      lineNumber: 64,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ol", { className: "flex flex-col items-center", children: data.map((todo) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: " flex justify-center gap-6 border-2 mt-2 w-1/2 text-center rounded-full bg-orange-300 text-2xl", children: [
      todo.title,
      isEdit == todo.id ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "POST", onSubmit: (e) => {
        e.preventDefault();
        submit(e.currentTarget, {
          navigate: false,
          method: "post"
        });
        setIsEdit("");
      }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "edit-input", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", name: "title", required: true, className: "border-hidden" }, void 0, false, {
          fileName: "app/routes/$todoId.tsx",
          lineNumber: 78,
          columnNumber: 23
        }, this) }, void 0, false, {
          fileName: "app/routes/$todoId.tsx",
          lineNumber: 77,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "todoId", value: todo.id }, void 0, false, {
          fileName: "app/routes/$todoId.tsx",
          lineNumber: 80,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "action", value: "update-todo" }, void 0, false, {
          fileName: "app/routes/$todoId.tsx",
          lineNumber: 81,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "save_cancel grid grid-cols-2 divide-x", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", className: "border-2 bg-emerald-500 text-white", children: "save" }, void 0, false, {
            fileName: "app/routes/$todoId.tsx",
            lineNumber: 83,
            columnNumber: 23
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => {
            setIsEdit("");
          }, className: "border-2 bg-red-600 text-white", children: "cancel" }, void 0, false, {
            fileName: "app/routes/$todoId.tsx",
            lineNumber: 84,
            columnNumber: 23
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/$todoId.tsx",
          lineNumber: 82,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/$todoId.tsx",
        lineNumber: 69,
        columnNumber: 38
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => {
        setIsEdit(todo.id);
      }, className: " w-4 rounded-lg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { d: "M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z" }, void 0, false, {
        fileName: "app/routes/$todoId.tsx",
        lineNumber: 90,
        columnNumber: 104
      }, this) }, void 0, false, {
        fileName: "app/routes/$todoId.tsx",
        lineNumber: 90,
        columnNumber: 42
      }, this) }, void 0, false, {
        fileName: "app/routes/$todoId.tsx",
        lineNumber: 88,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "POST", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "todoId", value: todo.id }, void 0, false, {
          fileName: "app/routes/$todoId.tsx",
          lineNumber: 92,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", name: "action", value: "delete-todo", className: " w-4 rounded-lg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { d: "M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z" }, void 0, false, {
          fileName: "app/routes/$todoId.tsx",
          lineNumber: 93,
          columnNumber: 167
        }, this) }, void 0, false, {
          fileName: "app/routes/$todoId.tsx",
          lineNumber: 93,
          columnNumber: 105
        }, this) }, void 0, false, {
          fileName: "app/routes/$todoId.tsx",
          lineNumber: 93,
          columnNumber: 19
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/$todoId.tsx",
        lineNumber: 91,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/$todoId.tsx",
      lineNumber: 66,
      columnNumber: 29
    }, this)) }, void 0, false, {
      fileName: "app/routes/$todoId.tsx",
      lineNumber: 65,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/routes/$todoId.tsx",
      lineNumber: 98,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/routes/$todoId.tsx",
      lineNumber: 98,
      columnNumber: 15
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/routes/$todoId.tsx",
      lineNumber: 98,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "AllList text-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, { to: "/todoList", className: "text-3xl border-4 bg-rose-200 rounded-full p-6", children: "SEE All TODO LIST" }, void 0, false, {
      fileName: "app/routes/$todoId.tsx",
      lineNumber: 100,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/$todoId.tsx",
      lineNumber: 99,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/$todoId.tsx",
    lineNumber: 60,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/$todoId.tsx",
    lineNumber: 59,
    columnNumber: 10
  }, this);
};
_s(TodoId, "1+2FcSwAPxYxtdX3UI1gR0Xg6mU=", false, function() {
  return [useParams, useLoaderData, useSubmit];
});
_c = TodoId;
var todoId_default = TodoId;
var _c;
$RefreshReg$(_c, "TodoId");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  todoId_default as default
};
//# sourceMappingURL=/build/routes/$todoId-2A3DEOBP.js.map
