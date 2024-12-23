import { Outlet } from "react-router-dom";
import Navber from "../Components/Navber";
import Footer from "../Components/Footer";


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
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default MainLayout;
