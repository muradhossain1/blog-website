import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useState } from "react";


const Login = () => {
    const { loginUser, loginWithGoogle } = useAuth()
    const [error, setError] = useState('')

    const handleLogin = e => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;

        loginUser(email, password)
            .then((result) => {
                console.log(result.user)
                // toast.success('Successful your account Login', {
                //     position: "top-center",
                // })
                // navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                setError(error.message)
                // toast.error("Authentication did't match", {
                //     position: "top-center"
                // })
            })
    };

    const handleLoginGoogle = () => {
        loginWithGoogle()
        .then((result) => {
            console.log(result.user)
            // toast.success('Successful your google account Login',{
            //     position: "top-center",
            // })
            // navigate(location?.state ? location.state : '/')
        })
        .catch(err => {
            setError(err.message)
        })
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mt-4">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-base font-semibold">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-base font-semibold">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label ">
                                <a href="#" className="label-text-alt link link-hover text-base font-semibold">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-2">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        {error && <p className="text-red-500 text-sm">{error}</p>}
                        <p className="text-lg font-semibold mt-2">New to this website? please <Link to='/register' className="link text-blue-800">Register</Link></p>
                    </form>
                    <button onClick={handleLoginGoogle} className="btn btn-primary mx-8 mb-8">
                        <FaGoogle></FaGoogle> Login With Google
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;