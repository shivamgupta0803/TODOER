import { redirect } from '@remix-run/node';
import { db } from '~/utils/db.server';
import { Form, useLoaderData, } from '@remix-run/react';
import { authenticator } from '~/utils/auth.server';


export async function loader({request}) {
    const user = await authenticator.isAuthenticated(request, {
        failureRedirect: "/login"
    });
    let data = await db.category.findMany({
        where:{
            userId:user.id
        }
    })
    return data
}


export async function action({ request }) {
    const user = await authenticator.isAuthenticated(request, {
        failureRedirect: "/login"
    });
    const formData = await request.formData();
    const title = formData.get('title')
    const categoryId = formData.get('categoryId')
    const todo = await db.todo.create({
        data: {
            title: title,
            // categoryId: categoryId,
            user: { connect: { id: user.id } },
            category: { connect: { id: categoryId } }
        }
    })
    return redirect(`/todoList`);
}


export default function AddTodo() {
    const data = useLoaderData<typeof loader>();




    return (
        <>
            <div className="text-5xl font-extrabold text-center">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
                    What do you want to do today?
                </span>
            </div>
            <hr />
            <br />
            <br />
            <div className="flex justify-center w-full h-80 ">
                <Form action='' method="POST" className='mt-12 '>
                    <div className="flex items-center justify-around gap-5  ">
                        <div className="title-hd  ">
                            <h1 className=''>Title:</h1>
                        </div>
                        <div>
                            <input type="text" name='title' className='border-2 bg-grey-300 rounded-full h-12 w-80 pl-4' placeholder='Create New Todo ' required />
                        </div>
                    </div>
                    <br />
                    <ol className='flex justify-center pl-12 '>
                        <select name="categoryId" id="" className='w-60 h-10 rounded-full text-center'>
                            <option value="">Please Select Category</option>

                            {
                                data.map((category) => (
                                    <option value={category.id}>{category.category_Name}</option>
                                ))
                            }

                        </select>
                    </ol>
                    <div className='flex items-center justify-center mt-12 '>
                        <button type='submit' className="p-1 text-white bg-green-400 rounded-full m-auto w-40 h-12">Add</button>
                    </div>
                </Form>
            </div>
        </>
    )
}


