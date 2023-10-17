import {NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className= "py-8 bg-[#4c484868]">
            <NavLink to="/add-coffee"> Add Coffee</NavLink>
            <NavLink to="/sign-up"> SignUp</NavLink>
            <NavLink to="/Sign-in"> SignIn</NavLink>
            <NavLink to="/users"> Users</NavLink>
        </div>
    );
};

export default Navbar;