import { redirect } from "@remix-run/node";
import { Session } from "inspector";
import { authenticator } from "~/utils/auth.server"
import { destroySession } from "~/utils/session.server";


export async function loader({request}){
    const user = await authenticator.logout(request , {redirectTo: "/login"})
    return redirect("/login", {
        headers: {
          "Set-Cookie": await destroySession(session),
        },
      });
}

