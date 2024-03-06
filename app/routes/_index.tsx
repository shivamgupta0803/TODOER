import {  useLoaderData } from "@remix-run/react";
import { LoaderFunctionArgs, redirect } from "@remix-run/node";
import { authenticator } from "~/utils/auth.server";
import homeImage from '~/img/TodoImage.png'


export const loader = async ({ request }: LoaderFunctionArgs) => {
  const user = await authenticator.isAuthenticated(request , {
    failureRedirect: "/login"
  });

  if(!user){
    redirect('/login')
  }
  return user;
};

export default function Index() {
  let user = useLoaderData();

  return (
    <>
      {user ?
        <>
        <img src={homeImage} alt="Image not founds" className="todoImage" />
        </>
        : ''}
    </>
  );
}
