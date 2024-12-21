/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";


const PrivateRoute = ({ children }) => {
    const { user, loadingUser } = useAuth();
    const location = useLocation()
    if (user) {
        return children
    }
    if (loadingUser) {
        return <div className="flex justify-center items-center min-h-screen"><span className="loading loading-infinity loading-lg"></span></div>
    }
    if (!user) {
        return <Navigate state={location.pathname} to='/login'></Navigate>;
    }
    return children;
};

export default PrivateRoute;