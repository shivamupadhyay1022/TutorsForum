        import React, { useState, useContext, useEffect } from "react";
        import { auth, db } from "../firebase";
        import { NavLink } from "react-router-dom";
        import { signOut } from "firebase/auth";
        import { useNavigate } from "react-router-dom";
        import { ref, onValue } from "firebase/database";
        import styles from "../style";
        import Popup from 'reactjs-popup';

        import { AuthContext } from "../components/AuthProvider";
        import { nitish, profile_male, logo } from "../assets";



        function Dashboard2() {
        const { currentUser } = useContext(AuthContext);
        const [username, setUsername] = useState("");
        const [toggle, setToggle] = useState(false);

        const navigate = useNavigate();
        useEffect(() => {
            if (currentUser) {
            const starCountRef = ref(db, "users/" + currentUser.uid);
            onValue(starCountRef, (snapshot) => {
                if (snapshot.exists()) {
                var data = snapshot.val();
                setUsername(data.firstName + " " + data.lastName);
                }
            });
            }
        }, [currentUser]);

        const clickLogin = () => {
            if (currentUser) {
            signOut(auth);
            } else {
            navigate("/signin");
            }
        };



        return (
            <div>
            <div class={`${!toggle ? "sm:w-4/12" : "flex  "} ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-white transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]`}>
            <div>
                <div class="-mx-6 px-6 py-4 flex flex-wrap">
                        <img src={logo} class="h-6 sm:h-9" alt="TutorsForum logo"/>
                        <span className=" ml-2 text-xl font-semibold dark:text-white">
                        TutorsForum
                        </span>
                </div>

                <div class="mt-8 text-center">
                    <img src={nitish} alt="" class="w-10 h-10 m-auto rounded-full object-cover lg:w-28 lg:h-28"/>
                    <h5 class=" mt-4 text-xl font-semibold text-gray-600 lg:block">Nitish Kumar</h5>
                    <span class=" text-gray-400 lg:block">Class 11 Student</span>
                </div>

                <ul class="space-y-2 tracking-wide mt-8">
                    <li>
                        <a href="#" aria-label="dashboard" class="relative px-4 py-3 flex items-center space-x-4 rounded-xl text-white bg-gradient-to-r from-sky-600 to-cyan-400">
                            <svg class="-ml-1 h-6 w-6" viewBox="0 0 24 24" fill="none">
                                <path d="M6 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8ZM6 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-1Z" class="fill-current text-cyan-400 dark:fill-slate-600"></path>
                                <path d="M13 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2V8Z" class="fill-current text-cyan-200 group-hover:text-cyan-300"></path>
                                <path d="M13 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-1Z" class="fill-current group-hover:text-sky-300"></path>
                            </svg>
                            <span class="-mr-1 font-medium">Dashboard</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" class="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path class="fill-current text-gray-300 group-hover:text-cyan-300" fill-rule="evenodd" d="M2 6a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1H8a3 3 0 00-3 3v1.5a1.5 1.5 0 01-3 0V6z" clip-rule="evenodd" />
                                <path class="fill-current text-gray-600 group-hover:text-cyan-600" d="M6 12a2 2 0 012-2h8a2 2 0 012 2v2a2 2 0 01-2 2H2h2a2 2 0 002-2v-2z" />
                            </svg>
                            <span class="group-hover:text-gray-700">Classes</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" class="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path class="fill-current text-gray-600 group-hover:text-cyan-600" fill-rule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clip-rule="evenodd" />
                                <path class="fill-current text-gray-300 group-hover:text-cyan-300" d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z" />
                            </svg>
                            <span class="group-hover:text-gray-700">Report Card</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" class="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path class="fill-current text-gray-600 group-hover:text-cyan-600" d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                                <path class="fill-current text-gray-300 group-hover:text-cyan-300" d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
                            </svg>
                            <span class="group-hover:text-gray-700">Resources</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" class="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path class="fill-current text-gray-300 group-hover:text-cyan-300" d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                                <path class="fill-current text-gray-600 group-hover:text-cyan-600" fill-rule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clip-rule="evenodd" />
                            </svg>
                            <span class="group-hover:text-gray-700">Fees</span>
                        </a>
                    </li>
                </ul>
            </div>

            <div class="px-6 -mx-6 pt-4 flex justify-between items-center border-t">
                <button class="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                    </svg>
                    <span class="group-hover:text-gray-700">Logout</span>
                </button>
            </div>
        </div>
        <div class="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
            <div class="sticky z-10 top-0 h-16 border-b bg-white lg:py-2.5">
                <div class="px-6 flex items-center justify-between space-x-4 2xl:container">
                    <h5 class="hidden text-2xl text-gray-600 font-medium lg:block">Dashboard</h5>
                    <button classname=" hidden -mr-2 border-r " onClick={() => setToggle(!toggle)}>
                    <Popup 
                        trigger={<button >
                        <img
                    src={toggle ? profile_male : logo}
                    alt="menu"
                    />
                    </button>}
                        modal
                    >
                    {close => (
                    <div className="modal">
                        <button className="close" onClick={close}>
                        &times;
                        </button>
                        <div className="header"> Modal Title </div>
                        <div className="content">
                        <div>
                <div class="-mx-6 px-6 py-4 flex flex-wrap">
                        <img src={logo} class="h-6 sm:h-9" alt="TutorsForum logo"/>
                        <span className=" ml-2 text-xl font-semibold dark:text-white">
                        TutorsForum
                        </span>
                </div>

                <div class="mt-8 text-center">
                    <img src={nitish} alt="" class="w-10 h-10 m-auto rounded-full object-cover lg:w-28 lg:h-28"/>
                    <h5 class=" mt-4 text-xl font-semibold text-gray-600 lg:block">Nitish Kumar</h5>
                    <span class=" text-gray-400 lg:block">Class 11 Student</span>
                </div>

                <ul class="space-y-2 tracking-wide mt-8">
                    <li>
                        <a href="#" aria-label="dashboard" class="relative px-4 py-3 flex items-center space-x-4 rounded-xl text-white bg-gradient-to-r from-sky-600 to-cyan-400">
                            <svg class="-ml-1 h-6 w-6" viewBox="0 0 24 24" fill="none">
                                <path d="M6 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8ZM6 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-1Z" class="fill-current text-cyan-400 dark:fill-slate-600"></path>
                                <path d="M13 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2V8Z" class="fill-current text-cyan-200 group-hover:text-cyan-300"></path>
                                <path d="M13 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-1Z" class="fill-current group-hover:text-sky-300"></path>
                            </svg>
                            <span class="-mr-1 font-medium">Dashboard</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" class="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path class="fill-current text-gray-300 group-hover:text-cyan-300" fill-rule="evenodd" d="M2 6a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1H8a3 3 0 00-3 3v1.5a1.5 1.5 0 01-3 0V6z" clip-rule="evenodd" />
                                <path class="fill-current text-gray-600 group-hover:text-cyan-600" d="M6 12a2 2 0 012-2h8a2 2 0 012 2v2a2 2 0 01-2 2H2h2a2 2 0 002-2v-2z" />
                            </svg>
                            <span class="group-hover:text-gray-700">Classes</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" class="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path class="fill-current text-gray-600 group-hover:text-cyan-600" fill-rule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clip-rule="evenodd" />
                                <path class="fill-current text-gray-300 group-hover:text-cyan-300" d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z" />
                            </svg>
                            <span class="group-hover:text-gray-700">Report Card</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" class="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path class="fill-current text-gray-600 group-hover:text-cyan-600" d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                                <path class="fill-current text-gray-300 group-hover:text-cyan-300" d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
                            </svg>
                            <span class="group-hover:text-gray-700">Resources</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" class="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path class="fill-current text-gray-300 group-hover:text-cyan-300" d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                                <path class="fill-current text-gray-600 group-hover:text-cyan-600" fill-rule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clip-rule="evenodd" />
                            </svg>
                            <span class="group-hover:text-gray-700">Fees</span>
                        </a>
                    </li>
                </ul>
            </div>
                        </div>
                    </div>
                    )}
                    </Popup>
                    </button>
                    
                    <div class="flex space-x-4">
                        <div hidden class="md:block">
                            <div class="relative flex items-center text-gray-400 focus-within:text-cyan-400">
                                <span class="absolute left-4 h-6 flex items-center pr-3 border-r border-gray-300">
                                <svg xmlns="http://ww50w3.org/2000/svg" class="w-4 fill-current" viewBox="0 0 35.997 36.004">
                                    <path id="Icon_awesome-search" data-name="search" d="M35.508,31.127l-7.01-7.01a1.686,1.686,0,0,0-1.2-.492H26.156a14.618,14.618,0,1,0-2.531,2.531V27.3a1.686,1.686,0,0,0,.492,1.2l7.01,7.01a1.681,1.681,0,0,0,2.384,0l1.99-1.99a1.7,1.7,0,0,0,.007-2.391Zm-20.883-7.5a9,9,0,1,1,9-9A8.995,8.995,0,0,1,14.625,23.625Z"></path>
                                </svg>
                                </span>
                                <input type="search" name="leadingIcon" id="leadingIcon" placeholder="Search here" class="w-full pl-14 pr-4 py-2.5 rounded-xl text-sm text-gray-600 outline-none border border-gray-300 focus:border-cyan-300 transition"/>
                            </div>
                        </div>
                        <button aria-label="search" class="w-10 h-10 rounded-xl border bg-gray-100 focus:bg-gray-100 active:bg-gray-200 md:hidden">
                            <svg xmlns="http://ww50w3.org/2000/svg" class="w-4 mx-auto fill-current text-gray-600" viewBox="0 0 35.997 36.004">
                                <path id="Icon_awesome-search" data-name="search" d="M35.508,31.127l-7.01-7.01a1.686,1.686,0,0,0-1.2-.492H26.156a14.618,14.618,0,1,0-2.531,2.531V27.3a1.686,1.686,0,0,0,.492,1.2l7.01,7.01a1.681,1.681,0,0,0,2.384,0l1.99-1.99a1.7,1.7,0,0,0,.007-2.391Zm-20.883-7.5a9,9,0,1,1,9-9A8.995,8.995,0,0,1,14.625,23.625Z"></path>
                            </svg>
                        </button>
                        <button aria-label="chat" class="w-10 h-10 rounded-xl border bg-gray-100 focus:bg-gray-100 active:bg-gray-200">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 m-auto text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                            </svg>
                        </button>
                        <button aria-label="notification" class="w-10 h-10 rounded-xl border bg-gray-100 focus:bg-gray-100 active:bg-gray-200">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 m-auto text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <div class="px-6 pt-6 2xl:container">
                <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <div class="md:col-span-2 lg:col-span-1" >
                        <div class="h-full py-8 px-6 space-y-6 rounded-xl border border-gray-200 bg-white">
                            <svg class="w-40 m-auto opacity-75" viewBox="0 0 146 146" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="73.5" cy="72.5" r="29" fill="#e4e4f2" stroke="#e4e4f2"/>

                            </svg>
                            <div>
                                <h5 class="text-xl text-gray-600 text-center">Test Scores</h5>
                                <div class="mt-2 flex justify-center gap-4">
                                    <h3 class="text-3xl font-bold text-gray-700">45/100</h3>
                                    <div class="flex items-end gap-1 text-green-500">
                                        <svg class="w-3" viewBox="0 0 12 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        </svg>
                                        <span>2%</span>
                                    </div>
                                </div>
                                <span class="block text-center text-gray-500">Compared to last week 35/100</span>
                            </div>
                            <table class="w-full text-gray-600">
                                <tbody>
                                    <tr>
                                        <td class="py-2">Chemistry</td>
                                        <td class="text-gray-500">94/100</td>
                                        <td>
                                            <svg class="w-16 ml-auto" viewBox="0 0 68 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect opacity="0.4" width="17" height="21" rx="1" fill="#e4e4f2"/>
                                                <rect opacity="0.4" x="19" width="14" height="21" rx="1" fill="#e4e4f2"/>
                                                <rect opacity="0.4" x="35" width="14" height="21" rx="1" fill="#e4e4f2"/>
                                                <rect opacity="0.4" x="51" width="17" height="21" rx="1" fill="#e4e4f2"/>
                                                <path d="M0 7C8.62687 7 7.61194 16 17.7612 16C27.9104 16 25.3731 9 34 9C42.6269 9 44.5157 5 51.2537 5C57.7936 5 59.3731 14.5 68 14.5" stroke="url(#paint0_linear_622:13631)" stroke-width="2" stroke-linejoin="round"/>
                                                <defs>
                                                <linearGradient id="paint0_linear_622:13631" x1="68" y1="7.74997" x2="1.69701" y2="8.10029" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#E323FF"/>
                                                <stop offset="1" stop-color="#7517F8"/>
                                                </linearGradient>
                                                </defs>
                                            </svg>
                                        </td>   
                                    </tr>
                                    <tr>
                                        <td class="py-2">Physics</td>
                                        <td class="text-gray-500">45/100</td>
                                        <td>
                                            <svg class="w-16 ml-auto" viewBox="0 0 68 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect opacity="0.4" width="17" height="21" rx="1" fill="#e4e4f2"/>
                                                <rect opacity="0.4" x="19" width="14" height="21" rx="1" fill="#e4e4f2"/>
                                                <rect opacity="0.4" x="35" width="14" height="21" rx="1" fill="#e4e4f2"/>
                                                <rect opacity="0.4" x="51" width="17" height="21" rx="1" fill="#e4e4f2"/>
                                                <path d="M0 12.929C8.69077 12.929 7.66833 9.47584 17.8928 9.47584C28.1172 9.47584 25.5611 15.9524 34.2519 15.9524C42.9426 15.9524 44.8455 10.929 51.6334 10.929C58.2217 10.929 59.3092 5 68 5" stroke="url(#paint0_linear_622:13640)" stroke-width="2" stroke-linejoin="round"/>
                                                <defs>
                                                <linearGradient id="paint0_linear_622:13640" x1="34" y1="5" x2="34" y2="15.9524" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#8AFF6C"/>
                                                <stop offset="1" stop-color="#02C751"/>
                                                </linearGradient>
                                                </defs>
                                            </svg>
                                        </td>   
                                    </tr>
                                    <tr>
                                        <td class="py-2">Maths</td>
                                        <td class="text-gray-500">12/100</td>
                                        <td>
                                            <svg class="w-16 ml-auto" viewBox="0 0 68 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect opacity="0.4" width="17" height="21" rx="1" fill="#e4e4f2"/>
                                                <rect opacity="0.4" x="19" width="14" height="21" rx="1" fill="#e4e4f2"/>
                                                <rect opacity="0.4" x="35" width="14" height="21" rx="1" fill="#e4e4f2"/>
                                                <rect opacity="0.4" x="51" width="17" height="21" rx="1" fill="#e4e4f2"/>
                                                <path d="M0 6C8.62687 6 6.85075 12.75 17 12.75C27.1493 12.75 25.3731 9 34 9C42.6269 9 42.262 13.875 49 13.875C55.5398 13.875 58.3731 6 67 6" stroke="url(#paint0_linear_622:13649)" stroke-width="2" stroke-linejoin="round"/>
                                                <defs>
                                                <linearGradient id="paint0_linear_622:13649" x1="67" y1="7.96873" x2="1.67368" y2="8.44377" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#FFD422"/>
                                                <stop offset="1" stop-color="#FF7D05"/>
                                                </linearGradient>
                                                </defs>
                                            </svg>
                                        </td>   
                                    </tr>
                                </tbody>
                            </table> 
                        </div>
                    </div>
                    <div>
                        <div class="h-full py-6 px-6 rounded-xl border border-gray-200 bg-white">
                        <svg class="w-40 m-auto opacity-75" viewBox="0 0 146 146" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="73.5" cy="72.5" r="29" fill="#e4e4f2" stroke="#e4e4f2"/>

                            </svg>
                            <h5 class="text-xl mt-8 text-gray-700">Percentile</h5>
                            <div class=" ">
                                <h1 class="text-5xl font-bold text-gray-800">64.5%</h1>
                                <span class="text-gray-500">Compared to last week 45.1%</span>
                            </div>
                            <svg class="w-full" viewBox="0 0 218 69" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 67.5C27.8998 67.5 24.6002 15 52.5 15C80.3998 15 77.1002 29 105 29C132.9 29 128.6 52 156.5 52C184.4 52 189.127 63.8158 217.027 63.8158" stroke="url(#paint0_linear_622:13664)" stroke-width="3" stroke-linecap="round"/>
                                <path d="M0 67.5C27.2601 67.5 30.7399 31 58 31C85.2601 31 80.7399 2 108 2C135.26 2 134.74 43 162 43C189.26 43 190.74 63.665 218 63.665" stroke="url(#paint1_linear_622:13664)" stroke-width="3" stroke-linecap="round"/>
                                <defs>
                                <linearGradient id="paint0_linear_622:13664" x1="217.027" y1="15" x2="7.91244" y2="15" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#4DFFDF"/>
                                <stop offset="1" stop-color="#4DA1FF"/>
                                </linearGradient>
                                <linearGradient id="paint1_linear_622:13664" x1="218" y1="18.3748" x2="5.4362" y2="18.9795" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#E323FF"/>
                                <stop offset="1" stop-color="#7517F8"/>
                                </linearGradient>
                                </defs>
                            </svg>
                            <table class="mt-6 -mb-2 w-full text-gray-600">
                                <tbody>
                                    <tr>
                                        <td class="py-2">Highest Score</td>
                                        <td class="text-gray-500">896</td>
                                        <td>
                                            <svg class="w-16 ml-auto" viewBox="0 0 68 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect opacity="0.4" width="17" height="21" rx="1" fill="#e4e4f2"/>
                                                <rect opacity="0.4" x="19" width="14" height="21" rx="1" fill="#e4e4f2"/>
                                                <rect opacity="0.4" x="35" width="14" height="21" rx="1" fill="#e4e4f2"/>
                                                <rect opacity="0.4" x="51" width="17" height="21" rx="1" fill="#e4e4f2"/>
                                                <path d="M0 7C8.62687 7 7.61194 16 17.7612 16C27.9104 16 25.3731 9 34 9C42.6269 9 44.5157 5 51.2537 5C57.7936 5 59.3731 14.5 68 14.5" stroke="url(#paint0_linear_622:13631)" stroke-width="2" stroke-linejoin="round"/>
                                                <defs>
                                                <linearGradient id="paint0_linear_622:13631" x1="68" y1="7.74997" x2="1.69701" y2="8.10029" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#E323FF"/>
                                                <stop offset="1" stop-color="#7517F8"/>
                                                </linearGradient>
                                                </defs>
                                            </svg>
                                        </td>   
                                    </tr>
                                    <tr>
                                        <td class="py-2">Average Score</td>
                                        <td class="text-gray-500">775</td>
                                        <td>
                                            <svg class="w-16 ml-auto" viewBox="0 0 68 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect opacity="0.4" width="17" height="21" rx="1" fill="#e4e4f2"/>
                                                <rect opacity="0.4" x="19" width="14" height="21" rx="1" fill="#e4e4f2"/>
                                                <rect opacity="0.4" x="35" width="14" height="21" rx="1" fill="#e4e4f2"/>
                                                <rect opacity="0.4" x="51" width="17" height="21" rx="1" fill="#e4e4f2"/>
                                                <path d="M0 12.929C8.69077 12.929 7.66833 9.47584 17.8928 9.47584C28.1172 9.47584 25.5611 15.9524 34.2519 15.9524C42.9426 15.9524 44.8455 10.929 51.6334 10.929C58.2217 10.929 59.3092 5 68 5" stroke="url(#paint0_linear_622:13640)" stroke-width="2" stroke-linejoin="round"/>
                                                <defs>
                                                <linearGradient id="paint0_linear_622:13640" x1="34" y1="5" x2="34" y2="15.9524" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#8AFF6C"/>
                                                <stop offset="1" stop-color="#02C751"/>
                                                </linearGradient>
                                                </defs>
                                            </svg>
                                        </td>   
                                    </tr>
                                </tbody>
                            </table>   
                        </div>
                    </div>
                    <div>
                        <div class="lg:h-full py-8 px-6 text-gray-600 rounded-xl border border-gray-200 bg-white">
                        <svg class="w-40 m-auto opacity-75" viewBox="0 0 146 146" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="73.5" cy="72.5" r="29" fill="#e4e4f2" stroke="#e4e4f2"/>

                            </svg>
                            <div class="mt-6">
                                <h5 class="text-xl text-gray-700 text-center">Total Classes Attended</h5>
                                <div class="mt-2 flex justify-center gap-4">
                                    <h3 class="text-3xl font-bold text-gray-700">4</h3>
                                    <div class="flex items-end gap-1 text-green-500">

                                        <span>2%</span>
                                    </div>
                                </div>
                                <span class="block text-center text-gray-500">Compared to last week 6</span>
                            </div>
                            <table class="mt-6 -mb-2 w-full text-gray-600">
                                <tbody>
                                    <tr>
                                        <td class="py-2">Total classes scheduled last week </td>
                                        <td class="text-gray-500">6</td>
                                        <td>
                                            <svg class="w-16 ml-auto" viewBox="0 0 68 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect opacity="0.4" width="17" height="21" rx="1" fill="#e4e4f2"/>
                                                <rect opacity="0.4" x="19" width="14" height="21" rx="1" fill="#e4e4f2"/>
                                                <rect opacity="0.4" x="35" width="14" height="21" rx="1" fill="#e4e4f2"/>
                                                <rect opacity="0.4" x="51" width="17" height="21" rx="1" fill="#e4e4f2"/>
                                                <path d="M0 7C8.62687 7 7.61194 16 17.7612 16C27.9104 16 25.3731 9 34 9C42.6269 9 44.5157 5 51.2537 5C57.7936 5 59.3731 14.5 68 14.5" stroke="url(#paint0_linear_622:13631)" stroke-width="2" stroke-linejoin="round"/>
                                                <defs>
                                                <linearGradient id="paint0_linear_622:13631" x1="68" y1="7.74997" x2="1.69701" y2="8.10029" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#E323FF"/>
                                                <stop offset="1" stop-color="#7517F8"/>
                                                </linearGradient>
                                                </defs>
                                            </svg>
                                        </td>   
                                    </tr>
                                    <tr>
                                        <td class="py-2">Total classes scheduled this week</td>
                                        <td class="text-gray-500">5</td>
                                        <td>
                                            <svg class="w-16 ml-auto" viewBox="0 0 68 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect opacity="0.4" width="17" height="21" rx="1" fill="#e4e4f2"/>
                                                <rect opacity="0.4" x="19" width="14" height="21" rx="1" fill="#e4e4f2"/>
                                                <rect opacity="0.4" x="35" width="14" height="21" rx="1" fill="#e4e4f2"/>
                                                <rect opacity="0.4" x="51" width="17" height="21" rx="1" fill="#e4e4f2"/>
                                                <path d="M0 12.929C8.69077 12.929 7.66833 9.47584 17.8928 9.47584C28.1172 9.47584 25.5611 15.9524 34.2519 15.9524C42.9426 15.9524 44.8455 10.929 51.6334 10.929C58.2217 10.929 59.3092 5 68 5" stroke="url(#paint0_linear_622:13640)" stroke-width="2" stroke-linejoin="round"/>
                                                <defs>
                                                <linearGradient id="paint0_linear_622:13640" x1="34" y1="5" x2="34" y2="15.9524" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#8AFF6C"/>
                                                <stop offset="1" stop-color="#02C751"/>
                                                </linearGradient>
                                                </defs>
                                            </svg>
                                        </td>   
                                    </tr>
                                    <tr>
                                        <td class="py-2">Other</td>
                                        <td class="text-gray-500">11</td>
                                        <td>
                                            <svg class="w-16 ml-auto" viewBox="0 0 68 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect opacity="0.4" width="17" height="21" rx="1" fill="#e4e4f2"/>
                                                <rect opacity="0.4" x="19" width="14" height="21" rx="1" fill="#e4e4f2"/>
                                                <rect opacity="0.4" x="35" width="14" height="21" rx="1" fill="#e4e4f2"/>
                                                <rect opacity="0.4" x="51" width="17" height="21" rx="1" fill="#e4e4f2"/>
                                                <path d="M0 6C8.62687 6 6.85075 12.75 17 12.75C27.1493 12.75 25.3731 9 34 9C42.6269 9 42.262 13.875 49 13.875C55.5398 13.875 58.3731 6 67 6" stroke="url(#paint0_linear_622:13649)" stroke-width="2" stroke-linejoin="round"/>
                                                <defs>
                                                <linearGradient id="paint0_linear_622:13649" x1="67" y1="7.96873" x2="1.67368" y2="8.44377" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#FFD422"/>
                                                <stop offset="1" stop-color="#FF7D05"/>
                                                </linearGradient>
                                                </defs>
                                            </svg>
                                        </td>   
                                    </tr>
                                </tbody>
                            </table>   
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        );
        }

        export default Dashboard2;