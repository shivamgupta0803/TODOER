import { NavLink } from "@remix-run/react"



const Navbar = ({ user }:any) => {

  return (
    <>
      {user ?
        <nav>
          <div className=" flex flex-wrap items-center justify-between mx-auto p-2 bg-pink-200">
            <div className="text-5xl font-extrabold flex justify-start ">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
                Todo App
              </span>
            </div>
            <div className=" w-full md:block md:w-auto" id="navbar-default">
              <ul className="font-medium flex flex-col p-4 md:p-0 mt-2 bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse bg-transparent">
                <li>
                  <NavLink to={'/'} className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home</NavLink>
                </li>
                <li>
                  <NavLink to={'/todoList'} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">TodoLists</NavLink>
                </li>
                <li>
                  <NavLink to={'/catagory'} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">AddCatagory</NavLink>
                </li>
                <li>
                  <NavLink to={'/todoAdd'} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">AddTodo</NavLink>
                </li>
                <li>
                  <NavLink to={'/search'} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Search</NavLink>
                </li>
                <li>
                  <NavLink to={'http://localhost:5555'} target="__blank" className="rounded-lg px-3 py-2 text-slate-600 font-medium hover:bg-slate-100 hover:text-slate-900">Report</NavLink>
                </li>
                <li>
                  <NavLink to={'/logout'} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent border-dotted border-2 border-white-600 ">Logout</NavLink>
                </li>
                <select name="profile" id="" style={{background:'none'}}>
                  <option value="">profile</option>
                  <option value=''>{user.name}</option>
                </select>
              </ul>
            </div>
          </div>
        </nav>
        :
        <nav className="bg-white border-gray-200 ">
          <div className="flex flex-wrap items-center justify-between mx-auto p-2 bg-pink-200">
            <div className="text-5xl font-extrabold flex justify-start ">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
                Todo App
              </span>
            </div>
            <div className="hidden w-full md:block md:w-auto" id="navbar-default">
              <ul className="font-medium flex flex-col p-4 md:p-0 mt-4  bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse  bg-transparent">
                <li>
                  <NavLink to={'/login'} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Login</NavLink>
                </li>
                <li>
                  <NavLink to={'/register'} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Register</NavLink>
                </li>
                
              </ul>
            </div>
          </div>
        </nav>


      }




      {/*         
        <div classNameName="">
          {[
            ['Home', '/'],
            ['Todo List', '/todoLists'],
            ['Add Todo', '/todoAdd'],
            ['Reports', 'http://localhost:5555'],
            ['Logout', '/logout']
          ].map(([title, url]) => (
            <NavLink to={url} target={`${title == "Reports" ? "__blank" : ""}`} classNameName="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">{title}</NavLink>
          ))}
        </div> */}


    </>
  )
}

export default Navbar
