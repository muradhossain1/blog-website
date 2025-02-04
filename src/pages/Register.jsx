import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Lottie from "lottie-react";
import registerLottie from '../assets/lottie/register.json'
import toast from "react-hot-toast";


const Register = () => {
    const { createUser, updateProfileUser } = useAuth();
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;
        if (password.length < 6) {
            return setError('Password must contain at least 6 character')
        }
        if (!/[A-Z]/.test(password)) {
            return setError('Password must contain at least one uppercase letter')
        }
        if (!/[0-9]/.test(password)) {
            return setError('Password must contain at least one numeric character')
        }
        if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
            return setError('Password must contain at least one special character ')
        }
        createUser(email, password)
            .then(() => {
                toast.success('Successful your google account Register')
                updateProfileUser(name, photo);
                navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                setError(error.message)
            })
    }
    return (
        <div className="hero bg-base-200 min-h-screen my-6 rounded-xl">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center  lg:w-[30rem]">
                    <Lottie animationData={registerLottie}></Lottie>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mt-4 p-6">
                    <div>
                        <h1 className="text-3xl font-bold text-center">Register now!</h1>
                    </div>
                    <form onSubmit={handleRegister} className="">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-base font-semibold">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-base font-semibold">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-base font-semibold">Photo URL</span>
                            </label>
                            <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered" required />
                        </div>
                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text text-base font-semibold">Password</span>
                            </label>
                            <input type={showPassword ? 'text' : 'password'} name="password" placeholder="password" className="input input-bordered" required />
                            <button onClick={() => setShowPassword(!showPassword)} className="absolute top-[56px] right-4">
                                {
                                    showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                }
                            </button>
                        </div>
                        <div className="form-control mt-4">
                            <button className="w-full px-6 py-3 text-base text-white font-medium my-2 bg-purple-600 rounded-lg hover:bg-purple-700">Register</button>
                        </div>
                        {error && <p className="text-red-500 text-sm">{error}</p>}
                        <p className="text-lg font-semibold mt-2">Already have an account? please <Link to='/login' className="link text-purple-800">Login</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;