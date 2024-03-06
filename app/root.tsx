import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";

import stylesheet from "~/tailwind.css";
import HomeNavbar from "~/component/HomeNavbar";
import { LoaderFunctionArgs, redirect } from "@remix-run/node";
import { authenticator } from "~/utils/auth.server";
import type { MetaFunction } from "@remix-run/node";
import { db } from "./utils/db.server";
import { Toaster } from "react-hot-toast";

// import toast from "react-hot-toast";


export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};


export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];


export const loader = async ({ request }: LoaderFunctionArgs) => {
  const user = await authenticator.isAuthenticated(request);

  return user;
};


export default function App() {
  const user = useLoaderData();
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
       <Toaster
         position="top-center"
         reverseOrder={false}
       >

       </Toaster>
       {/* <div>
        <h1>tost</h1>
       </div> */}
        <HomeNavbar user={user} />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
