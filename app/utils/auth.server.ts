import { Authenticator, AuthorizationError } from "remix-auth";
import { sessionStorage } from "./session.server";
import { FormStrategy } from "remix-auth-form";
import bcrypt from "bcryptjs";
import { db } from "~/utils/db.server";

const authenticator = new Authenticator(sessionStorage);

const formStrategy = new FormStrategy(async ({ form }) => {
  const name = form.get("name");
  const email = form.get("email");
  const password = form.get("password");

  const user = await db.user.findUnique({
    where: {
      email: email as string,
    },
  });

  if (!user) {
    throw new AuthorizationError("user don't exist");
  }
  const passwordMatch = await bcrypt.compare(
    password as string,
    user.password as string
  );

  if (!passwordMatch) throw new AuthorizationError("invalid credentials");

  return user;
});

authenticator.use(formStrategy, "form");

export { authenticator };