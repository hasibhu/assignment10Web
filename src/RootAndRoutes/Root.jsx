import { Outlet } from "react-router-dom";
import Navbar from "../components/Shared/Navbar";
import Footer from "../components/Shared/Footer";

const Root = () => {
    return (
        <div className='m-auto max-w-screen-xl'>
          <Navbar></Navbar>
          <Outlet></Outlet>
        <Footer></Footer>
            
        </div>
    );
};

export default Root;