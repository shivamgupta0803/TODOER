import { ActionFunctionArgs } from "@remix-run/node";
import { Form, redirect, useLoaderData, useSubmit } from "@remix-run/react";
import { useState } from "react";
import { db } from "~/utils/db.server";
import { Link } from "@remix-run/react";
import { authenticator } from "~/utils/auth.server";
import toast from "react-hot-toast";

export async function loader({ params, request }) {
    const user = await authenticator.isAuthenticated(request, {
        failureRedirect: "/login"
    });
    let data = await db.todo.findMany({
        where: {
            userId: user.id as string
        },
        take: 20,
        select: { id: true, title: true, createdAt: true, category: true, status: true, },
    })
    return { data, todoId: params.todoId }
}

export async function action({ request }: ActionFunctionArgs) {
    const user = await authenticator.isAuthenticated(request, {
        failureRedirect: "/login"
    });
    const formData = await request.formData();
    const todoId = formData.get('todoId');
    if (formData.get('action') === 'delete-todo') {
        return await db.todo.delete({
            where: {
                id: formData.get('todoId') as string,
            }
        })
        toast.error("deleted")
    } else if (formData.get('action') === 'update-todo') {
        return await db.todo.update({
            where: {
                id: formData.get('todoId') as string,
            },
            data: {
                title: formData.get('title') as string
            }
        })
    } else if (formData.get('action') === 'change-status') {
        await db.todo.update({
            where: {
                id: formData.get('todoId'),
            },
            data: {
                status: formData.get('status') as string
            }
        })
        return redirect('/todoList')

    } else if (formData.get('action') === 'update-sub-todo') {
        
        return await db.subTodo.create({
            data: {
                title: formData.get('title') as string,
                todo: { connect: { id: todoId } },
                user: { connect: { id: user.id } },
            }
        })
    } else if (formData.get('action') === 'deleteAll') {
        console.log('DeleteAll runs...');

        const arr = formData.get('value').split(',')
        console.log(' this is arr', arr)
        const subtodosPromises = arr.map((b) => {
            return db.subTodo.deleteMany({
                where: {
                    todoId: b
                }
            })
        })

        await Promise.all(subtodosPromises)

        const arrPromises = arr.map((a) => {
            return db.todo.delete({
                where: {
                    id: a
                }
            });
        })

        return await Promise.all(arrPromises)
    }
    return redirect('/todos')
}


