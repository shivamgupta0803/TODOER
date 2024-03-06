import {
  _t
} from "/build/_shared/chunk-FZ2UKIPG.js";
import {
  require_db
} from "/build/_shared/chunk-I53UWI2S.js";
import {
  require_auth
} from "/build/_shared/chunk-STVP2I4H.js";
import {
  Form,
  Link,
  useLoaderData2 as useLoaderData,
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

// app/routes/todoList.tsx
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
    window.$RefreshRuntime$.register(type, '"app/routes/todoList.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/todoList.tsx"
  );
  import.meta.hot.lastModified = "1709209985974.9536";
}
function Todos() {
  _s();
  let {
    data: todos,
    todoId
  } = useLoaderData();
  const submit = useSubmit();
  const [isEdit, setIsEdit] = (0, import_react2.useState)("");
  const [subTodo, setSubTodo] = (0, import_react2.useState)("");
  const [arr, setArr] = (0, import_react2.useState)([]);
  let [selectStatus, setSelectStatus] = (0, import_react2.useState)("All");
  const [selectedItems, setSelectedItems] = (0, import_react2.useState)([]);
  const [currentPage, setCurrentPage] = (0, import_react2.useState)(1);
  let [favourite, setFavourite] = (0, import_react2.useState)([]);
  let [showFavIcon, setShowFavIcon] = (0, import_react2.useState)(false);
  let [showFav, setShowFav] = (0, import_react2.useState)(false);
  const [number, setNumber] = (0, import_react2.useState)(5);
  const [favId, setFavId] = (0, import_react2.useState)("");
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted number:", number);
  };
  const handleChange = (event) => {
    if (event.target.value === 0) {
      setNumber(1);
    }
    setNumber(event.target.value);
  };
  let recordsPerPage = number;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  let records = todos.slice(firstIndex, lastIndex);
  const nPage = Math.ceil(todos.length / recordsPerPage);
  const numbers = [...Array(nPage + 1).keys()].slice(1);
  function prePage() {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  }
  function changeCurrentPage(id) {
    setCurrentPage(id);
  }
  function nextPage() {
    if (currentPage !== nPage) {
      setCurrentPage(currentPage + 1);
    }
  }
  function handleselectedItem(itemId) {
    if (selectedItems.includes(itemId)) {
      setSelectedItems(selectedItems.filter((id) => id !== itemId));
    } else {
      setSelectedItems([...selectedItems, itemId]);
    }
  }
  const value = records.map((todo) => todo.id);
  function handleSelectAll() {
    if (selectedItems.length === records.length) {
      setSelectedItems([]);
    } else {
      const value2 = records.map((todo) => todo.id);
      console.log("this is the value of array", value2);
      setSelectedItems(value2);
    }
  }
  function handleChangeCat(status) {
    console.log("this is status", status);
    setSelectStatus(status);
  }
  console.log("this is selectStatus", selectStatus);
  function handleClick() {
    submit({
      action: "deleteAll",
      value,
      todoId
    }, {
      navigate: false,
      method: "post"
    });
    setSelectedItems([]);
  }
  function handlefavourite(data) {
    console.log("clicked");
    const index = favourite.findIndex((f) => f == data.id);
    if (index !== -1) {
      favourite.splice(index, 1);
      records = [...favourite];
      setFavourite([...favourite]);
      _t.error("Removed favourite");
    } else {
      setFavourite((prevFav) => [...prevFav, data.id]);
      _t.success("Added favourite");
    }
  }
  if (showFav) {
    records = records.filter((r) => favourite.includes(r.id));
  } else {
    records = todos.slice(firstIndex, lastIndex);
  }
  if (selectStatus === "All") {
    records = records;
  } else {
    records = records.filter((todo) => selectStatus === todo.status).map((todo) => {
      return todo;
    });
  }
  const deleteTodoData = todos.map((todo) => todo);
  function deleteData(id) {
  }
  const [isOpen, setIsOpen] = (0, import_react2.useState)(false);
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/routes/todoList.tsx",
      lineNumber: 286,
      columnNumber: 31
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-3xl text-center", children: "Todo Lists..." }, void 0, false, {
      fileName: "app/routes/todoList.tsx",
      lineNumber: 287,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("hr", {}, void 0, false, {
      fileName: "app/routes/todoList.tsx",
      lineNumber: 287,
      columnNumber: 72
    }, this),
    " ",
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/routes/todoList.tsx",
      lineNumber: 287,
      columnNumber: 79
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "search flex justify-center gap-5", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "flex items-center gap-2 bg-yellow-200 rounded-full pl-4 w-36 h-8", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "checkbox", onChange: handleSelectAll }, void 0, false, {
            fileName: "app/routes/todoList.tsx",
            lineNumber: 293,
            columnNumber: 29
          }, this),
          "  ",
          selectedItems.length === value.length ? "Deselect All" : "Select All"
        ] }, void 0, true, {
          fileName: "app/routes/todoList.tsx",
          lineNumber: 292,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", onClick: handleClick, className: "border-2 w-36 h-8 rounded-full bg-green-400", children: "DeleteAll" }, void 0, false, {
          fileName: "app/routes/todoList.tsx",
          lineNumber: 296,
          columnNumber: 25
        }, this),
        "  ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
          fileName: "app/routes/todoList.tsx",
          lineNumber: 296,
          columnNumber: 145
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
          fileName: "app/routes/todoList.tsx",
          lineNumber: 296,
          columnNumber: 151
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/todoList.tsx",
        lineNumber: 291,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "status-box flex gap-2 justify-end ml-2 m-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "radio", name: "status", checked: selectStatus == "All", onChange: () => handleChangeCat("All") }, void 0, false, {
          fileName: "app/routes/todoList.tsx",
          lineNumber: 306,
          columnNumber: 25
        }, this),
        "All \xA0\xA0\xA0",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "radio", name: "status", checked: selectStatus == "pending", onChange: () => handleChangeCat("pending") }, void 0, false, {
          fileName: "app/routes/todoList.tsx",
          lineNumber: 307,
          columnNumber: 25
        }, this),
        "Pending \xA0\xA0\xA0",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "radio", name: "status", checked: selectStatus == "completed", onChange: () => handleChangeCat("completed") }, void 0, false, {
          fileName: "app/routes/todoList.tsx",
          lineNumber: 308,
          columnNumber: 25
        }, this),
        "Completed \xA0\xA0\xA0",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "radio", name: "status", checked: selectStatus == "on_hold", onChange: () => handleChangeCat("on_hold") }, void 0, false, {
          fileName: "app/routes/todoList.tsx",
          lineNumber: 309,
          columnNumber: 25
        }, this),
        "On Hold"
      ] }, void 0, true, {
        fileName: "app/routes/todoList.tsx",
        lineNumber: 304,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/todoList.tsx",
      lineNumber: 288,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ol", { className: "flex flex-col items-center", children: records?.map((data) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: `flex justify-around rounded-full m-4 bg-rose-100 w-2/3  ${data.status === "pending" ? "bg-yellow-200" : data.status === "completed" ? "bg-emerald-400" : "bg-red-300"} `, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "POST", className: "flex justify-items-start", onChange: () => {
        value.push(data.id);
      }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "todoId", value: data.id }, void 0, false, {
          fileName: "app/routes/todoList.tsx",
          lineNumber: 326,
          columnNumber: 41
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "action", value: `deleteAll` }, void 0, false, {
          fileName: "app/routes/todoList.tsx",
          lineNumber: 327,
          columnNumber: 41
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "checkbox", name: "checkbox", id: "", checked: selectedItems.includes(data.id), onChange: () => handleselectedItem(data.id) }, void 0, false, {
          fileName: "app/routes/todoList.tsx",
          lineNumber: 328,
          columnNumber: 41
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/todoList.tsx",
        lineNumber: 323,
        columnNumber: 37
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { className: " text-2xl mt-2", to: `/${data.id}`, children: [
        data.title,
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
          fileName: "app/routes/todoList.tsx",
          lineNumber: 335,
          columnNumber: 53
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/todoList.tsx",
        lineNumber: 334,
        columnNumber: 37
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "w-4 ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 3", viewBox: "0 0 32 32", id: "category", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("polygon", { fill: "none", stroke: "#0832ff", "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "2", points: "4.48 15.38 17.62 28.52 27.52 18.62 14.38 5.48 5.19 6.19 4.48 15.38" }, void 0, false, {
            fileName: "app/routes/todoList.tsx",
            lineNumber: 339,
            columnNumber: 155
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("polygon", { fill: "#0832ff", points: "25.96 17.06 16.06 26.96 17.44 28.44 27.44 18.44 25.96 17.06" }, void 0, false, {
            fileName: "app/routes/todoList.tsx",
            lineNumber: 339,
            columnNumber: 343
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("line", { x1: "24.83", x2: "14.93", y1: "15.93", y2: "25.83", fill: "none", stroke: "#0832ff", "stroke-linecap": "round", "stroke-miterlimit": "10" }, void 0, false, {
            fileName: "app/routes/todoList.tsx",
            lineNumber: 339,
            columnNumber: 446
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("circle", { cx: "10", cy: "11", r: "1.5", fill: "#0832ff" }, void 0, false, {
            fileName: "app/routes/todoList.tsx",
            lineNumber: 339,
            columnNumber: 578
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/todoList.tsx",
          lineNumber: 339,
          columnNumber: 61
        }, this) }, void 0, false, {
          fileName: "app/routes/todoList.tsx",
          lineNumber: 339,
          columnNumber: 41
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "category-name", children: data.category.category_Name }, void 0, false, {
          fileName: "app/routes/todoList.tsx",
          lineNumber: 341,
          columnNumber: 41
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/todoList.tsx",
        lineNumber: 338,
        columnNumber: 37
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex gap-2 items-center justify-end", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "POST", onChange: (e) => {
          e.preventDefault();
          submit(e.currentTarget, {
            navigate: false,
            method: "post"
          });
        }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "todoId", value: data.id }, void 0, false, {
            fileName: "app/routes/todoList.tsx",
            lineNumber: 357,
            columnNumber: 45
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "action", value: `change-status` }, void 0, false, {
            fileName: "app/routes/todoList.tsx",
            lineNumber: 358,
            columnNumber: 45
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", { name: "status", id: "", value: data.status, className: "mr-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "pending", children: "pending" }, void 0, false, {
              fileName: "app/routes/todoList.tsx",
              lineNumber: 360,
              columnNumber: 49
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "on_hold", children: "on_hold" }, void 0, false, {
              fileName: "app/routes/todoList.tsx",
              lineNumber: 361,
              columnNumber: 49
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "completed", children: "completed" }, void 0, false, {
              fileName: "app/routes/todoList.tsx",
              lineNumber: 362,
              columnNumber: 49
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/todoList.tsx",
            lineNumber: 359,
            columnNumber: 45
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/todoList.tsx",
          lineNumber: 350,
          columnNumber: 41
        }, this),
        isEdit == data.id ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "POST", onSubmit: (e) => {
          e.preventDefault();
          submit(e.currentTarget, {
            navigate: false,
            method: "post"
          });
          setIsEdit("");
        }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "edit-input border-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", name: "title", required: true, className: "border-hidden" }, void 0, false, {
            fileName: "app/routes/todoList.tsx",
            lineNumber: 376,
            columnNumber: 53
          }, this) }, void 0, false, {
            fileName: "app/routes/todoList.tsx",
            lineNumber: 375,
            columnNumber: 49
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "todoId", value: data.id }, void 0, false, {
            fileName: "app/routes/todoList.tsx",
            lineNumber: 378,
            columnNumber: 49
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "action", value: "update-todo" }, void 0, false, {
            fileName: "app/routes/todoList.tsx",
            lineNumber: 379,
            columnNumber: 49
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "save_cancel grid grid-cols-2 divide-x", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", className: "border-2 bg-emerald-500 text-white", children: "save" }, void 0, false, {
              fileName: "app/routes/todoList.tsx",
              lineNumber: 381,
              columnNumber: 53
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => {
              setIsEdit("");
            }, className: "border-2 bg-red-600 text-white", children: "cancel" }, void 0, false, {
              fileName: "app/routes/todoList.tsx",
              lineNumber: 382,
              columnNumber: 53
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/todoList.tsx",
            lineNumber: 380,
            columnNumber: 49
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/todoList.tsx",
          lineNumber: 367,
          columnNumber: 62
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => {
          setIsEdit(data.id);
        }, className: " w-4 rounded-lg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { d: "M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z" }, void 0, false, {
          fileName: "app/routes/todoList.tsx",
          lineNumber: 388,
          columnNumber: 108
        }, this) }, void 0, false, {
          fileName: "app/routes/todoList.tsx",
          lineNumber: 388,
          columnNumber: 46
        }, this) }, void 0, false, {
          fileName: "app/routes/todoList.tsx",
          lineNumber: 386,
          columnNumber: 55
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "POST", onClick: (e) => {
            deleteData(data.id);
          }, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "todoId", value: data.id }, void 0, false, {
              fileName: "app/routes/todoList.tsx",
              lineNumber: 396,
              columnNumber: 49
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", name: "action", value: "delete-todo", className: " w-4 rounded-lg", onClick: toggleModal, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { d: "M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z" }, void 0, false, {
              fileName: "app/routes/todoList.tsx",
              lineNumber: 397,
              columnNumber: 219
            }, this) }, void 0, false, {
              fileName: "app/routes/todoList.tsx",
              lineNumber: 397,
              columnNumber: 157
            }, this) }, void 0, false, {
              fileName: "app/routes/todoList.tsx",
              lineNumber: 397,
              columnNumber: 49
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/todoList.tsx",
            lineNumber: 393,
            columnNumber: 45
          }, this),
          isOpen && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "fixed inset-0 z-50 flex items-center justify-center ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-red rounded-lg p-8 border-2 bg-rose-200", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-xl font-bold mb-4", children: "Delete" }, void 0, false, {
              fileName: "app/routes/todoList.tsx",
              lineNumber: 403,
              columnNumber: 57
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mb-4", children: [
              "This is the todo content.",
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
                fileName: "app/routes/todoList.tsx",
                lineNumber: 405,
                columnNumber: 57
              }, this),
              "->  " + data.title
            ] }, void 0, true, {
              fileName: "app/routes/todoList.tsx",
              lineNumber: 404,
              columnNumber: 57
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: toggleModal, className: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded", children: "Delete Todo" }, void 0, false, {
              fileName: "app/routes/todoList.tsx",
              lineNumber: 406,
              columnNumber: 57
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/todoList.tsx",
            lineNumber: 402,
            columnNumber: 53
          }, this) }, void 0, false, {
            fileName: "app/routes/todoList.tsx",
            lineNumber: 401,
            columnNumber: 56
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/todoList.tsx",
          lineNumber: 391,
          columnNumber: 41
        }, this),
        subTodo == data.id ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "POST", onSubmit: (e) => {
          e.preventDefault();
          submit(e.currentTarget, {
            navigate: false,
            method: "post"
          });
          setSubTodo("");
        }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "edit-input border-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", name: "title", required: true, className: "border-hidden" }, void 0, false, {
            fileName: "app/routes/todoList.tsx",
            lineNumber: 429,
            columnNumber: 53
          }, this) }, void 0, false, {
            fileName: "app/routes/todoList.tsx",
            lineNumber: 428,
            columnNumber: 49
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "todoId", value: data.id }, void 0, false, {
            fileName: "app/routes/todoList.tsx",
            lineNumber: 431,
            columnNumber: 49
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "action", value: "update-sub-todo" }, void 0, false, {
            fileName: "app/routes/todoList.tsx",
            lineNumber: 432,
            columnNumber: 49
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "save_cancel grid grid-cols-2 divide-x", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", className: "border-2 bg-emerald-500 text-white", children: "Add subTodo" }, void 0, false, {
              fileName: "app/routes/todoList.tsx",
              lineNumber: 434,
              columnNumber: 53
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => {
              setSubTodo("");
            }, className: "border-2 bg-red-600 text-white", children: "Cancel" }, void 0, false, {
              fileName: "app/routes/todoList.tsx",
              lineNumber: 435,
              columnNumber: 53
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/todoList.tsx",
            lineNumber: 433,
            columnNumber: 49
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/todoList.tsx",
          lineNumber: 420,
          columnNumber: 63
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => {
          setSubTodo(data.id);
        }, className: " w-4 rounded-lg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { d: "M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" }, void 0, false, {
          fileName: "app/routes/todoList.tsx",
          lineNumber: 441,
          columnNumber: 108
        }, this) }, void 0, false, {
          fileName: "app/routes/todoList.tsx",
          lineNumber: 441,
          columnNumber: 46
        }, this) }, void 0, false, {
          fileName: "app/routes/todoList.tsx",
          lineNumber: 439,
          columnNumber: 55
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => handlefavourite(data), children: favourite.includes(data.id, 0) ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "\u{1F495}" }, void 0, false, {
          fileName: "app/routes/todoList.tsx",
          lineNumber: 452,
          columnNumber: 79
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "\u2764\uFE0F" }, void 0, false, {
          fileName: "app/routes/todoList.tsx",
          lineNumber: 452,
          columnNumber: 97
        }, this) }, void 0, false, {
          fileName: "app/routes/todoList.tsx",
          lineNumber: 451,
          columnNumber: 41
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `/${data.id}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", className: "w-8 h-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { d: "M217.9 105.9L340.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L217.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1L32 320c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM352 416l64 0c17.7 0 32-14.3 32-32l0-256c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0c53 0 96 43 96 96l0 256c0 53-43 96-96 96l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z" }, void 0, false, {
          fileName: "app/routes/todoList.tsx",
          lineNumber: 458,
          columnNumber: 127
        }, this) }, void 0, false, {
          fileName: "app/routes/todoList.tsx",
          lineNumber: 458,
          columnNumber: 45
        }, this) }, void 0, false, {
          fileName: "app/routes/todoList.tsx",
          lineNumber: 457,
          columnNumber: 41
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/todoList.tsx",
        lineNumber: 347,
        columnNumber: 37
      }, this)
    ] }, data.id, true, {
      fileName: "app/routes/todoList.tsx",
      lineNumber: 319,
      columnNumber: 33
    }, this) }, void 0, false, {
      fileName: "app/routes/todoList.tsx",
      lineNumber: 318,
      columnNumber: 43
    }, this)) }, void 0, false, {
      fileName: "app/routes/todoList.tsx",
      lineNumber: 317,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "pegination-footer  mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "pegination flex justify-center flex-row gap-4 ", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 384 512", className: "w-8 h-8", onClick: (e) => {
        setShowFav((prev) => !prev);
      }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { d: "M0 48C0 21.5 21.5 0 48 0l0 48V441.4l130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4V48H48V0H336c26.5 0 48 21.5 48 48V488c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488V48z" }, void 0, false, {
        fileName: "app/routes/todoList.tsx",
        lineNumber: 471,
        columnNumber: 14
      }, this) }, void 0, false, {
        fileName: "app/routes/todoList.tsx",
        lineNumber: 469,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { onSubmit: handleSubmit, className: "flex flex-row justify-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "numberInput", className: "mt-1", children: "Records Per Page:" }, void 0, false, {
          fileName: "app/routes/todoList.tsx",
          lineNumber: 473,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "number", id: "numberInput", value: number, onChange: handleChange, className: "border border-gray-300 rounded px-3 py-1 mb-4 w-16", placeholder: "Enter a number", required: true }, void 0, false, {
          fileName: "app/routes/todoList.tsx",
          lineNumber: 474,
          columnNumber: 29
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/todoList.tsx",
        lineNumber: 472,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "hover:bg-violet-600 rounded-full w-12 flex justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { onClick: prePage, children: "Prev" }, void 0, false, {
        fileName: "app/routes/todoList.tsx",
        lineNumber: 477,
        columnNumber: 103
      }, this) }, void 0, false, {
        fileName: "app/routes/todoList.tsx",
        lineNumber: 477,
        columnNumber: 29
      }, this) }, void 0, false, {
        fileName: "app/routes/todoList.tsx",
        lineNumber: 476,
        columnNumber: 25
      }, this),
      numbers.map((n, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "hover:bg-violet-600 rounded-full flex justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { onClick: () => changeCurrentPage(n), children: n }, void 0, false, {
        fileName: "app/routes/todoList.tsx",
        lineNumber: 480,
        columnNumber: 37
      }, this) }, i, false, {
        fileName: "app/routes/todoList.tsx",
        lineNumber: 479,
        columnNumber: 48
      }, this)),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "hover:bg-violet-600 rounded-full w-12 flex justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { onClick: nextPage, children: "Next" }, void 0, false, {
        fileName: "app/routes/todoList.tsx",
        lineNumber: 483,
        columnNumber: 103
      }, this) }, void 0, false, {
        fileName: "app/routes/todoList.tsx",
        lineNumber: 483,
        columnNumber: 29
      }, this) }, void 0, false, {
        fileName: "app/routes/todoList.tsx",
        lineNumber: 482,
        columnNumber: 25
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/todoList.tsx",
      lineNumber: 468,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/routes/todoList.tsx",
      lineNumber: 467,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/todoList.tsx",
    lineNumber: 286,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/routes/todoList.tsx",
    lineNumber: 284,
    columnNumber: 10
  }, this);
}
_s(Todos, "9h5NwAmNLJqGJXwWBDTBHIwAtAU=", false, function() {
  return [useLoaderData, useSubmit];
});
_c = Todos;
var _c;
$RefreshReg$(_c, "Todos");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Todos as default
};
//# sourceMappingURL=/build/routes/todoList-36FAMLSC.js.map
