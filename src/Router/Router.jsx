import {createBrowserRouter,} from "react-router-dom";
import Root from "../Pages/Root/Root";
import AddCoffee from "../Pages/AddCoffee/AddCoffee";
import Home from "../Pages/Home/Home";
import Update from "../Pages/Update/Update";
import Signup from "../Pages/SignUp/Signup";
import SignIn from "../Pages/SignIn/SignIn";
import Users from "../Pages/Users/Users";
const router = createBrowserRouter([
{
    path: '/',
    element: <Root/>,
    children:[
        {
            path: '/',
            loader: ()=> fetch('https://premium-coffee-sever.vercel.app/coffees'),
            element: <Home/>
        },
        {
            path: "/add-coffee",
            element: <AddCoffee/>
        },
        {
            path: '/update/:id',
            loader: ({params})=> fetch(`https://premium-coffee-sever.vercel.app/coffees/${params.id}`),
            element: <Update/>
        },
        {
            path: '/sign-up',
            element: <Signup></Signup>
        },
        {
            path: '/sign-in',
            element: <SignIn></SignIn>
        },
        {
            path: '/users',
            element: <Users></Users>,
            loader: ()=>fetch('https://premium-coffee-sever.vercel.app/users')
        }
    ]
}
])

export default router;