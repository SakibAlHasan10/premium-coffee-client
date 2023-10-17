import Footer from "../../Section/Footer/Footer";
import Navbar from "../../Section/Navbar/Navbar";
import {Outlet} from "react-router-dom";

const Root = () => {
    return (
        <div className="text-center">
            <Navbar></Navbar>
            <Outlet/>
            <Footer></Footer>
        </div>
    );
};

export default Root;