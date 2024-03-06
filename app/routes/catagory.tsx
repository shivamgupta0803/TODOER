import { Form, useLoaderData } from "@remix-run/react"
import { useState } from "react";
import { db } from "~/utils/db.server";
import { useSubmit } from "@remix-run/react";
import { ActionFunctionArgs } from "@remix-run/node";
import { authenticator } from "~/utils/auth.server";



export async function loader({request}) {
    const user = await authenticator.isAuthenticated(request, {
        failureRedirect: "/login"
    });
    let data = await db.category.findMany({
        where: {
            userId:user.id
        }
    })
    return data
}

export async function action({
    request,
}: ActionFunctionArgs) {
    const user = await authenticator.isAuthenticated(request, {
        failureRedirect: "/login"
    });
    const formData = await request.formData();
    const category_Name = formData.get('category_Name');
    if (formData.get('action') === 'category') {
        const category = await db.category.create({
            data: {
                category_Name: category_Name,
                userId : user.id,
            }
        })
        return category
    } else if (formData.get('action') === 'delete-category') {
        return await db.category.delete({
            where: {
                id: formData.get('todoId') as string
            }
        })
    } else if (formData.get('action') === 'update-category') {
        return await db.category.update({
            where: {
                id: formData.get('todoId') as string
            },
            data: {
                category_Name: formData.get('category_Name') as string
            }
        })
    }
    return null;
}



export default function Category() {
    const data = useLoaderData<typeof loader>();
    const [state1, setState1] = useState('');
    const submit = useSubmit()
    const [isEdit, setIsEdit] = useState("")

    function handleclick1(e) {
        setState1(e.target.value)
    }

    function handleSubmit(e) {
        setState1('')
    }


    return (

        <div className="text-center mt-4">
            <h1 className="text-3xl ">Add your category here..</h1><hr />

            <Form action='' method="POST" className='mt-12' onSubmit={handleSubmit}>
                <div className="flex items-center justify-around">
                    <input type="text" name='category_Name' value={state1} onChange={(e) => handleclick1(e)} id="categoryInput1" className='border-2 bg-grey-300 rounded-full h-12 w-80 pl-4' placeholder='Create category_Name' required />
                    <input type="hidden" name="action" value={'category'} />
                </div>

                <div className='flex items-center justify-center mt-12 '>
                    <input type="submit" value={'Add category'} className="p-1 text-white bg-green-400 rounded-full m-auto w-40 h-12" />
                </div>
            </Form><br />
            <ol className="flex justify-center flex-col items-center">
                {
                    data.map((category) => (
                        <li key={category.id} className="flex justify-center gap-4 border-2 bg-lime-600 rounded-full px-4 py-2" >
                            {category.category_Name}

                            {isEdit == category.id ?
                                <Form method="POST" onSubmit={(e) => {
                                    e.preventDefault()

                                    submit(e.currentTarget, { navigate: false, method: "post" })
                                    setIsEdit("")
                                }}>
                                    <p className="edit-input">
                                        <input type="text" name="category_Name" required className="border-hidden" />
                                    </p>
                                    <input type="hidden" name="todoId" value={category.id} />
                                    <input type="hidden" name="action" value={'update-category'} />
                                    <div className="save_cancel grid grid-cols-2 divide-x">
                                        <button type="submit" className="border-2 bg-emerald-500 text-white">save</button>
                                        <button onClick={() => {
                                            setIsEdit("")
                                        }} className="border-2 bg-red-600 text-white"
                                        >cancel</button>
                                    </div>
                                </Form>
                                :
                                <button onClick={() => {
                                    setIsEdit(category.id)
                                }}
                                    className=" w-4 rounded-lg"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z" /></svg></button>
                            }
                            <Form method="POST">
                                <input type="hidden" name="todoId" value={category.id} />
                                <button type="submit" name="action" value={"delete-category"} className=" w-4 rounded-lg"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z" /></svg></button>
                            </Form>
                        </li>
                    ))
                }

            </ol>
        </div>
    )
}

