var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
};

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@remix-run/node";
import { RemixServer } from "@remix-run/react";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { jsxDEV } from "react/jsx-dev-runtime";
var ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return isbot(request.headers.get("user-agent") || "") ? handleBotRequest(
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
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 51,
          columnNumber: 7
        },
        this
      ),
      {
        onAllReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 101,
          columnNumber: 7
        },
        this
      ),
      {
        onShellReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  loader: () => loader,
  meta: () => meta
});
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData
} from "@remix-run/react";

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-TBNMIP6B.css";

// app/component/HomeNavbar.tsx
import { NavLink } from "@remix-run/react";
import { Fragment, jsxDEV as jsxDEV2 } from "react/jsx-dev-runtime";
var Navbar = ({ user }) => /* @__PURE__ */ jsxDEV2(Fragment, { children: user ? /* @__PURE__ */ jsxDEV2("nav", { children: /* @__PURE__ */ jsxDEV2("div", { className: " flex flex-wrap items-center justify-between mx-auto p-2 bg-pink-200", children: [
  /* @__PURE__ */ jsxDEV2("div", { className: "text-5xl font-extrabold flex justify-start ", children: /* @__PURE__ */ jsxDEV2("span", { className: "bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500", children: "Todo App" }, void 0, !1, {
    fileName: "app/component/HomeNavbar.tsx",
    lineNumber: 13,
    columnNumber: 15
  }, this) }, void 0, !1, {
    fileName: "app/component/HomeNavbar.tsx",
    lineNumber: 12,
    columnNumber: 13
  }, this),
  /* @__PURE__ */ jsxDEV2("div", { className: " w-full md:block md:w-auto", id: "navbar-default", children: /* @__PURE__ */ jsxDEV2("ul", { className: "font-medium flex flex-col p-4 md:p-0 mt-2 bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse bg-transparent", children: [
    /* @__PURE__ */ jsxDEV2("li", { children: /* @__PURE__ */ jsxDEV2(NavLink, { to: "/", className: "block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500", "aria-current": "page", children: "Home" }, void 0, !1, {
      fileName: "app/component/HomeNavbar.tsx",
      lineNumber: 20,
      columnNumber: 19
    }, this) }, void 0, !1, {
      fileName: "app/component/HomeNavbar.tsx",
      lineNumber: 19,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ jsxDEV2("li", { children: /* @__PURE__ */ jsxDEV2(NavLink, { to: "/todoList", className: "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent", children: "TodoLists" }, void 0, !1, {
      fileName: "app/component/HomeNavbar.tsx",
      lineNumber: 23,
      columnNumber: 19
    }, this) }, void 0, !1, {
      fileName: "app/component/HomeNavbar.tsx",
      lineNumber: 22,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ jsxDEV2("li", { children: /* @__PURE__ */ jsxDEV2(NavLink, { to: "/catagory", className: "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent", children: "AddCatagory" }, void 0, !1, {
      fileName: "app/component/HomeNavbar.tsx",
      lineNumber: 26,
      columnNumber: 19
    }, this) }, void 0, !1, {
      fileName: "app/component/HomeNavbar.tsx",
      lineNumber: 25,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ jsxDEV2("li", { children: /* @__PURE__ */ jsxDEV2(NavLink, { to: "/todoAdd", className: "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent", children: "AddTodo" }, void 0, !1, {
      fileName: "app/component/HomeNavbar.tsx",
      lineNumber: 29,
      columnNumber: 19
    }, this) }, void 0, !1, {
      fileName: "app/component/HomeNavbar.tsx",
      lineNumber: 28,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ jsxDEV2("li", { children: /* @__PURE__ */ jsxDEV2(NavLink, { to: "/search", className: "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent", children: "Search" }, void 0, !1, {
      fileName: "app/component/HomeNavbar.tsx",
      lineNumber: 32,
      columnNumber: 19
    }, this) }, void 0, !1, {
      fileName: "app/component/HomeNavbar.tsx",
      lineNumber: 31,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ jsxDEV2("li", { children: /* @__PURE__ */ jsxDEV2(NavLink, { to: "http://localhost:5555", target: "__blank", className: "rounded-lg px-3 py-2 text-slate-600 font-medium hover:bg-slate-100 hover:text-slate-900", children: "Report" }, void 0, !1, {
      fileName: "app/component/HomeNavbar.tsx",
      lineNumber: 35,
      columnNumber: 19
    }, this) }, void 0, !1, {
      fileName: "app/component/HomeNavbar.tsx",
      lineNumber: 34,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ jsxDEV2("li", { children: /* @__PURE__ */ jsxDEV2(NavLink, { to: "/logout", className: "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent border-dotted border-2 border-white-600 ", children: "Logout" }, void 0, !1, {
      fileName: "app/component/HomeNavbar.tsx",
      lineNumber: 38,
      columnNumber: 19
    }, this) }, void 0, !1, {
      fileName: "app/component/HomeNavbar.tsx",
      lineNumber: 37,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ jsxDEV2("select", { name: "profile", id: "", style: { background: "none" }, children: [
      /* @__PURE__ */ jsxDEV2("option", { value: "", children: "profile" }, void 0, !1, {
        fileName: "app/component/HomeNavbar.tsx",
        lineNumber: 41,
        columnNumber: 19
      }, this),
      /* @__PURE__ */ jsxDEV2("option", { value: "", children: user.name }, void 0, !1, {
        fileName: "app/component/HomeNavbar.tsx",
        lineNumber: 42,
        columnNumber: 19
      }, this)
    ] }, void 0, !0, {
      fileName: "app/component/HomeNavbar.tsx",
      lineNumber: 40,
      columnNumber: 17
    }, this)
  ] }, void 0, !0, {
    fileName: "app/component/HomeNavbar.tsx",
    lineNumber: 18,
    columnNumber: 15
  }, this) }, void 0, !1, {
    fileName: "app/component/HomeNavbar.tsx",
    lineNumber: 17,
    columnNumber: 13
  }, this)
] }, void 0, !0, {
  fileName: "app/component/HomeNavbar.tsx",
  lineNumber: 11,
  columnNumber: 11
}, this) }, void 0, !1, {
  fileName: "app/component/HomeNavbar.tsx",
  lineNumber: 10,
  columnNumber: 9
}, this) : /* @__PURE__ */ jsxDEV2("nav", { className: "bg-white border-gray-200 ", children: /* @__PURE__ */ jsxDEV2("div", { className: "flex flex-wrap items-center justify-between mx-auto p-2 bg-pink-200", children: [
  /* @__PURE__ */ jsxDEV2("div", { className: "text-5xl font-extrabold flex justify-start ", children: /* @__PURE__ */ jsxDEV2("span", { className: "bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500", children: "Todo App" }, void 0, !1, {
    fileName: "app/component/HomeNavbar.tsx",
    lineNumber: 52,
    columnNumber: 15
  }, this) }, void 0, !1, {
    fileName: "app/component/HomeNavbar.tsx",
    lineNumber: 51,
    columnNumber: 13
  }, this),
  /* @__PURE__ */ jsxDEV2("div", { className: "hidden w-full md:block md:w-auto", id: "navbar-default", children: /* @__PURE__ */ jsxDEV2("ul", { className: "font-medium flex flex-col p-4 md:p-0 mt-4  bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse  bg-transparent", children: [
    /* @__PURE__ */ jsxDEV2("li", { children: /* @__PURE__ */ jsxDEV2(NavLink, { to: "/login", className: "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent", children: "Login" }, void 0, !1, {
      fileName: "app/component/HomeNavbar.tsx",
      lineNumber: 59,
      columnNumber: 19
    }, this) }, void 0, !1, {
      fileName: "app/component/HomeNavbar.tsx",
      lineNumber: 58,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ jsxDEV2("li", { children: /* @__PURE__ */ jsxDEV2(NavLink, { to: "/register", className: "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent", children: "Register" }, void 0, !1, {
      fileName: "app/component/HomeNavbar.tsx",
      lineNumber: 62,
      columnNumber: 19
    }, this) }, void 0, !1, {
      fileName: "app/component/HomeNavbar.tsx",
      lineNumber: 61,
      columnNumber: 17
    }, this)
  ] }, void 0, !0, {
    fileName: "app/component/HomeNavbar.tsx",
    lineNumber: 57,
    columnNumber: 15
  }, this) }, void 0, !1, {
    fileName: "app/component/HomeNavbar.tsx",
    lineNumber: 56,
    columnNumber: 13
  }, this)
] }, void 0, !0, {
  fileName: "app/component/HomeNavbar.tsx",
  lineNumber: 50,
  columnNumber: 11
}, this) }, void 0, !1, {
  fileName: "app/component/HomeNavbar.tsx",
  lineNumber: 49,
  columnNumber: 9
}, this) }, void 0, !1, {
  fileName: "app/component/HomeNavbar.tsx",
  lineNumber: 8,
  columnNumber: 5
}, this), HomeNavbar_default = Navbar;

// app/utils/auth.server.ts
import { Authenticator, AuthorizationError } from "remix-auth";

// app/utils/session.server.ts
import { createCookieSessionStorage } from "@remix-run/node";
var sessionStorage = createCookieSessionStorage({
  cookie: {
    name: "_session",
    // use any name you want here
    sameSite: "lax",
    // this helps with CSRF
    path: "/",
    // remember to add this so the cookie will work in all routes
    httpOnly: !0,
    // for security reasons, make this cookie http only
    secrets: ["s3cr3t"],
    // replace this with an actual secret
    secure: !1
    // enable this in prod only
  }
}), { getSession, commitSession, destroySession } = sessionStorage;

// app/utils/auth.server.ts
import { FormStrategy } from "remix-auth-form";
import bcrypt from "bcryptjs";

// app/utils/db.server.ts
import { PrismaClient } from "@prisma/client";
var db;
global.__db || (global.__db = new PrismaClient(), global.__db.$connect()), db = global.__db;

// app/utils/auth.server.ts
var authenticator = new Authenticator(sessionStorage), formStrategy = new FormStrategy(async ({ form }) => {
  let name = form.get("name"), email = form.get("email"), password = form.get("password"), user = await db.user.findUnique({
    where: {
      email
    }
  });
  if (!user)
    throw new AuthorizationError("user don't exist");
  if (!await bcrypt.compare(
    password,
    user.password
  ))
    throw new AuthorizationError("invalid credentials");
  return user;
});
authenticator.use(formStrategy, "form");

// app/root.tsx
import { Toaster } from "react-hot-toast";
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var meta = () => [
  { title: "New Remix App" },
  { name: "description", content: "Welcome to Remix!" }
], links = () => [
  { rel: "stylesheet", href: tailwind_default }
], loader = async ({ request }) => await authenticator.isAuthenticated(request);
function App() {
  let user = useLoaderData();
  return /* @__PURE__ */ jsxDEV3("html", { lang: "en", children: [
    /* @__PURE__ */ jsxDEV3("head", { children: [
      /* @__PURE__ */ jsxDEV3("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 48,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV3("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 49,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV3(Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 50,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV3(Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 51,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 47,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV3("body", { children: [
      /* @__PURE__ */ jsxDEV3(
        Toaster,
        {
          position: "top-center",
          reverseOrder: !1
        },
        void 0,
        !1,
        {
          fileName: "app/root.tsx",
          lineNumber: 54,
          columnNumber: 8
        },
        this
      ),
      /* @__PURE__ */ jsxDEV3(HomeNavbar_default, { user }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 63,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV3(Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 64,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV3(ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 65,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV3(Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 66,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV3(LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 67,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 53,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 46,
    columnNumber: 5
  }, this);
}

// app/routes/todolist.$id.jsx
var todolist_id_exports = {};

// app/routes/catagory.tsx
var catagory_exports = {};
__export(catagory_exports, {
  action: () => action,
  default: () => Category,
  loader: () => loader2
});
import { Form, useLoaderData as useLoaderData2 } from "@remix-run/react";
import { useState } from "react";
import { useSubmit } from "@remix-run/react";
import { jsxDEV as jsxDEV4 } from "react/jsx-dev-runtime";
async function loader2({ request }) {
  let user = await authenticator.isAuthenticated(request, {
    failureRedirect: "/login"
  });
  return await db.category.findMany({
    where: {
      userId: user.id
    }
  });
}
async function action({
  request
}) {
  let user = await authenticator.isAuthenticated(request, {
    failureRedirect: "/login"
  }), formData = await request.formData(), category_Name = formData.get("category_Name");
  return formData.get("action") === "category" ? await db.category.create({
    data: {
      category_Name,
      userId: user.id
    }
  }) : formData.get("action") === "delete-category" ? await db.category.delete({
    where: {
      id: formData.get("todoId")
    }
  }) : formData.get("action") === "update-category" ? await db.category.update({
    where: {
      id: formData.get("todoId")
    },
    data: {
      category_Name: formData.get("category_Name")
    }
  }) : null;
}
function Category() {
  let data = useLoaderData2(), [state1, setState1] = useState(""), submit = useSubmit(), [isEdit, setIsEdit] = useState("");
  function handleclick1(e) {
    setState1(e.target.value);
  }
  function handleSubmit(e) {
    setState1("");
  }
  return /* @__PURE__ */ jsxDEV4("div", { className: "text-center mt-4", children: [
    /* @__PURE__ */ jsxDEV4("h1", { className: "text-3xl ", children: "Add your category here.." }, void 0, !1, {
      fileName: "app/routes/catagory.tsx",
      lineNumber: 77,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV4("hr", {}, void 0, !1, {
      fileName: "app/routes/catagory.tsx",
      lineNumber: 77,
      columnNumber: 68
    }, this),
    /* @__PURE__ */ jsxDEV4(Form, { action: "", method: "POST", className: "mt-12", onSubmit: handleSubmit, children: [
      /* @__PURE__ */ jsxDEV4("div", { className: "flex items-center justify-around", children: [
        /* @__PURE__ */ jsxDEV4("input", { type: "text", name: "category_Name", value: state1, onChange: (e) => handleclick1(e), id: "categoryInput1", className: "border-2 bg-grey-300 rounded-full h-12 w-80 pl-4", placeholder: "Create category_Name", required: !0 }, void 0, !1, {
          fileName: "app/routes/catagory.tsx",
          lineNumber: 81,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ jsxDEV4("input", { type: "hidden", name: "action", value: "category" }, void 0, !1, {
          fileName: "app/routes/catagory.tsx",
          lineNumber: 82,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/catagory.tsx",
        lineNumber: 80,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV4("div", { className: "flex items-center justify-center mt-12 ", children: /* @__PURE__ */ jsxDEV4("input", { type: "submit", value: "Add category", className: "p-1 text-white bg-green-400 rounded-full m-auto w-40 h-12" }, void 0, !1, {
        fileName: "app/routes/catagory.tsx",
        lineNumber: 86,
        columnNumber: 21
      }, this) }, void 0, !1, {
        fileName: "app/routes/catagory.tsx",
        lineNumber: 85,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/catagory.tsx",
      lineNumber: 79,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV4("br", {}, void 0, !1, {
      fileName: "app/routes/catagory.tsx",
      lineNumber: 88,
      columnNumber: 20
    }, this),
    /* @__PURE__ */ jsxDEV4("ol", { className: "flex justify-center flex-col items-center", children: data.map((category) => /* @__PURE__ */ jsxDEV4("li", { className: "flex justify-center gap-4 border-2 bg-lime-600 rounded-full px-4 py-2", children: [
      category.category_Name,
      isEdit == category.id ? /* @__PURE__ */ jsxDEV4(Form, { method: "POST", onSubmit: (e) => {
        e.preventDefault(), submit(e.currentTarget, { navigate: !1, method: "post" }), setIsEdit("");
      }, children: [
        /* @__PURE__ */ jsxDEV4("p", { className: "edit-input", children: /* @__PURE__ */ jsxDEV4("input", { type: "text", name: "category_Name", required: !0, className: "border-hidden" }, void 0, !1, {
          fileName: "app/routes/catagory.tsx",
          lineNumber: 103,
          columnNumber: 41
        }, this) }, void 0, !1, {
          fileName: "app/routes/catagory.tsx",
          lineNumber: 102,
          columnNumber: 37
        }, this),
        /* @__PURE__ */ jsxDEV4("input", { type: "hidden", name: "todoId", value: category.id }, void 0, !1, {
          fileName: "app/routes/catagory.tsx",
          lineNumber: 105,
          columnNumber: 37
        }, this),
        /* @__PURE__ */ jsxDEV4("input", { type: "hidden", name: "action", value: "update-category" }, void 0, !1, {
          fileName: "app/routes/catagory.tsx",
          lineNumber: 106,
          columnNumber: 37
        }, this),
        /* @__PURE__ */ jsxDEV4("div", { className: "save_cancel grid grid-cols-2 divide-x", children: [
          /* @__PURE__ */ jsxDEV4("button", { type: "submit", className: "border-2 bg-emerald-500 text-white", children: "save" }, void 0, !1, {
            fileName: "app/routes/catagory.tsx",
            lineNumber: 108,
            columnNumber: 41
          }, this),
          /* @__PURE__ */ jsxDEV4(
            "button",
            {
              onClick: () => {
                setIsEdit("");
              },
              className: "border-2 bg-red-600 text-white",
              children: "cancel"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/catagory.tsx",
              lineNumber: 109,
              columnNumber: 41
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/catagory.tsx",
          lineNumber: 107,
          columnNumber: 37
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/catagory.tsx",
        lineNumber: 96,
        columnNumber: 33
      }, this) : /* @__PURE__ */ jsxDEV4(
        "button",
        {
          onClick: () => {
            setIsEdit(category.id);
          },
          className: " w-4 rounded-lg",
          children: /* @__PURE__ */ jsxDEV4("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", children: /* @__PURE__ */ jsxDEV4("path", { d: "M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z" }, void 0, !1, {
            fileName: "app/routes/catagory.tsx",
            lineNumber: 119,
            columnNumber: 127
          }, this) }, void 0, !1, {
            fileName: "app/routes/catagory.tsx",
            lineNumber: 119,
            columnNumber: 65
          }, this)
        },
        void 0,
        !1,
        {
          fileName: "app/routes/catagory.tsx",
          lineNumber: 116,
          columnNumber: 33
        },
        this
      ),
      /* @__PURE__ */ jsxDEV4(Form, { method: "POST", children: [
        /* @__PURE__ */ jsxDEV4("input", { type: "hidden", name: "todoId", value: category.id }, void 0, !1, {
          fileName: "app/routes/catagory.tsx",
          lineNumber: 122,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ jsxDEV4("button", { type: "submit", name: "action", value: "delete-category", className: " w-4 rounded-lg", children: /* @__PURE__ */ jsxDEV4("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512", children: /* @__PURE__ */ jsxDEV4("path", { d: "M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z" }, void 0, !1, {
          fileName: "app/routes/catagory.tsx",
          lineNumber: 123,
          columnNumber: 185
        }, this) }, void 0, !1, {
          fileName: "app/routes/catagory.tsx",
          lineNumber: 123,
          columnNumber: 123
        }, this) }, void 0, !1, {
          fileName: "app/routes/catagory.tsx",
          lineNumber: 123,
          columnNumber: 33
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/catagory.tsx",
        lineNumber: 121,
        columnNumber: 29
      }, this)
    ] }, category.id, !0, {
      fileName: "app/routes/catagory.tsx",
      lineNumber: 92,
      columnNumber: 25
    }, this)) }, void 0, !1, {
      fileName: "app/routes/catagory.tsx",
      lineNumber: 89,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/catagory.tsx",
    lineNumber: 76,
    columnNumber: 9
  }, this);
}

// app/routes/register.tsx
var register_exports = {};
__export(register_exports, {
  action: () => action2,
  default: () => register_default,
  loader: () => loader3
});
import { useActionData, useNavigate } from "@remix-run/react";
import { useState as useState2 } from "react";
import { json } from "@remix-run/node";
import bcrypt2 from "bcryptjs";
import { Link } from "@remix-run/react";
import { jsxDEV as jsxDEV5 } from "react/jsx-dev-runtime";
var loader3 = async ({ request }) => await authenticator.isAuthenticated(request, {
  successRedirect: "/"
});
async function action2({ request }) {
  let form = await request.formData(), name = form.get("name"), email = form.get("email"), password = form.get("password");
  if (await db.user.count({
    where: {
      email
    }
  }))
    return { error: "Oops! It looks like you're already registered. Please log in to continue or reset your password if needed." };
  {
    let hashedPass = await bcrypt2.hash(password, 10);
    return await db.user.create({
      data: {
        name,
        email,
        password: hashedPass
      }
    }), json(
      await authenticator.authenticate("form", request, {
        successRedirect: "/",
        failureRedirect: "/login",
        context: { formData: form }
      })
    );
  }
}
var Register = () => {
  let navigate = useNavigate(), data = useActionData(), [passError, setPassError] = useState2(""), [error, setError] = useState2(data?.error || ""), [disable, setDisable] = useState2(!1);
  return /* @__PURE__ */ jsxDEV5("div", { children: [
    /* @__PURE__ */ jsxDEV5("h1", { className: "text-center font-semibold text-2xl mt-24 mb-5", children: "Register" }, void 0, !1, {
      fileName: "app/routes/register.tsx",
      lineNumber: 62,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV5("form", { method: "POST", className: "flex flex-col w-72 gap-2 m-auto", children: [
      /* @__PURE__ */ jsxDEV5(
        "input",
        {
          type: "text",
          name: "name",
          className: "bg-slate-100 p-2 rounded-xl",
          id: "name",
          placeholder: "name",
          required: !0
        },
        void 0,
        !1,
        {
          fileName: "app/routes/register.tsx",
          lineNumber: 66,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ jsxDEV5(
        "input",
        {
          type: "email",
          name: "email",
          className: "bg-slate-100 p-2 rounded-xl",
          id: "email",
          placeholder: "shivam@examle.com",
          required: !0
        },
        void 0,
        !1,
        {
          fileName: "app/routes/register.tsx",
          lineNumber: 74,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ jsxDEV5(
        "input",
        {
          type: "password",
          name: "password",
          className: "bg-slate-100 p-2 rounded-xl",
          id: "password",
          placeholder: "password",
          required: !0
        },
        void 0,
        !1,
        {
          fileName: "app/routes/register.tsx",
          lineNumber: 83,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ jsxDEV5(
        "button",
        {
          type: "submit",
          className: "bg-black w-32 rounded-xl p-2 text-white font-semibold m-auto",
          disabled: disable,
          children: disable ? "Registering..." : "Register"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/register.tsx",
          lineNumber: 92,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ jsxDEV5("h1", { className: "text-center text-zinc-500", children: [
        "already have an account?",
        /* @__PURE__ */ jsxDEV5(Link, { to: "/login", children: /* @__PURE__ */ jsxDEV5("span", { className: "font-semibold ml-2 cursor-pointer text-black", children: "Login" }, void 0, !1, {
          fileName: "app/routes/register.tsx",
          lineNumber: 103,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/routes/register.tsx",
          lineNumber: 102,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/register.tsx",
        lineNumber: 100,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV5("span", { className: "text-center text-red-400 font-semibold", children: error || "" }, void 0, !1, {
        fileName: "app/routes/register.tsx",
        lineNumber: 109,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/register.tsx",
      lineNumber: 65,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/register.tsx",
    lineNumber: 61,
    columnNumber: 5
  }, this);
}, register_default = Register;

// app/routes/todoList.tsx
var todoList_exports = {};
__export(todoList_exports, {
  action: () => action3,
  default: () => Todos,
  loader: () => loader4
});
import { Form as Form2, redirect as redirect2, useLoaderData as useLoaderData3, useSubmit as useSubmit2 } from "@remix-run/react";
import { useState as useState3 } from "react";
import { Link as Link2 } from "@remix-run/react";
import toast from "react-hot-toast";
import { Fragment as Fragment2, jsxDEV as jsxDEV6 } from "react/jsx-dev-runtime";
async function loader4({ params, request }) {
  let user = await authenticator.isAuthenticated(request, {
    failureRedirect: "/login"
  });
  return { data: await db.todo.findMany({
    where: {
      userId: user.id
    },
    take: 20,
    select: { id: !0, title: !0, createdAt: !0, category: !0, status: !0 }
  }), todoId: params.todoId };
}
async function action3({ request }) {
  let user = await authenticator.isAuthenticated(request, {
    failureRedirect: "/login"
  }), formData = await request.formData(), todoId = formData.get("todoId");
  if (formData.get("action") === "delete-todo")
    return await db.todo.delete({
      where: {
        id: formData.get("todoId")
      }
    });
  if (formData.get("action") === "update-todo")
    return await db.todo.update({
      where: {
        id: formData.get("todoId")
      },
      data: {
        title: formData.get("title")
      }
    });
  if (formData.get("action") === "change-status")
    return await db.todo.update({
      where: {
        id: formData.get("todoId")
      },
      data: {
        status: formData.get("status")
      }
    }), redirect2("/todoList");
  if (formData.get("action") === "update-sub-todo")
    return await db.subTodo.create({
      data: {
        title: formData.get("title"),
        todo: { connect: { id: todoId } },
        user: { connect: { id: user.id } }
      }
    });
  if (formData.get("action") === "deleteAll") {
    console.log("DeleteAll runs...");
    let arr = formData.get("value").split(",");
    console.log(" this is arr", arr);
    let subtodosPromises = arr.map((b) => db.subTodo.deleteMany({
      where: {
        todoId: b
      }
    }));
    await Promise.all(subtodosPromises);
    let arrPromises = arr.map((a) => db.todo.delete({
      where: {
        id: a
      }
    }));
    return await Promise.all(arrPromises);
  }
  return redirect2("/todos");
}
function Todos() {
  let { data: todos, todoId } = useLoaderData3(), submit = useSubmit2(), [isEdit, setIsEdit] = useState3(""), [subTodo, setSubTodo] = useState3(""), [arr, setArr] = useState3([]), [selectStatus, setSelectStatus] = useState3("All"), [selectedItems, setSelectedItems] = useState3([]), [currentPage, setCurrentPage] = useState3(1), [favourite, setFavourite] = useState3([]), [showFavIcon, setShowFavIcon] = useState3(!1), [showFav, setShowFav] = useState3(!1), [number, setNumber] = useState3(5), [favId, setFavId] = useState3(""), handleSubmit = (event) => {
    event.preventDefault(), console.log("Submitted number:", number);
  }, handleChange = (event) => {
    event.target.value === 0 && setNumber(1), setNumber(event.target.value);
  }, recordsPerPage = number, lastIndex = currentPage * recordsPerPage, firstIndex = lastIndex - recordsPerPage, records = todos.slice(firstIndex, lastIndex), nPage = Math.ceil(todos.length / recordsPerPage), numbers = [...Array(nPage + 1).keys()].slice(1);
  function prePage() {
    currentPage !== 1 && setCurrentPage(currentPage - 1);
  }
  function changeCurrentPage(id) {
    setCurrentPage(id);
  }
  function nextPage() {
    currentPage !== nPage && setCurrentPage(currentPage + 1);
  }
  function handleselectedItem(itemId) {
    selectedItems.includes(itemId) ? setSelectedItems(selectedItems.filter((id) => id !== itemId)) : setSelectedItems([...selectedItems, itemId]);
  }
  let value = records.map((todo) => todo.id);
  function handleSelectAll() {
    if (selectedItems.length === records.length)
      setSelectedItems([]);
    else {
      let value2 = records.map((todo) => todo.id);
      console.log("this is the value of array", value2), setSelectedItems(value2);
    }
  }
  function handleChangeCat(status) {
    console.log("this is status", status), setSelectStatus(status);
  }
  console.log("this is selectStatus", selectStatus);
  function handleClick() {
    submit(
      { action: "deleteAll", value, todoId },
      { navigate: !1, method: "post" }
    ), setSelectedItems([]);
  }
  function handlefavourite(data) {
    console.log("clicked");
    let index = favourite.findIndex((f) => f == data.id);
    index !== -1 ? (favourite.splice(index, 1), records = [...favourite], setFavourite([...favourite]), toast.error("Removed favourite")) : (setFavourite((prevFav) => [...prevFav, data.id]), toast.success("Added favourite"));
  }
  showFav ? records = records.filter((r) => favourite.includes(r.id)) : records = todos.slice(firstIndex, lastIndex), selectStatus === "All" ? records = records : records = records.filter((todo) => selectStatus === todo.status).map((todo) => todo);
  let deleteTodoData = todos.map((todo) => todo);
  function deleteData(id) {
  }
  let [isOpen, setIsOpen] = useState3(!1), toggleModal = () => {
    setIsOpen(!isOpen);
  };
  return /* @__PURE__ */ jsxDEV6(Fragment2, { children: /* @__PURE__ */ jsxDEV6("div", { className: "", children: [
    /* @__PURE__ */ jsxDEV6("br", {}, void 0, !1, {
      fileName: "app/routes/todoList.tsx",
      lineNumber: 316,
      columnNumber: 31
    }, this),
    /* @__PURE__ */ jsxDEV6("h1", { className: "text-3xl text-center", children: "Todo Lists..." }, void 0, !1, {
      fileName: "app/routes/todoList.tsx",
      lineNumber: 317,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ jsxDEV6("hr", {}, void 0, !1, {
      fileName: "app/routes/todoList.tsx",
      lineNumber: 317,
      columnNumber: 72
    }, this),
    " ",
    /* @__PURE__ */ jsxDEV6("br", {}, void 0, !1, {
      fileName: "app/routes/todoList.tsx",
      lineNumber: 317,
      columnNumber: 79
    }, this),
    /* @__PURE__ */ jsxDEV6("div", { className: "flex justify-center", children: [
      /* @__PURE__ */ jsxDEV6("div", { className: "search flex justify-center gap-5", children: [
        /* @__PURE__ */ jsxDEV6("p", { className: "flex items-center gap-2 bg-yellow-200 rounded-full pl-4 w-36 h-8", children: [
          /* @__PURE__ */ jsxDEV6("input", { type: "checkbox", onChange: handleSelectAll }, void 0, !1, {
            fileName: "app/routes/todoList.tsx",
            lineNumber: 323,
            columnNumber: 29
          }, this),
          "  ",
          selectedItems.length === value.length ? "Deselect All" : "Select All"
        ] }, void 0, !0, {
          fileName: "app/routes/todoList.tsx",
          lineNumber: 322,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ jsxDEV6("button", { type: "submit", onClick: handleClick, className: "border-2 w-36 h-8 rounded-full bg-green-400", children: "DeleteAll" }, void 0, !1, {
          fileName: "app/routes/todoList.tsx",
          lineNumber: 326,
          columnNumber: 25
        }, this),
        "  ",
        /* @__PURE__ */ jsxDEV6("br", {}, void 0, !1, {
          fileName: "app/routes/todoList.tsx",
          lineNumber: 326,
          columnNumber: 145
        }, this),
        /* @__PURE__ */ jsxDEV6("br", {}, void 0, !1, {
          fileName: "app/routes/todoList.tsx",
          lineNumber: 326,
          columnNumber: 151
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/todoList.tsx",
        lineNumber: 321,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ jsxDEV6("div", { className: "status-box flex gap-2 justify-end ml-2 m-2", children: [
        /* @__PURE__ */ jsxDEV6("input", { type: "radio", name: "status", checked: selectStatus == "All", onChange: () => handleChangeCat("All") }, void 0, !1, {
          fileName: "app/routes/todoList.tsx",
          lineNumber: 336,
          columnNumber: 25
        }, this),
        "All \xA0\xA0\xA0",
        /* @__PURE__ */ jsxDEV6("input", { type: "radio", name: "status", checked: selectStatus == "pending", onChange: () => handleChangeCat("pending") }, void 0, !1, {
          fileName: "app/routes/todoList.tsx",
          lineNumber: 337,
          columnNumber: 25
        }, this),
        "Pending \xA0\xA0\xA0",
        /* @__PURE__ */ jsxDEV6("input", { type: "radio", name: "status", checked: selectStatus == "completed", onChange: () => handleChangeCat("completed") }, void 0, !1, {
          fileName: "app/routes/todoList.tsx",
          lineNumber: 338,
          columnNumber: 25
        }, this),
        "Completed \xA0\xA0\xA0",
        /* @__PURE__ */ jsxDEV6("input", { type: "radio", name: "status", checked: selectStatus == "on_hold", onChange: () => handleChangeCat("on_hold") }, void 0, !1, {
          fileName: "app/routes/todoList.tsx",
          lineNumber: 339,
          columnNumber: 25
        }, this),
        "On Hold"
      ] }, void 0, !0, {
        fileName: "app/routes/todoList.tsx",
        lineNumber: 334,
        columnNumber: 21
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/todoList.tsx",
      lineNumber: 318,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ jsxDEV6("ol", { className: "flex flex-col items-center", children: records?.map((data) => /* @__PURE__ */ jsxDEV6(Fragment2, { children: /* @__PURE__ */ jsxDEV6("li", { className: `flex justify-around rounded-full m-4 bg-rose-100 w-2/3  ${data.status === "pending" ? "bg-yellow-200" : data.status === "completed" ? "bg-emerald-400" : "bg-red-300"} `, children: [
      /* @__PURE__ */ jsxDEV6(Form2, { method: "POST", className: "flex justify-items-start", onChange: () => {
        value.push(data.id);
      }, children: [
        /* @__PURE__ */ jsxDEV6("input", { type: "hidden", name: "todoId", value: data.id }, void 0, !1, {
          fileName: "app/routes/todoList.tsx",
          lineNumber: 358,
          columnNumber: 41
        }, this),
        /* @__PURE__ */ jsxDEV6("input", { type: "hidden", name: "action", value: "deleteAll" }, void 0, !1, {
          fileName: "app/routes/todoList.tsx",
          lineNumber: 359,
          columnNumber: 41
        }, this),
        /* @__PURE__ */ jsxDEV6("input", { type: "checkbox", name: "checkbox", id: "", checked: selectedItems.includes(data.id), onChange: () => handleselectedItem(data.id) }, void 0, !1, {
          fileName: "app/routes/todoList.tsx",
          lineNumber: 360,
          columnNumber: 41
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/todoList.tsx",
        lineNumber: 355,
        columnNumber: 37
      }, this),
      /* @__PURE__ */ jsxDEV6(Link2, { className: " text-2xl mt-2", to: `/${data.id}`, children: [
        data.title,
        /* @__PURE__ */ jsxDEV6("br", {}, void 0, !1, {
          fileName: "app/routes/todoList.tsx",
          lineNumber: 367,
          columnNumber: 55
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/todoList.tsx",
        lineNumber: 366,
        columnNumber: 37
      }, this),
      /* @__PURE__ */ jsxDEV6("div", { className: "flex items-center", children: [
        /* @__PURE__ */ jsxDEV6("p", { className: "w-4 ", children: /* @__PURE__ */ jsxDEV6("svg", { xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 3", viewBox: "0 0 32 32", id: "category", children: [
          /* @__PURE__ */ jsxDEV6("polygon", { fill: "none", stroke: "#0832ff", "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "2", points: "4.48 15.38 17.62 28.52 27.52 18.62 14.38 5.48 5.19 6.19 4.48 15.38" }, void 0, !1, {
            fileName: "app/routes/todoList.tsx",
            lineNumber: 371,
            columnNumber: 155
          }, this),
          /* @__PURE__ */ jsxDEV6("polygon", { fill: "#0832ff", points: "25.96 17.06 16.06 26.96 17.44 28.44 27.44 18.44 25.96 17.06" }, void 0, !1, {
            fileName: "app/routes/todoList.tsx",
            lineNumber: 371,
            columnNumber: 343
          }, this),
          /* @__PURE__ */ jsxDEV6("line", { x1: "24.83", x2: "14.93", y1: "15.93", y2: "25.83", fill: "none", stroke: "#0832ff", "stroke-linecap": "round", "stroke-miterlimit": "10" }, void 0, !1, {
            fileName: "app/routes/todoList.tsx",
            lineNumber: 371,
            columnNumber: 446
          }, this),
          /* @__PURE__ */ jsxDEV6("circle", { cx: "10", cy: "11", r: "1.5", fill: "#0832ff" }, void 0, !1, {
            fileName: "app/routes/todoList.tsx",
            lineNumber: 371,
            columnNumber: 578
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/todoList.tsx",
          lineNumber: 371,
          columnNumber: 61
        }, this) }, void 0, !1, {
          fileName: "app/routes/todoList.tsx",
          lineNumber: 371,
          columnNumber: 41
        }, this),
        /* @__PURE__ */ jsxDEV6("p", { className: "category-name", children: data.category.category_Name }, void 0, !1, {
          fileName: "app/routes/todoList.tsx",
          lineNumber: 373,
          columnNumber: 41
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/todoList.tsx",
        lineNumber: 370,
        columnNumber: 37
      }, this),
      /* @__PURE__ */ jsxDEV6("div", { className: "flex gap-2 items-center justify-end", children: [
        /* @__PURE__ */ jsxDEV6(Form2, { method: "POST", onChange: (e) => {
          e.preventDefault(), submit(e.currentTarget, { navigate: !1, method: "post" });
        }, children: [
          /* @__PURE__ */ jsxDEV6("input", { type: "hidden", name: "todoId", value: data.id }, void 0, !1, {
            fileName: "app/routes/todoList.tsx",
            lineNumber: 387,
            columnNumber: 45
          }, this),
          /* @__PURE__ */ jsxDEV6("input", { type: "hidden", name: "action", value: "change-status" }, void 0, !1, {
            fileName: "app/routes/todoList.tsx",
            lineNumber: 388,
            columnNumber: 45
          }, this),
          /* @__PURE__ */ jsxDEV6("select", { name: "status", id: "", value: data.status, className: "mr-2", children: [
            /* @__PURE__ */ jsxDEV6("option", { value: "pending", children: "pending" }, void 0, !1, {
              fileName: "app/routes/todoList.tsx",
              lineNumber: 390,
              columnNumber: 49
            }, this),
            /* @__PURE__ */ jsxDEV6("option", { value: "on_hold", children: "on_hold" }, void 0, !1, {
              fileName: "app/routes/todoList.tsx",
              lineNumber: 391,
              columnNumber: 49
            }, this),
            /* @__PURE__ */ jsxDEV6("option", { value: "completed", children: "completed" }, void 0, !1, {
              fileName: "app/routes/todoList.tsx",
              lineNumber: 392,
              columnNumber: 49
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/todoList.tsx",
            lineNumber: 389,
            columnNumber: 45
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/todoList.tsx",
          lineNumber: 382,
          columnNumber: 41
        }, this),
        isEdit == data.id ? /* @__PURE__ */ jsxDEV6(Form2, { method: "POST", onSubmit: (e) => {
          e.preventDefault(), submit(e.currentTarget, { navigate: !1, method: "post" }), setIsEdit("");
        }, children: [
          /* @__PURE__ */ jsxDEV6("p", { className: "edit-input border-2", children: /* @__PURE__ */ jsxDEV6("input", { type: "text", name: "title", required: !0, className: "border-hidden" }, void 0, !1, {
            fileName: "app/routes/todoList.tsx",
            lineNumber: 405,
            columnNumber: 53
          }, this) }, void 0, !1, {
            fileName: "app/routes/todoList.tsx",
            lineNumber: 404,
            columnNumber: 49
          }, this),
          /* @__PURE__ */ jsxDEV6("input", { type: "hidden", name: "todoId", value: data.id }, void 0, !1, {
            fileName: "app/routes/todoList.tsx",
            lineNumber: 407,
            columnNumber: 49
          }, this),
          /* @__PURE__ */ jsxDEV6("input", { type: "hidden", name: "action", value: "update-todo" }, void 0, !1, {
            fileName: "app/routes/todoList.tsx",
            lineNumber: 408,
            columnNumber: 49
          }, this),
          /* @__PURE__ */ jsxDEV6("div", { className: "save_cancel grid grid-cols-2 divide-x", children: [
            /* @__PURE__ */ jsxDEV6("button", { type: "submit", className: "border-2 bg-emerald-500 text-white", children: "save" }, void 0, !1, {
              fileName: "app/routes/todoList.tsx",
              lineNumber: 410,
              columnNumber: 53
            }, this),
            /* @__PURE__ */ jsxDEV6(
              "button",
              {
                onClick: () => {
                  setIsEdit("");
                },
                className: "border-2 bg-red-600 text-white",
                children: "cancel"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/todoList.tsx",
                lineNumber: 411,
                columnNumber: 53
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/todoList.tsx",
            lineNumber: 409,
            columnNumber: 49
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/todoList.tsx",
          lineNumber: 398,
          columnNumber: 45
        }, this) : /* @__PURE__ */ jsxDEV6(
          "button",
          {
            onClick: () => {
              setIsEdit(data.id);
            },
            className: " w-4 rounded-lg",
            children: /* @__PURE__ */ jsxDEV6("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", children: /* @__PURE__ */ jsxDEV6("path", { d: "M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z" }, void 0, !1, {
              fileName: "app/routes/todoList.tsx",
              lineNumber: 421,
              columnNumber: 139
            }, this) }, void 0, !1, {
              fileName: "app/routes/todoList.tsx",
              lineNumber: 421,
              columnNumber: 77
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/routes/todoList.tsx",
            lineNumber: 418,
            columnNumber: 45
          },
          this
        ),
        /* @__PURE__ */ jsxDEV6("div", { children: [
          /* @__PURE__ */ jsxDEV6(Form2, { method: "POST", onClick: (e) => {
            data.id;
          }, children: [
            /* @__PURE__ */ jsxDEV6("input", { type: "hidden", name: "todoId", value: data.id }, void 0, !1, {
              fileName: "app/routes/todoList.tsx",
              lineNumber: 428,
              columnNumber: 49
            }, this),
            /* @__PURE__ */ jsxDEV6("button", { type: "submit", name: "action", value: "delete-todo", className: " w-4 rounded-lg", onClick: toggleModal, children: /* @__PURE__ */ jsxDEV6("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512", children: /* @__PURE__ */ jsxDEV6("path", { d: "M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z" }, void 0, !1, {
              fileName: "app/routes/todoList.tsx",
              lineNumber: 429,
              columnNumber: 220
            }, this) }, void 0, !1, {
              fileName: "app/routes/todoList.tsx",
              lineNumber: 429,
              columnNumber: 158
            }, this) }, void 0, !1, {
              fileName: "app/routes/todoList.tsx",
              lineNumber: 429,
              columnNumber: 49
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/todoList.tsx",
            lineNumber: 427,
            columnNumber: 45
          }, this),
          isOpen && /* @__PURE__ */ jsxDEV6("div", { className: "fixed inset-0 z-50 flex items-center justify-center ", children: /* @__PURE__ */ jsxDEV6("div", { className: "bg-red rounded-lg p-8 border-2 bg-rose-200", children: [
            /* @__PURE__ */ jsxDEV6("h2", { className: "text-xl font-bold mb-4", children: "Delete" }, void 0, !1, {
              fileName: "app/routes/todoList.tsx",
              lineNumber: 436,
              columnNumber: 57
            }, this),
            /* @__PURE__ */ jsxDEV6("p", { className: "mb-4", children: [
              "This is the todo content.",
              /* @__PURE__ */ jsxDEV6("br", {}, void 0, !1, {
                fileName: "app/routes/todoList.tsx",
                lineNumber: 438,
                columnNumber: 57
              }, this),
              "->  " + data.title
            ] }, void 0, !0, {
              fileName: "app/routes/todoList.tsx",
              lineNumber: 437,
              columnNumber: 57
            }, this),
            /* @__PURE__ */ jsxDEV6("button", { onClick: toggleModal, className: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded", children: "Delete Todo" }, void 0, !1, {
              fileName: "app/routes/todoList.tsx",
              lineNumber: 439,
              columnNumber: 57
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/todoList.tsx",
            lineNumber: 435,
            columnNumber: 53
          }, this) }, void 0, !1, {
            fileName: "app/routes/todoList.tsx",
            lineNumber: 434,
            columnNumber: 49
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/todoList.tsx",
          lineNumber: 425,
          columnNumber: 41
        }, this),
        subTodo == data.id ? /* @__PURE__ */ jsxDEV6(Form2, { method: "POST", onSubmit: (e) => {
          e.preventDefault(), submit(e.currentTarget, { navigate: !1, method: "post" }), setSubTodo("");
        }, children: [
          /* @__PURE__ */ jsxDEV6("p", { className: "edit-input border-2", children: /* @__PURE__ */ jsxDEV6("input", { type: "text", name: "title", required: !0, className: "border-hidden" }, void 0, !1, {
            fileName: "app/routes/todoList.tsx",
            lineNumber: 462,
            columnNumber: 53
          }, this) }, void 0, !1, {
            fileName: "app/routes/todoList.tsx",
            lineNumber: 461,
            columnNumber: 49
          }, this),
          /* @__PURE__ */ jsxDEV6("input", { type: "hidden", name: "todoId", value: data.id }, void 0, !1, {
            fileName: "app/routes/todoList.tsx",
            lineNumber: 464,
            columnNumber: 49
          }, this),
          /* @__PURE__ */ jsxDEV6("input", { type: "hidden", name: "action", value: "update-sub-todo" }, void 0, !1, {
            fileName: "app/routes/todoList.tsx",
            lineNumber: 465,
            columnNumber: 49
          }, this),
          /* @__PURE__ */ jsxDEV6("div", { className: "save_cancel grid grid-cols-2 divide-x", children: [
            /* @__PURE__ */ jsxDEV6("button", { type: "submit", className: "border-2 bg-emerald-500 text-white", children: "Add subTodo" }, void 0, !1, {
              fileName: "app/routes/todoList.tsx",
              lineNumber: 467,
              columnNumber: 53
            }, this),
            /* @__PURE__ */ jsxDEV6(
              "button",
              {
                onClick: () => {
                  setSubTodo("");
                },
                className: "border-2 bg-red-600 text-white",
                children: "Cancel"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/todoList.tsx",
                lineNumber: 468,
                columnNumber: 53
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/todoList.tsx",
            lineNumber: 466,
            columnNumber: 49
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/todoList.tsx",
          lineNumber: 455,
          columnNumber: 45
        }, this) : /* @__PURE__ */ jsxDEV6(
          "button",
          {
            onClick: () => {
              setSubTodo(data.id);
            },
            className: " w-4 rounded-lg",
            children: /* @__PURE__ */ jsxDEV6("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512", children: /* @__PURE__ */ jsxDEV6("path", { d: "M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" }, void 0, !1, {
              fileName: "app/routes/todoList.tsx",
              lineNumber: 478,
              columnNumber: 139
            }, this) }, void 0, !1, {
              fileName: "app/routes/todoList.tsx",
              lineNumber: 478,
              columnNumber: 77
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/routes/todoList.tsx",
            lineNumber: 475,
            columnNumber: 45
          },
          this
        ),
        /* @__PURE__ */ jsxDEV6("button", { onClick: () => handlefavourite(data), children: favourite.includes(data.id, 0) ? /* @__PURE__ */ jsxDEV6("span", { children: "\u{1F495}" }, void 0, !1, {
          fileName: "app/routes/todoList.tsx",
          lineNumber: 492,
          columnNumber: 82
        }, this) : /* @__PURE__ */ jsxDEV6("span", { children: "\u2764\uFE0F" }, void 0, !1, {
          fileName: "app/routes/todoList.tsx",
          lineNumber: 492,
          columnNumber: 101
        }, this) }, void 0, !1, {
          fileName: "app/routes/todoList.tsx",
          lineNumber: 490,
          columnNumber: 41
        }, this),
        /* @__PURE__ */ jsxDEV6(Link2, { to: `/${data.id}`, children: /* @__PURE__ */ jsxDEV6("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", className: "w-8 h-8", children: /* @__PURE__ */ jsxDEV6("path", { d: "M217.9 105.9L340.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L217.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1L32 320c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM352 416l64 0c17.7 0 32-14.3 32-32l0-256c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0c53 0 96 43 96 96l0 256c0 53-43 96-96 96l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z" }, void 0, !1, {
          fileName: "app/routes/todoList.tsx",
          lineNumber: 499,
          columnNumber: 127
        }, this) }, void 0, !1, {
          fileName: "app/routes/todoList.tsx",
          lineNumber: 499,
          columnNumber: 45
        }, this) }, void 0, !1, {
          fileName: "app/routes/todoList.tsx",
          lineNumber: 498,
          columnNumber: 41
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/todoList.tsx",
        lineNumber: 379,
        columnNumber: 37
      }, this)
    ] }, data.id, !0, {
      fileName: "app/routes/todoList.tsx",
      lineNumber: 351,
      columnNumber: 33
    }, this) }, void 0, !1, {
      fileName: "app/routes/todoList.tsx",
      lineNumber: 350,
      columnNumber: 29
    }, this)) }, void 0, !1, {
      fileName: "app/routes/todoList.tsx",
      lineNumber: 347,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ jsxDEV6("div", { className: "pegination-footer  mt-2", children: /* @__PURE__ */ jsxDEV6("ul", { className: "pegination flex justify-center flex-row gap-4 ", children: [
      /* @__PURE__ */ jsxDEV6("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 384 512", className: "w-8 h-8", onClick: (e) => {
        setShowFav((prev) => !prev);
      }, children: /* @__PURE__ */ jsxDEV6("path", { d: "M0 48C0 21.5 21.5 0 48 0l0 48V441.4l130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4V48H48V0H336c26.5 0 48 21.5 48 48V488c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488V48z" }, void 0, !1, {
        fileName: "app/routes/todoList.tsx",
        lineNumber: 512,
        columnNumber: 156
      }, this) }, void 0, !1, {
        fileName: "app/routes/todoList.tsx",
        lineNumber: 512,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ jsxDEV6(Form2, { onSubmit: handleSubmit, className: "flex flex-row justify-center", children: [
        /* @__PURE__ */ jsxDEV6("label", { htmlFor: "numberInput", className: "mt-1", children: "Records Per Page:" }, void 0, !1, {
          fileName: "app/routes/todoList.tsx",
          lineNumber: 514,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ jsxDEV6(
          "input",
          {
            type: "number",
            id: "numberInput",
            value: number,
            onChange: handleChange,
            className: "border border-gray-300 rounded px-3 py-1 mb-4 w-16",
            placeholder: "Enter a number",
            required: !0
          },
          void 0,
          !1,
          {
            fileName: "app/routes/todoList.tsx",
            lineNumber: 515,
            columnNumber: 29
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/todoList.tsx",
        lineNumber: 513,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ jsxDEV6("p", { children: /* @__PURE__ */ jsxDEV6("li", { className: "hover:bg-violet-600 rounded-full w-12 flex justify-center", children: /* @__PURE__ */ jsxDEV6(Link2, { onClick: prePage, children: "Prev" }, void 0, !1, {
        fileName: "app/routes/todoList.tsx",
        lineNumber: 526,
        columnNumber: 103
      }, this) }, void 0, !1, {
        fileName: "app/routes/todoList.tsx",
        lineNumber: 526,
        columnNumber: 29
      }, this) }, void 0, !1, {
        fileName: "app/routes/todoList.tsx",
        lineNumber: 525,
        columnNumber: 25
      }, this),
      numbers.map((n, i) => /* @__PURE__ */ jsxDEV6("span", { className: "hover:bg-violet-600 rounded-full flex justify-center", children: /* @__PURE__ */ jsxDEV6(Link2, { onClick: () => changeCurrentPage(n), children: n }, void 0, !1, {
        fileName: "app/routes/todoList.tsx",
        lineNumber: 531,
        columnNumber: 37
      }, this) }, i, !1, {
        fileName: "app/routes/todoList.tsx",
        lineNumber: 530,
        columnNumber: 33
      }, this)),
      /* @__PURE__ */ jsxDEV6("p", { children: /* @__PURE__ */ jsxDEV6("li", { className: "hover:bg-violet-600 rounded-full w-12 flex justify-center", children: /* @__PURE__ */ jsxDEV6(Link2, { onClick: nextPage, children: "Next" }, void 0, !1, {
        fileName: "app/routes/todoList.tsx",
        lineNumber: 536,
        columnNumber: 103
      }, this) }, void 0, !1, {
        fileName: "app/routes/todoList.tsx",
        lineNumber: 536,
        columnNumber: 29
      }, this) }, void 0, !1, {
        fileName: "app/routes/todoList.tsx",
        lineNumber: 535,
        columnNumber: 25
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/todoList.tsx",
      lineNumber: 511,
      columnNumber: 21
    }, this) }, void 0, !1, {
      fileName: "app/routes/todoList.tsx",
      lineNumber: 510,
      columnNumber: 17
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/todoList.tsx",
    lineNumber: 316,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/routes/todoList.tsx",
    lineNumber: 314,
    columnNumber: 9
  }, this);
}

// app/routes/$todoId.tsx
var todoId_exports = {};
__export(todoId_exports, {
  action: () => action4,
  default: () => todoId_default,
  loader: () => loader5
});
import { Form as Form3, NavLink as NavLink2, redirect as redirect3, useLoaderData as useLoaderData4, useParams, useSubmit as useSubmit3 } from "@remix-run/react";
import { useState as useState4 } from "react";
import { Fragment as Fragment3, jsxDEV as jsxDEV7 } from "react/jsx-dev-runtime";
async function loader5({ params, request }) {
  let user = await authenticator.isAuthenticated(request, {
    failureRedirect: "/login"
  });
  return await db.subTodo.findMany({
    where: {
      todoId: params.todoId,
      userId: user.id
    },
    select: { id: !0, title: !0, createdAt: !0, todoId: !0 },
    orderBy: { createdAt: "asc" }
  });
}
var TodoId = () => {
  let params = useParams(), data = useLoaderData4(), [isEdit, setIsEdit] = useState4(""), submit = useSubmit3();
  return /* @__PURE__ */ jsxDEV7(Fragment3, { children: /* @__PURE__ */ jsxDEV7("div", { className: "container mx-auto", children: [
    /* @__PURE__ */ jsxDEV7("br", {}, void 0, !1, {
      fileName: "app/routes/$todoId.tsx",
      lineNumber: 40,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV7("br", {}, void 0, !1, {
      fileName: "app/routes/$todoId.tsx",
      lineNumber: 40,
      columnNumber: 15
    }, this),
    /* @__PURE__ */ jsxDEV7("h1", { className: "text-3xl bg-fuchsia-200 border-l-4 border-b-4 border-indigo-500", children: [
      "YOUR TODO ID IS ::- ",
      params.todoId
    ] }, void 0, !0, {
      fileName: "app/routes/$todoId.tsx",
      lineNumber: 41,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV7("hr", {}, void 0, !1, {
      fileName: "app/routes/$todoId.tsx",
      lineNumber: 41,
      columnNumber: 129
    }, this),
    /* @__PURE__ */ jsxDEV7("br", {}, void 0, !1, {
      fileName: "app/routes/$todoId.tsx",
      lineNumber: 42,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV7("h1", { className: "text-2xl text-center", children: "YOUR SUBTODO IS ..." }, void 0, !1, {
      fileName: "app/routes/$todoId.tsx",
      lineNumber: 43,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV7("ol", { className: "flex flex-col items-center", children: data.map((todo) => /* @__PURE__ */ jsxDEV7("li", { className: " flex justify-center gap-6 border-2 mt-2 w-1/2 text-center rounded-full bg-orange-300 text-2xl", children: [
      todo.title,
      isEdit == todo.id ? /* @__PURE__ */ jsxDEV7(Form3, { method: "POST", onSubmit: (e) => {
        e.preventDefault(), submit(e.currentTarget, { navigate: !1, method: "post" }), setIsEdit("");
      }, children: [
        /* @__PURE__ */ jsxDEV7("p", { className: "edit-input", children: /* @__PURE__ */ jsxDEV7("input", { type: "text", name: "title", required: !0, className: "border-hidden" }, void 0, !1, {
          fileName: "app/routes/$todoId.tsx",
          lineNumber: 58,
          columnNumber: 23
        }, this) }, void 0, !1, {
          fileName: "app/routes/$todoId.tsx",
          lineNumber: 57,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ jsxDEV7("input", { type: "hidden", name: "todoId", value: todo.id }, void 0, !1, {
          fileName: "app/routes/$todoId.tsx",
          lineNumber: 60,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ jsxDEV7("input", { type: "hidden", name: "action", value: "update-todo" }, void 0, !1, {
          fileName: "app/routes/$todoId.tsx",
          lineNumber: 61,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ jsxDEV7("div", { className: "save_cancel grid grid-cols-2 divide-x", children: [
          /* @__PURE__ */ jsxDEV7("button", { type: "submit", className: "border-2 bg-emerald-500 text-white", children: "save" }, void 0, !1, {
            fileName: "app/routes/$todoId.tsx",
            lineNumber: 63,
            columnNumber: 23
          }, this),
          /* @__PURE__ */ jsxDEV7(
            "button",
            {
              onClick: () => {
                setIsEdit("");
              },
              className: "border-2 bg-red-600 text-white",
              children: "cancel"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/$todoId.tsx",
              lineNumber: 64,
              columnNumber: 23
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/$todoId.tsx",
          lineNumber: 62,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/$todoId.tsx",
        lineNumber: 51,
        columnNumber: 19
      }, this) : /* @__PURE__ */ jsxDEV7(
        "button",
        {
          onClick: () => {
            setIsEdit(todo.id);
          },
          className: " w-4 rounded-lg",
          children: /* @__PURE__ */ jsxDEV7("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", children: /* @__PURE__ */ jsxDEV7("path", { d: "M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z" }, void 0, !1, {
            fileName: "app/routes/$todoId.tsx",
            lineNumber: 74,
            columnNumber: 111
          }, this) }, void 0, !1, {
            fileName: "app/routes/$todoId.tsx",
            lineNumber: 74,
            columnNumber: 49
          }, this)
        },
        void 0,
        !1,
        {
          fileName: "app/routes/$todoId.tsx",
          lineNumber: 71,
          columnNumber: 19
        },
        this
      ),
      /* @__PURE__ */ jsxDEV7(Form3, { method: "POST", children: [
        /* @__PURE__ */ jsxDEV7("input", { type: "hidden", name: "todoId", value: todo.id }, void 0, !1, {
          fileName: "app/routes/$todoId.tsx",
          lineNumber: 77,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ jsxDEV7("button", { type: "submit", name: "action", value: "delete-todo", className: " w-4 rounded-lg", children: /* @__PURE__ */ jsxDEV7("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512", children: /* @__PURE__ */ jsxDEV7("path", { d: "M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z" }, void 0, !1, {
          fileName: "app/routes/$todoId.tsx",
          lineNumber: 78,
          columnNumber: 167
        }, this) }, void 0, !1, {
          fileName: "app/routes/$todoId.tsx",
          lineNumber: 78,
          columnNumber: 105
        }, this) }, void 0, !1, {
          fileName: "app/routes/$todoId.tsx",
          lineNumber: 78,
          columnNumber: 19
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/$todoId.tsx",
        lineNumber: 76,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/$todoId.tsx",
      lineNumber: 47,
      columnNumber: 15
    }, this)) }, void 0, !1, {
      fileName: "app/routes/$todoId.tsx",
      lineNumber: 44,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV7("br", {}, void 0, !1, {
      fileName: "app/routes/$todoId.tsx",
      lineNumber: 86,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV7("br", {}, void 0, !1, {
      fileName: "app/routes/$todoId.tsx",
      lineNumber: 86,
      columnNumber: 15
    }, this),
    /* @__PURE__ */ jsxDEV7("br", {}, void 0, !1, {
      fileName: "app/routes/$todoId.tsx",
      lineNumber: 86,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ jsxDEV7("div", { className: "AllList text-center", children: /* @__PURE__ */ jsxDEV7(NavLink2, { to: "/todoList", className: "text-3xl border-4 bg-rose-200 rounded-full p-6", children: "SEE All TODO LIST" }, void 0, !1, {
      fileName: "app/routes/$todoId.tsx",
      lineNumber: 88,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/$todoId.tsx",
      lineNumber: 87,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/$todoId.tsx",
    lineNumber: 39,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/$todoId.tsx",
    lineNumber: 38,
    columnNumber: 5
  }, this);
};
async function action4({
  request,
  params
}) {
  let formData = await request.formData();
  return console.log("this is for todoId", formData.get("todoId")), formData.get("action") === "delete-todo" ? await db.subTodo.delete({
    where: {
      id: formData.get("todoId")
    }
  }) : formData.get("action") === "update-todo" ? await db.subTodo.update({
    where: {
      id: formData.get("todoId")
    },
    data: {
      title: formData.get("title")
    }
  }) : redirect3(`/${params.id}`);
}
var todoId_default = TodoId;

// app/routes/todoAdd.tsx
var todoAdd_exports = {};
__export(todoAdd_exports, {
  action: () => action5,
  default: () => AddTodo,
  loader: () => loader6
});
import { redirect as redirect4 } from "@remix-run/node";
import { Form as Form4, useLoaderData as useLoaderData5 } from "@remix-run/react";
import { Fragment as Fragment4, jsxDEV as jsxDEV8 } from "react/jsx-dev-runtime";
async function loader6({ request }) {
  let user = await authenticator.isAuthenticated(request, {
    failureRedirect: "/login"
  });
  return await db.category.findMany({
    where: {
      userId: user.id
    }
  });
}
async function action5({ request }) {
  let user = await authenticator.isAuthenticated(request, {
    failureRedirect: "/login"
  }), formData = await request.formData(), title = formData.get("title"), categoryId = formData.get("categoryId"), todo = await db.todo.create({
    data: {
      title,
      // categoryId: categoryId,
      user: { connect: { id: user.id } },
      category: { connect: { id: categoryId } }
    }
  });
  return redirect4("/todoList");
}
function AddTodo() {
  let data = useLoaderData5();
  return /* @__PURE__ */ jsxDEV8(Fragment4, { children: [
    /* @__PURE__ */ jsxDEV8("div", { className: "text-5xl font-extrabold text-center", children: /* @__PURE__ */ jsxDEV8("span", { className: "bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500", children: "What do you want to do today?" }, void 0, !1, {
      fileName: "app/routes/todoAdd.tsx",
      lineNumber: 48,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/routes/todoAdd.tsx",
      lineNumber: 47,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV8("hr", {}, void 0, !1, {
      fileName: "app/routes/todoAdd.tsx",
      lineNumber: 52,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV8("br", {}, void 0, !1, {
      fileName: "app/routes/todoAdd.tsx",
      lineNumber: 53,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV8("br", {}, void 0, !1, {
      fileName: "app/routes/todoAdd.tsx",
      lineNumber: 54,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV8("div", { className: "flex justify-center w-full h-80 ", children: /* @__PURE__ */ jsxDEV8(Form4, { action: "", method: "POST", className: "mt-12 ", children: [
      /* @__PURE__ */ jsxDEV8("div", { className: "flex items-center justify-around gap-5  ", children: [
        /* @__PURE__ */ jsxDEV8("div", { className: "title-hd  ", children: /* @__PURE__ */ jsxDEV8("h1", { className: "", children: "Title:" }, void 0, !1, {
          fileName: "app/routes/todoAdd.tsx",
          lineNumber: 59,
          columnNumber: 29
        }, this) }, void 0, !1, {
          fileName: "app/routes/todoAdd.tsx",
          lineNumber: 58,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ jsxDEV8("div", { children: /* @__PURE__ */ jsxDEV8("input", { type: "text", name: "title", className: "border-2 bg-grey-300 rounded-full h-12 w-80 pl-4", placeholder: "Create New Todo ", required: !0 }, void 0, !1, {
          fileName: "app/routes/todoAdd.tsx",
          lineNumber: 62,
          columnNumber: 29
        }, this) }, void 0, !1, {
          fileName: "app/routes/todoAdd.tsx",
          lineNumber: 61,
          columnNumber: 25
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/todoAdd.tsx",
        lineNumber: 57,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ jsxDEV8("br", {}, void 0, !1, {
        fileName: "app/routes/todoAdd.tsx",
        lineNumber: 65,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ jsxDEV8("ol", { className: "flex justify-center pl-12 ", children: /* @__PURE__ */ jsxDEV8("select", { name: "categoryId", id: "", className: "w-60 h-10 rounded-full text-center", children: [
        /* @__PURE__ */ jsxDEV8("option", { value: "", children: "Please Select Category" }, void 0, !1, {
          fileName: "app/routes/todoAdd.tsx",
          lineNumber: 68,
          columnNumber: 29
        }, this),
        data.map((category) => /* @__PURE__ */ jsxDEV8("option", { value: category.id, children: category.category_Name }, void 0, !1, {
          fileName: "app/routes/todoAdd.tsx",
          lineNumber: 72,
          columnNumber: 37
        }, this))
      ] }, void 0, !0, {
        fileName: "app/routes/todoAdd.tsx",
        lineNumber: 67,
        columnNumber: 25
      }, this) }, void 0, !1, {
        fileName: "app/routes/todoAdd.tsx",
        lineNumber: 66,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ jsxDEV8("div", { className: "flex items-center justify-center mt-12 ", children: /* @__PURE__ */ jsxDEV8("button", { type: "submit", className: "p-1 text-white bg-green-400 rounded-full m-auto w-40 h-12", children: "Add" }, void 0, !1, {
        fileName: "app/routes/todoAdd.tsx",
        lineNumber: 79,
        columnNumber: 25
      }, this) }, void 0, !1, {
        fileName: "app/routes/todoAdd.tsx",
        lineNumber: 78,
        columnNumber: 21
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/todoAdd.tsx",
      lineNumber: 56,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/routes/todoAdd.tsx",
      lineNumber: 55,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/todoAdd.tsx",
    lineNumber: 46,
    columnNumber: 9
  }, this);
}

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => Index,
  loader: () => loader7
});
import { useLoaderData as useLoaderData6 } from "@remix-run/react";
import { redirect as redirect5 } from "@remix-run/node";

// app/img/TodoImage.png
var TodoImage_default = "/build/_assets/TodoImage-33CUTPAA.png";

// app/routes/_index.tsx
import { Fragment as Fragment5, jsxDEV as jsxDEV9 } from "react/jsx-dev-runtime";
var loader7 = async ({ request }) => {
  let user = await authenticator.isAuthenticated(request, {
    failureRedirect: "/login"
  });
  return user || redirect5("/login"), user;
};
function Index() {
  let user = useLoaderData6();
  return /* @__PURE__ */ jsxDEV9(Fragment5, { children: user ? /* @__PURE__ */ jsxDEV9(Fragment5, { children: /* @__PURE__ */ jsxDEV9("img", { src: TodoImage_default, alt: "Image not founds", className: "todoImage" }, void 0, !1, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 25,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 24,
    columnNumber: 9
  }, this) : "" }, void 0, !1, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 22,
    columnNumber: 5
  }, this);
}

// app/routes/logout.ts
var logout_exports = {};
__export(logout_exports, {
  loader: () => loader8
});
import { redirect as redirect6 } from "@remix-run/node";
async function loader8({ request }) {
  let user = await authenticator.logout(request, { redirectTo: "/login" });
  return redirect6("/login", {
    headers: {
      "Set-Cookie": await destroySession(session)
    }
  });
}

// app/routes/search.tsx
var search_exports = {};
__export(search_exports, {
  default: () => search_default,
  loader: () => loader9
});
import { Form as Form5 } from "@remix-run/react";
import { useState as useState5 } from "react";
import { useLoaderData as useLoaderData7 } from "react-router";
import { Fragment as Fragment6, jsxDEV as jsxDEV10 } from "react/jsx-dev-runtime";
async function loader9({ request }) {
  let user = await authenticator.isAuthenticated(request, {
    failureRedirect: "/login"
  }), data = await db.todo.findMany({
    where: {
      userId: user.id
    },
    select: { id: !0, title: !0, createdAt: !0 },
    orderBy: { createdAt: "asc" }
  });
  return data || console.error("not having any todo at this user"), data;
}
var Search = () => {
  let todos = useLoaderData7(), [search, setSearch] = useState5(""), [newTodo, setNewTodo] = useState5([]);
  function handleChange(e) {
    setSearch(e.target.value.toLowerCase());
  }
  function handleClick() {
    if (console.log("Todos data:", todos), typeof todos == "object" && todos !== null) {
      let filteredTodos = Object.values(todos).filter((todo) => todo.title.includes(search));
      setNewTodo(filteredTodos);
    } else
      console.error("Todos data is not an object or is null");
  }
  return /* @__PURE__ */ jsxDEV10(Fragment6, { children: /* @__PURE__ */ jsxDEV10("div", { className: "mt-8 text-center", children: [
    /* @__PURE__ */ jsxDEV10(Form5, { children: [
      /* @__PURE__ */ jsxDEV10("div", { className: "text-6xl text-center", children: /* @__PURE__ */ jsxDEV10("span", { className: "bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500", children: "Search" }, void 0, !1, {
        fileName: "app/routes/search.tsx",
        lineNumber: 63,
        columnNumber: 25
      }, this) }, void 0, !1, {
        fileName: "app/routes/search.tsx",
        lineNumber: 62,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ jsxDEV10("div", { className: "search flex justify-center", children: [
        /* @__PURE__ */ jsxDEV10("input", { type: "search", name: "search", id: "", onChange: handleChange, className: "border  w-1/2 h-12 pl-6" }, void 0, !1, {
          fileName: "app/routes/search.tsx",
          lineNumber: 68,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ jsxDEV10("button", { type: "submit", onClick: handleClick, className: " h-12 w-32 bg-green-400", children: "Go" }, void 0, !1, {
          fileName: "app/routes/search.tsx",
          lineNumber: 69,
          columnNumber: 25
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/search.tsx",
        lineNumber: 67,
        columnNumber: 21
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/search.tsx",
      lineNumber: 60,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ jsxDEV10("ol", { className: "flex flex-col items-center", children: newTodo.map((todo) => /* @__PURE__ */ jsxDEV10("li", { className: "border-2 mt-6 w-96 h-12 rounded-full bg-rose-200", children: /* @__PURE__ */ jsxDEV10("div", { className: "pt-2 text-2xl", children: todo.title }, void 0, !1, {
      fileName: "app/routes/search.tsx",
      lineNumber: 75,
      columnNumber: 29
    }, this) }, todo.id, !1, {
      fileName: "app/routes/search.tsx",
      lineNumber: 74,
      columnNumber: 25
    }, this)) }, void 0, !1, {
      fileName: "app/routes/search.tsx",
      lineNumber: 72,
      columnNumber: 17
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/search.tsx",
    lineNumber: 59,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/routes/search.tsx",
    lineNumber: 58,
    columnNumber: 9
  }, this);
}, search_default = Search;

// app/routes/login.tsx
var login_exports = {};
__export(login_exports, {
  ErrorBoundary: () => ErrorBoundary,
  action: () => action6,
  default: () => login_default,
  loader: () => loader10
});
import { useState as useState6 } from "react";
import { Link as Link3 } from "@remix-run/react";
import { useActionData as useActionData2 } from "@remix-run/react";
import { isRouteErrorResponse, useRouteError as useRouteError2 } from "@remix-run/react";
import { jsxDEV as jsxDEV11 } from "react/jsx-dev-runtime";
function ErrorBoundary() {
  let error = useRouteError2();
  return isRouteErrorResponse(error) ? /* @__PURE__ */ jsxDEV11("div", { className: "w-full h-screen flex flex-col justify-center items-center", children: [
    /* @__PURE__ */ jsxDEV11("h1", { className: " font-bold text-5xl text-red-700", children: [
      error.status,
      " ",
      error.statusText
    ] }, void 0, !0, {
      fileName: "app/routes/login.tsx",
      lineNumber: 18,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV11("p", { className: "font-semibold text-xl", children: error.data.message }, void 0, !1, {
      fileName: "app/routes/login.tsx",
      lineNumber: 21,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV11(Link3, { to: "/login", className: "text-semibold", children: "try again" }, void 0, !1, {
      fileName: "app/routes/login.tsx",
      lineNumber: 23,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/login.tsx",
    lineNumber: 17,
    columnNumber: 7
  }, this) : error instanceof Error ? /* @__PURE__ */ jsxDEV11("div", { children: [
    /* @__PURE__ */ jsxDEV11("h1", { children: "Error" }, void 0, !1, {
      fileName: "app/routes/login.tsx",
      lineNumber: 31,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV11("p", { children: error.message }, void 0, !1, {
      fileName: "app/routes/login.tsx",
      lineNumber: 32,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV11("p", { children: "The stack trace is:" }, void 0, !1, {
      fileName: "app/routes/login.tsx",
      lineNumber: 33,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV11("pre", { children: error.stack }, void 0, !1, {
      fileName: "app/routes/login.tsx",
      lineNumber: 34,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/login.tsx",
    lineNumber: 30,
    columnNumber: 7
  }, this) : /* @__PURE__ */ jsxDEV11("h1", { children: "Unknown Error" }, void 0, !1, {
    fileName: "app/routes/login.tsx",
    lineNumber: 38,
    columnNumber: 12
  }, this);
}
var loader10 = async ({ request, params }) => {
  let user = await authenticator.isAuthenticated(request, {
    successRedirect: "/"
  });
  return console.log("this is params", params), user;
}, action6 = async ({ request }) => {
  let user = authenticator.authenticate("form", request, {
    successRedirect: "/",
    failureRedirect: "/register"
  });
  return user || { error: "You are not Registered..." };
}, Login = () => {
  let data = useActionData2(), [loading, setLoading] = useState6(!1);
  return /* @__PURE__ */ jsxDEV11("div", { children: [
    /* @__PURE__ */ jsxDEV11("h1", { className: "text-center font-semibold text-2xl mt-24 mb-5", children: "Login" }, void 0, !1, {
      fileName: "app/routes/login.tsx",
      lineNumber: 72,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV11("form", { method: "POST", className: "flex flex-col w-72 gap-2 m-auto", children: [
      /* @__PURE__ */ jsxDEV11(
        "input",
        {
          type: "email",
          name: "email",
          className: "bg-slate-100 p-2 rounded-xl",
          id: "",
          placeholder: "shivam@examle.com",
          required: !0
        },
        void 0,
        !1,
        {
          fileName: "app/routes/login.tsx",
          lineNumber: 74,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ jsxDEV11(
        "input",
        {
          type: "password",
          name: "password",
          className: "bg-slate-100 p-2 rounded-xl",
          id: "",
          placeholder: "password",
          required: !0
        },
        void 0,
        !1,
        {
          fileName: "app/routes/login.tsx",
          lineNumber: 83,
          columnNumber: 9
        },
        this
      ),
      loading ? /* @__PURE__ */ jsxDEV11("div", { role: "status", children: [
        /* @__PURE__ */ jsxDEV11(
          "svg",
          {
            "aria-hidden": "true",
            className: "w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600",
            viewBox: "0 0 100 101",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              /* @__PURE__ */ jsxDEV11(
                "path",
                {
                  d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",
                  fill: "currentColor"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/login.tsx",
                  lineNumber: 101,
                  columnNumber: 15
                },
                this
              ),
              /* @__PURE__ */ jsxDEV11(
                "path",
                {
                  d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",
                  fill: "currentFill"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/login.tsx",
                  lineNumber: 105,
                  columnNumber: 15
                },
                this
              )
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/routes/login.tsx",
            lineNumber: 94,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ jsxDEV11("span", { className: "sr-only", children: "Loading..." }, void 0, !1, {
          fileName: "app/routes/login.tsx",
          lineNumber: 110,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/login.tsx",
        lineNumber: 93,
        columnNumber: 11
      }, this) : /* @__PURE__ */ jsxDEV11("button", { className: "bg-black w-32 rounded-xl p-2 text-white font-semibold m-auto", children: "Login" }, void 0, !1, {
        fileName: "app/routes/login.tsx",
        lineNumber: 113,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/login.tsx",
      lineNumber: 73,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV11("h1", { className: "text-center text-zinc-500 mt-2", children: [
      "don't have an account?",
      /* @__PURE__ */ jsxDEV11(Link3, { to: "/register", children: /* @__PURE__ */ jsxDEV11("span", { className: "font-semibold ml-2 cursor-pointer text-black text-center", children: "Register" }, void 0, !1, {
        fileName: "app/routes/login.tsx",
        lineNumber: 121,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/login.tsx",
        lineNumber: 120,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/login.tsx",
      lineNumber: 118,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/login.tsx",
    lineNumber: 71,
    columnNumber: 5
  }, this);
}, login_default = Login;

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-WH6WRFEH.js", imports: ["/build/_shared/chunk-OAPPX4FA.js", "/build/_shared/chunk-53LESN4X.js", "/build/_shared/chunk-WEAPBHQG.js", "/build/_shared/chunk-7PHB3BFD.js", "/build/_shared/chunk-FDJG7ORA.js", "/build/_shared/chunk-JR22VO6P.js", "/build/_shared/chunk-CJ4MY3PQ.js", "/build/_shared/chunk-PZDJHGND.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-BOTQYEC5.js", imports: ["/build/_shared/chunk-FZ2UKIPG.js", "/build/_shared/chunk-STVP2I4H.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/$todoId": { id: "routes/$todoId", parentId: "root", path: ":todoId", index: void 0, caseSensitive: void 0, module: "/build/routes/$todoId-2A3DEOBP.js", imports: ["/build/_shared/chunk-I53UWI2S.js"], hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-SDSGVPT7.js", imports: ["/build/_shared/chunk-NBEH4DGX.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/catagory": { id: "routes/catagory", parentId: "root", path: "catagory", index: void 0, caseSensitive: void 0, module: "/build/routes/catagory-4OETYSHU.js", imports: ["/build/_shared/chunk-I53UWI2S.js"], hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/login": { id: "routes/login", parentId: "root", path: "login", index: void 0, caseSensitive: void 0, module: "/build/routes/login-4ZDCM7IT.js", imports: void 0, hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !0 }, "routes/logout": { id: "routes/logout", parentId: "root", path: "logout", index: void 0, caseSensitive: void 0, module: "/build/routes/logout-P6M3CFJF.js", imports: void 0, hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/register": { id: "routes/register", parentId: "root", path: "register", index: void 0, caseSensitive: void 0, module: "/build/routes/register-ZZ3GO353.js", imports: ["/build/_shared/chunk-NBEH4DGX.js", "/build/_shared/chunk-I53UWI2S.js"], hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/search": { id: "routes/search", parentId: "root", path: "search", index: void 0, caseSensitive: void 0, module: "/build/routes/search-HVU7VKWQ.js", imports: ["/build/_shared/chunk-I53UWI2S.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/todoAdd": { id: "routes/todoAdd", parentId: "root", path: "todoAdd", index: void 0, caseSensitive: void 0, module: "/build/routes/todoAdd-NXRFPCSM.js", imports: ["/build/_shared/chunk-NBEH4DGX.js", "/build/_shared/chunk-I53UWI2S.js"], hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/todoList": { id: "routes/todoList", parentId: "root", path: "todoList", index: void 0, caseSensitive: void 0, module: "/build/routes/todoList-36FAMLSC.js", imports: ["/build/_shared/chunk-I53UWI2S.js"], hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/todolist.$id": { id: "routes/todolist.$id", parentId: "root", path: "todolist/:id", index: void 0, caseSensitive: void 0, module: "/build/routes/todolist.$id-P5MY23QQ.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 } }, version: "4b8d00b8", hmr: { runtime: "/build/_shared/chunk-FDJG7ORA.js", timestamp: 1709641791923 }, url: "/build/manifest-4B8D00B8.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "development", assetsBuildDirectory = "public/build", future = { v3_fetcherPersist: !1, v3_relativeSplatPath: !1, v3_throwAbortReason: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/todolist.$id": {
    id: "routes/todolist.$id",
    parentId: "root",
    path: "todolist/:id",
    index: void 0,
    caseSensitive: void 0,
    module: todolist_id_exports
  },
  "routes/catagory": {
    id: "routes/catagory",
    parentId: "root",
    path: "catagory",
    index: void 0,
    caseSensitive: void 0,
    module: catagory_exports
  },
  "routes/register": {
    id: "routes/register",
    parentId: "root",
    path: "register",
    index: void 0,
    caseSensitive: void 0,
    module: register_exports
  },
  "routes/todoList": {
    id: "routes/todoList",
    parentId: "root",
    path: "todoList",
    index: void 0,
    caseSensitive: void 0,
    module: todoList_exports
  },
  "routes/$todoId": {
    id: "routes/$todoId",
    parentId: "root",
    path: ":todoId",
    index: void 0,
    caseSensitive: void 0,
    module: todoId_exports
  },
  "routes/todoAdd": {
    id: "routes/todoAdd",
    parentId: "root",
    path: "todoAdd",
    index: void 0,
    caseSensitive: void 0,
    module: todoAdd_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  },
  "routes/logout": {
    id: "routes/logout",
    parentId: "root",
    path: "logout",
    index: void 0,
    caseSensitive: void 0,
    module: logout_exports
  },
  "routes/search": {
    id: "routes/search",
    parentId: "root",
    path: "search",
    index: void 0,
    caseSensitive: void 0,
    module: search_exports
  },
  "routes/login": {
    id: "routes/login",
    parentId: "root",
    path: "login",
    index: void 0,
    caseSensitive: void 0,
    module: login_exports
  }
};
export {
  assets_manifest_default as assets,
  assetsBuildDirectory,
  entry,
  future,
  mode,
  publicPath,
  routes
};
//# sourceMappingURL=index.js.map