export default function Todos() {
    let { data: todos, todoId } = useLoaderData<typeof loader>();
    const submit = useSubmit()
    const [isEdit, setIsEdit] = useState("")
    const [subTodo, setSubTodo] = useState('')
    const [arr, setArr] = useState([]);
    let [selectStatus, setSelectStatus] = useState('All')
    const [selectedItems, setSelectedItems] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    let [favourite, setFavourite] = useState([]);
    let [showFavIcon, setShowFavIcon] = useState(false);
    let [showFav, setShowFav] = useState(false);
    const [number, setNumber] = useState(5);
    const [favId, setFavId] = useState('');






    // ################ pegination ###############



    const handleSubmit = (event) => {
        event.preventDefault();
        // Do something with the submitted number
        console.log('Submitted number:', number);
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




    // ################ end pegination ###############





    function handleselectedItem(itemId: any) {
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
            const value = records.map((todo) => todo.id);
            console.log("this is the value of array", value)
            setSelectedItems(value);
        }

    }

    function handleChangeCat(status) {
        console.log('this is status', status)
        setSelectStatus(status)
    }
    console.log('this is selectStatus', selectStatus)



    function handleClick() {
        submit(
            { action: 'deleteAll', value: value, todoId: todoId },
            { navigate: false, method: "post" })
        setSelectedItems([])
    }





    // favourite

    // function handlefavourite(data) {

    //     // const index = favourite.findIndex((f) => f.id == data.id)
    //     // if (index != -1) {
    //     //     favourite.splice(index, 1)
    //     //     records = [...favourite]
    //     //     setShowFavIcon(false); // Set showFavIcon to false because the item is removed from favorites
    //     //     toast.error("Removed From Favourite");
    //     // }
    //     // else {
    //     //     setFavourite((prevFav) => [...prevFav, data]);
    //     //     setShowFavIcon(true); // Set showFavIcon to true because the item is added to favorites
    //     //     toast.success('Added Favourite');
    //     // }



    //     const index = favourite.findIndex((f) => f.id == data.id);
    // if (index !== -1) {
    //     // If item is already in favorites, remove it
    //     favourite.splice(index, 1);
    //     records = [...favourite];
    //     setShowFavIcon(false); 
    // } else {
    //     // If item is not in favorites, add it
    //     setFavourite((prevFav) => [...prevFav, data]);
    //     setShowFavIcon(true); 
    // }
    // }
    // console.log(showFavIcon);











    function handlefavourite(data) {
        console.log("clicked")

        const index = favourite.findIndex((f) => f == data.id);
        if (index !== -1) {
            // If item is already in favorites, remove it
            favourite.splice(index, 1);
            records = [...favourite];
            setFavourite([...favourite]);
            toast.error('Removed favourite');
        } else {
            // If item is not in favorites, add it
            setFavourite((prevFav) => [...prevFav, data.id]);
            toast.success('Added favourite');
        }
    }











    if (showFav) {

        records = records.filter((r) => favourite.includes(r.id))

    }
    else {
        records = todos.slice(firstIndex, lastIndex)
    }



    if (selectStatus === 'All') {
        records = records;
    }
    else {
        records = records.filter((todo) => selectStatus === todo.status).map((todo) => {
            return todo;
        })
    }
    const deleteTodoData = todos.map((todo) => todo);


    function deleteData(id: any) {
    }


    // modal section

    const [isOpen, setIsOpen] = useState(false);
    const toggleModal = () => {
        setIsOpen(!isOpen);
    };

    // end modal section




    return (
        <>

            <div className=""><br />
                <h1 className="text-3xl text-center">Todo Lists...</h1><hr /> <br />
                <div className="flex justify-center">

                    {/* delete ALL */}
                    <div className="search flex justify-center gap-5">
                        <p className="flex items-center gap-2 bg-yellow-200 rounded-full pl-4 w-36 h-8">
                            <input type="checkbox" onChange={handleSelectAll} />  {selectedItems.length === value.length ? 'Deselect All' : 'Select All'}
                        </p>

                        <button type="submit" onClick={handleClick} className="border-2 w-36 h-8 rounded-full bg-green-400">DeleteAll</button>  <br /><br />
                    </div>

                    {/* end delete all */}


                    {/* catagory select page */}

                    <div className="status-box flex gap-2 justify-end ml-2 m-2">

                        <input type="radio" name="status" checked={selectStatus == 'All'} onChange={() => handleChangeCat("All")} />All &nbsp;&nbsp;&nbsp;
                        <input type="radio" name="status" checked={selectStatus == 'pending'} onChange={() => handleChangeCat("pending")} />Pending &nbsp;&nbsp;&nbsp;
                        <input type="radio" name="status" checked={selectStatus == 'completed'} onChange={() => handleChangeCat("completed")} />Completed &nbsp;&nbsp;&nbsp;
                        <input type="radio" name="status" checked={selectStatus == 'on_hold'} onChange={() => handleChangeCat("on_hold")} />On Hold

                    </div>
                    {/* end category select page */}

                </div>


                <ol className="flex flex-col items-center">
                    {
                        records?.map((data) => (
                            <>
                                <li key={data.id} className={`flex justify-around rounded-full m-4 bg-rose-100 w-2/3  ${data.status === 'pending' ? 'bg-yellow-200' : (data.status === 'completed' ? 'bg-emerald-400' : 'bg-red-300')} `}>

                                    {/* check box section */}

                                    <Form method="POST" className="flex justify-items-start" onChange={() => {
                                        value.push(data.id)
                                    }}>
                                        <input type="hidden" name="todoId" value={data.id} />
                                        <input type="hidden" name="action" value={`deleteAll`} />
                                        <input type="checkbox" name="checkbox" id="" checked={selectedItems.includes(data.id)} onChange={() => handleselectedItem(data.id)} />
                                    </Form>


                                    {/* end checkbox */}

                                    <Link className=" text-2xl mt-2" to={`/${data.id}`}>
                                        {(data.title)}<br />
                                    </Link>

                                    <div className="flex items-center">
                                        <p className="w-4 "><svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 3" viewBox="0 0 32 32" id="category"><polygon fill="none" stroke="#0832ff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" points="4.48 15.38 17.62 28.52 27.52 18.62 14.38 5.48 5.19 6.19 4.48 15.38"></polygon><polygon fill="#0832ff" points="25.96 17.06 16.06 26.96 17.44 28.44 27.44 18.44 25.96 17.06"></polygon><line x1="24.83" x2="14.93" y1="15.93" y2="25.83" fill="none" stroke="#0832ff" stroke-linecap="round" stroke-miterlimit="10"></line><circle cx="10" cy="11" r="1.5" fill="#0832ff"></circle></svg>
                                        </p>
                                        <p className="category-name">
                                            {data.category.category_Name}
                                        </p>
                                    </div>


                                    <div className="flex gap-2 items-center justify-end">


                                        <Form method="POST" onChange={(e) => {
                                            e.preventDefault()

                                            submit(e.currentTarget, { navigate: false, method: "post" })
                                        }}>
                                            <input type="hidden" name="todoId" value={data.id} />
                                            <input type="hidden" name="action" value={`change-status`} />
                                            <select name="status" id="" value={data.status} className="mr-2">
                                                <option value="pending">pending</option>
                                                <option value="on_hold">on_hold</option>
                                                <option value="completed">completed</option>
                                            </select>

                                        </Form>

                                        {isEdit == data.id ?
                                            <Form method="POST" onSubmit={(e) => {
                                                e.preventDefault()

                                                submit(e.currentTarget, { navigate: false, method: "post" })
                                                setIsEdit("")
                                            }}>
                                                <p className="edit-input border-2">
                                                    <input type="text" name="title" required className="border-hidden" />
                                                </p>
                                                <input type="hidden" name="todoId" value={data.id} />
                                                <input type="hidden" name="action" value={'update-todo'} />
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
                                                setIsEdit(data.id)
                                            }}
                                                className=" w-4 rounded-lg"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z" /></svg></button>
                                        }


                                        <div>
                                            {/* Button to toggle modal */}
                                            <Form method="POST" onClick={(e) => { deleteData(data.id) }}>
                                                <input type="hidden" name="todoId" value={data.id} />
                                                <button type="submit" name="action" value={"delete-todo"} className=" w-4 rounded-lg" onClick={toggleModal} ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z" /></svg></button>
                                            </Form>

                                            {/* Modal */}
                                            {isOpen && (
                                                <div className="fixed inset-0 z-50 flex items-center justify-center ">
                                                    <div className="bg-red rounded-lg p-8 border-2 bg-rose-200">
                                                        <h2 className="text-xl font-bold mb-4">Delete</h2>
                                                        <p className="mb-4">This is the todo content.
                                                        <br />{'->  '+data.title}</p>
                                                        <button onClick={toggleModal} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                                            Delete Todo
                                                        </button>
                                                    </div>
                                                </div>
                                            )}
                                        </div>

                                        {/* end modal */}



                                        {/* sub todo section  */}


                                        {subTodo == data.id ?
                                            <Form method="POST" onSubmit={(e) => {
                                                e.preventDefault()

                                                submit(e.currentTarget, { navigate: false, method: "post" })
                                                setSubTodo("")
                                            }}>
                                                <p className="edit-input border-2">
                                                    <input type="text" name="title" required className="border-hidden" />
                                                </p>
                                                <input type="hidden" name="todoId" value={data.id} />
                                                <input type="hidden" name="action" value={'update-sub-todo'} />
                                                <div className="save_cancel grid grid-cols-2 divide-x">
                                                    <button type="submit" className="border-2 bg-emerald-500 text-white">Add subTodo</button>
                                                    <button onClick={() => {
                                                        setSubTodo("")
                                                    }} className="border-2 bg-red-600 text-white"
                                                    >Cancel</button>
                                                </div>
                                            </Form>
                                            :
                                            <button onClick={() => {
                                                setSubTodo(data.id)
                                            }}
                                                className=" w-4 rounded-lg"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" /></svg></button>

                                        }


                                        {/* end  */}



                                        {/* {
                                            favourite == data.id ? */}

                                        <button onClick={() => handlefavourite(data)}>
                                            {
                                                favourite.includes(data.id, 0) ? <span >💕</span> : <span >❤️</span>
                                            }
                                        </button>

                                        {/* :  ''
                                                }  */}
                                        <Link to={`/${data.id}`}>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-8 h-8"><path d="M217.9 105.9L340.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L217.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1L32 320c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM352 416l64 0c17.7 0 32-14.3 32-32l0-256c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0c53 0 96 43 96 96l0 256c0 53-43 96-96 96l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z" /></svg>
                                        </Link>
                                    </div>
                                </li >
                            </>
                        ))
                    }
                </ol>



                <div className="pegination-footer  mt-2">
                    <ul className="pegination flex justify-center flex-row gap-4 ">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className="w-8 h-8" onClick={(e) => { setShowFav((prev) => !prev) }}><path d="M0 48C0 21.5 21.5 0 48 0l0 48V441.4l130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4V48H48V0H336c26.5 0 48 21.5 48 48V488c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488V48z" /></svg>
                        <Form onSubmit={handleSubmit} className="flex flex-row justify-center">
                            <label htmlFor="numberInput" className="mt-1">Records Per Page:</label>
                            <input
                                type="number"
                                id="numberInput"
                                value={number}
                                onChange={handleChange}
                                className="border border-gray-300 rounded px-3 py-1 mb-4 w-16"
                                placeholder="Enter a number"
                                required
                            />
                        </Form>
                        <p>
                            <li className="hover:bg-violet-600 rounded-full w-12 flex justify-center"><Link onClick={prePage}>Prev</Link></li>
                        </p>
                        {
                            numbers.map((n, i) => (
                                <span key={i} className="hover:bg-violet-600 rounded-full flex justify-center">
                                    <Link onClick={() => changeCurrentPage(n)}>{n}</Link>
                                </span>
                            ))
                        }
                        <p>
                            <li className="hover:bg-violet-600 rounded-full w-12 flex justify-center"><Link onClick={nextPage}>Next</Link></li>
                        </p>
                    </ul>
                </div>
            </div >
        </>
    )
}


// ##################################################  END ################################################
