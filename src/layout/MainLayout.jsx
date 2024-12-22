import { Outlet } from "react-router-dom";
import Navber from "../Components/Navber";


const MainLayout = () => {
    return (
        <div>
            {/* Navbar */}
            <Navber />
            {/* Outlet */}
            <div className='min-h-[calc(100vh-306px)] p-4 md:px-10 lg:px-20'>
                <Outlet />
            </div>
            {/* Footer */}
            {/* <Footer /> */}
        </div>
    );
};

export default MainLayout;
