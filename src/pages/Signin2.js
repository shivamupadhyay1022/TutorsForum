import React, { useState, useEffect } from "react";
import { Button, Label, TextInput, Checkbox, Card } from "flowbite-react";
import { HiMail } from 'react-icons/hi';
import { signInWithEmailAndPassword, } from "firebase/auth";
import { auth } from "../firebase";
import styles from "../style";
import { NavLink } from "react-router-dom";
import { Link, useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from "react-toastify";
import { useFormik } from 'formik';
import { usernameValidate } from '../helper/validate'
import { useAuthStore } from '../store/store.js'
import { type } from "@testing-library/user-event/dist/type/index.js";
import "../ReactToastify.css";

function Signin2() {

    const navigate = useNavigate();
    const setUsername = useAuthStore(state => state.setUsername);
    const username = useAuthStore(state => state.auth.Username);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState(null);
    const errorCode = null
    let disperror = null
    const check = () => {
        if (global.stat === 400) {
            return "User Exists"
        } else {
            console.log(global.stat)
            return "Could not register please"
        }
    }

    function onRegister() {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user);
                toast.success(user.email+' signed in', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode);
                toast.error(errorCode, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            });
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        onRegister();
    };

    return (
        <div class="h-screen md:flex">

            <ToastContainer />

            <div
                class="relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-blue-800 to-purple-700 i justify-around items-center hidden">
                <div>
                    <h1 class="text-white font-bold text-4xl font-sans">TutorsForum</h1>
                    <p class="text-white mt-1">All your tutotors need at your fingerpoint</p>
                    <button type="submit" class="block w-28 bg-white text-indigo-800 mt-4 py-2 rounded-2xl font-bold mb-2">Read More</button>
                </div>
                <div class="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
                <div class="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
                <div class="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
                <div class="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
            </div>
            <div class="flex h-full md:w-1/2 justify-center py-10 items-center bg-white">
                <div className="flex items-center justify-center p-12">

                    <div className="mx-auto w-full min-w-[350px]">
                        <h1 class="mb-4 text-2xl font-extrabold text-gray-900 dark:text-white md:text-4xl lg:text-5xl">
                            <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-purple-700">Sign</span>
                            In
                        </h1>
                        <form className="signupForm" onSubmit={handleSubmit}>
                            <div className="mb-5 w-full mx-auto">
                                <div className="mb-3 block text-base font-medium text-[#07074D]">
                                    <Label
                                        htmlFor="username"
                                        value="Email"
                                    />
                                </div>
                                <TextInput
                                    id="username"
                                    placeholder="example123@gmail.com"
                                    required
                                    onChange={(e) => setEmail(e.target.value)}
                                    rightIcon={HiMail}
                                    type="username"
                                />
                            </div>
                            <div className="mb-5 w-full mx-auto">
                                <div className="mb-3 block text-base font-medium text-[#07074D]">
                                    <Label
                                        htmlFor="username"
                                        value="Password"
                                    />
                                </div>
                                <TextInput
                                    id="username"
                                    placeholder="password"
                                    required
                                    onChange={(e) => setPassword(e.target.value)}
                                    rightIcon={HiMail}
                                    type="username"
                                />
                            </div>

                            <div
                                className="flex max-w-md flex-col gap-4"
                                id="checkbox">

                                <div className="flex items-center gap-2 mb-5">
                                    <Checkbox
                                        defaultChecked
                                        id="accept"
                                    />
                                    <Label
                                        className="flex"
                                        htmlFor="agree"
                                    >
                                        <p>
                                            Keep me logged in
                                        </p>
                                        <a
                                            className="text-cyan-600 pl-1 hover:underline dark:text-cyan-500"
                                            href="/termsandconditions"
                                        >
                                            <p>
                                                {" "}terms and conditions
                                            </p>
                                        </a>
                                    </Label>
                                </div>
                            </div>

                            <div>
                                <button
                                    className={`w-full hover:shadow-htmlForm rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none`}
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Signin2