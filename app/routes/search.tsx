import { Form } from '@remix-run/react';
import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import { authenticator } from '~/utils/auth.server';
import { db } from '~/utils/db.server';


export async function loader({ request }) {
    const user = await authenticator.isAuthenticated(request, {
        failureRedirect: "/login"
    });

    let data = await db.todo.findMany({
        where: {
            userId: user.id,
        },
        select: { id: true, title: true, createdAt: true, },
        orderBy: { createdAt: 'asc' },

    })
    if (!data) {
        console.error('not having any todo at this user');

    }
    return data
}
const Search = () => {
    const todos = useLoaderData();
    const [search, setSearch] = useState('');
    const [newTodo, setNewTodo] = useState([]);

    function handleChange(e) {
        setSearch((e.target.value).toLowerCase());
    }

    function handleClick() {
        console.log("Todos data:", todos);

        // Check if todos is an object
        if (typeof todos === 'object' && todos !== null) {
            // Convert the object values to an array
            const todosArray = Object.values(todos);

            // Filter the todos array based on the search query
            let filteredTodos = todosArray.filter(todo => {
                return todo.title.includes(search);
            });

            // Set the filtered todos
            setNewTodo(filteredTodos);
        } else {
            console.error("Todos data is not an object or is null");
        }
    }


    return (
        <>
            <div className='mt-8 text-center'>
                <Form>

                    <div className="text-6xl text-center">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
                            Search
                        </span>
                    </div>
                    <div className="search flex justify-center">
                        <input type="search" name="search" id="" onChange={handleChange} className='border  w-1/2 h-12 pl-6' />
                        <button type="submit" onClick={handleClick} className=' h-12 w-32 bg-green-400'>Go</button>
                    </div>
                </Form>
                <ol className='flex flex-col items-center'>
                    {newTodo.map(todo => (
                        <li key={todo.id} className='border-2 mt-6 w-96 h-12 rounded-full bg-rose-200'>
                            <div className='pt-2 text-2xl'>
                                {todo.title}
                            </div>
                        </li>
                    ))}
                </ol>
            </div>
        </>
    );
}

export default Search;
