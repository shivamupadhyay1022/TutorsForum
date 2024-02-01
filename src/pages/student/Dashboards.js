import React, { useState, useContext, useEffect } from "react";
import { auth, db } from "../../firebase";
import { NavLink } from "react-router-dom";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { ref, onValue } from "firebase/database";
import styles from "../../style";
import Popup from 'reactjs-popup';
import SideNav from "../../components/SideNav";
import { AuthContext } from "../../components/AuthProvider";
import { nitish, profile_male, logo } from "../../assets";
import NavbarD from "../../components/NavbarD";



function Dashboard2() {
    const { currentUser } = useContext(AuthContext);
    const [username, setUsername] = useState("");

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

        <SideNav/>


            <div class="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
                <div class="sticky z-10 top-0 h-16 border-b bg-white ">
                    <div class="px-6 flex items-center justify-between space-x-4 2xl:container">
                        <h5 class="hidden text-2xl mt text-gray-600 font-medium lg:block">Dashboard</h5>

                        <div class=" lg:hidden ">
                            <NavbarD />
                        </div>

                    </div>
                </div>

                <div class="px-6 pt-6 2xl:container">
                    <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        <div class="md:col-span-2 lg:col-span-1" >
                            <div class="h-full py-8 px-6 space-y-6 rounded-xl border border-gray-200 bg-white">
                                <svg class="w-40 m-auto opacity-75" viewBox="0 0 146 146" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="73.5" cy="72.5" r="29" fill="#e4e4f2" stroke="#e4e4f2" />

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
                                                    <rect opacity="0.4" width="17" height="21" rx="1" fill="#e4e4f2" />
                                                    <rect opacity="0.4" x="19" width="14" height="21" rx="1" fill="#e4e4f2" />
                                                    <rect opacity="0.4" x="35" width="14" height="21" rx="1" fill="#e4e4f2" />
                                                    <rect opacity="0.4" x="51" width="17" height="21" rx="1" fill="#e4e4f2" />
                                                    <path d="M0 7C8.62687 7 7.61194 16 17.7612 16C27.9104 16 25.3731 9 34 9C42.6269 9 44.5157 5 51.2537 5C57.7936 5 59.3731 14.5 68 14.5" stroke="url(#paint0_linear_622:13631)" stroke-width="2" stroke-linejoin="round" />
                                                    <defs>
                                                        <linearGradient id="paint0_linear_622:13631" x1="68" y1="7.74997" x2="1.69701" y2="8.10029" gradientUnits="userSpaceOnUse">
                                                            <stop stop-color="#E323FF" />
                                                            <stop offset="1" stop-color="#7517F8" />
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
                                                    <rect opacity="0.4" width="17" height="21" rx="1" fill="#e4e4f2" />
                                                    <rect opacity="0.4" x="19" width="14" height="21" rx="1" fill="#e4e4f2" />
                                                    <rect opacity="0.4" x="35" width="14" height="21" rx="1" fill="#e4e4f2" />
                                                    <rect opacity="0.4" x="51" width="17" height="21" rx="1" fill="#e4e4f2" />
                                                    <path d="M0 12.929C8.69077 12.929 7.66833 9.47584 17.8928 9.47584C28.1172 9.47584 25.5611 15.9524 34.2519 15.9524C42.9426 15.9524 44.8455 10.929 51.6334 10.929C58.2217 10.929 59.3092 5 68 5" stroke="url(#paint0_linear_622:13640)" stroke-width="2" stroke-linejoin="round" />
                                                    <defs>
                                                        <linearGradient id="paint0_linear_622:13640" x1="34" y1="5" x2="34" y2="15.9524" gradientUnits="userSpaceOnUse">
                                                            <stop stop-color="#8AFF6C" />
                                                            <stop offset="1" stop-color="#02C751" />
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
                                                    <rect opacity="0.4" width="17" height="21" rx="1" fill="#e4e4f2" />
                                                    <rect opacity="0.4" x="19" width="14" height="21" rx="1" fill="#e4e4f2" />
                                                    <rect opacity="0.4" x="35" width="14" height="21" rx="1" fill="#e4e4f2" />
                                                    <rect opacity="0.4" x="51" width="17" height="21" rx="1" fill="#e4e4f2" />
                                                    <path d="M0 6C8.62687 6 6.85075 12.75 17 12.75C27.1493 12.75 25.3731 9 34 9C42.6269 9 42.262 13.875 49 13.875C55.5398 13.875 58.3731 6 67 6" stroke="url(#paint0_linear_622:13649)" stroke-width="2" stroke-linejoin="round" />
                                                    <defs>
                                                        <linearGradient id="paint0_linear_622:13649" x1="67" y1="7.96873" x2="1.67368" y2="8.44377" gradientUnits="userSpaceOnUse">
                                                            <stop stop-color="#FFD422" />
                                                            <stop offset="1" stop-color="#FF7D05" />
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
                                    <circle cx="73.5" cy="72.5" r="29" fill="#e4e4f2" stroke="#e4e4f2" />

                                </svg>
                                <h5 class="text-xl mt-8 text-gray-700">Percentile</h5>
                                <div class=" ">
                                    <h1 class="text-5xl font-bold text-gray-800">64.5%</h1>
                                    <span class="text-gray-500">Compared to last week 45.1%</span>
                                </div>
                                <svg class="w-full" viewBox="0 0 218 69" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 67.5C27.8998 67.5 24.6002 15 52.5 15C80.3998 15 77.1002 29 105 29C132.9 29 128.6 52 156.5 52C184.4 52 189.127 63.8158 217.027 63.8158" stroke="url(#paint0_linear_622:13664)" stroke-width="3" stroke-linecap="round" />
                                    <path d="M0 67.5C27.2601 67.5 30.7399 31 58 31C85.2601 31 80.7399 2 108 2C135.26 2 134.74 43 162 43C189.26 43 190.74 63.665 218 63.665" stroke="url(#paint1_linear_622:13664)" stroke-width="3" stroke-linecap="round" />
                                    <defs>
                                        <linearGradient id="paint0_linear_622:13664" x1="217.027" y1="15" x2="7.91244" y2="15" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#4DFFDF" />
                                            <stop offset="1" stop-color="#4DA1FF" />
                                        </linearGradient>
                                        <linearGradient id="paint1_linear_622:13664" x1="218" y1="18.3748" x2="5.4362" y2="18.9795" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#E323FF" />
                                            <stop offset="1" stop-color="#7517F8" />
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
                                                    <rect opacity="0.4" width="17" height="21" rx="1" fill="#e4e4f2" />
                                                    <rect opacity="0.4" x="19" width="14" height="21" rx="1" fill="#e4e4f2" />
                                                    <rect opacity="0.4" x="35" width="14" height="21" rx="1" fill="#e4e4f2" />
                                                    <rect opacity="0.4" x="51" width="17" height="21" rx="1" fill="#e4e4f2" />
                                                    <path d="M0 7C8.62687 7 7.61194 16 17.7612 16C27.9104 16 25.3731 9 34 9C42.6269 9 44.5157 5 51.2537 5C57.7936 5 59.3731 14.5 68 14.5" stroke="url(#paint0_linear_622:13631)" stroke-width="2" stroke-linejoin="round" />
                                                    <defs>
                                                        <linearGradient id="paint0_linear_622:13631" x1="68" y1="7.74997" x2="1.69701" y2="8.10029" gradientUnits="userSpaceOnUse">
                                                            <stop stop-color="#E323FF" />
                                                            <stop offset="1" stop-color="#7517F8" />
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
                                                    <rect opacity="0.4" width="17" height="21" rx="1" fill="#e4e4f2" />
                                                    <rect opacity="0.4" x="19" width="14" height="21" rx="1" fill="#e4e4f2" />
                                                    <rect opacity="0.4" x="35" width="14" height="21" rx="1" fill="#e4e4f2" />
                                                    <rect opacity="0.4" x="51" width="17" height="21" rx="1" fill="#e4e4f2" />
                                                    <path d="M0 12.929C8.69077 12.929 7.66833 9.47584 17.8928 9.47584C28.1172 9.47584 25.5611 15.9524 34.2519 15.9524C42.9426 15.9524 44.8455 10.929 51.6334 10.929C58.2217 10.929 59.3092 5 68 5" stroke="url(#paint0_linear_622:13640)" stroke-width="2" stroke-linejoin="round" />
                                                    <defs>
                                                        <linearGradient id="paint0_linear_622:13640" x1="34" y1="5" x2="34" y2="15.9524" gradientUnits="userSpaceOnUse">
                                                            <stop stop-color="#8AFF6C" />
                                                            <stop offset="1" stop-color="#02C751" />
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
                                    <circle cx="73.5" cy="72.5" r="29" fill="#e4e4f2" stroke="#e4e4f2" />

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
                                                    <rect opacity="0.4" width="17" height="21" rx="1" fill="#e4e4f2" />
                                                    <rect opacity="0.4" x="19" width="14" height="21" rx="1" fill="#e4e4f2" />
                                                    <rect opacity="0.4" x="35" width="14" height="21" rx="1" fill="#e4e4f2" />
                                                    <rect opacity="0.4" x="51" width="17" height="21" rx="1" fill="#e4e4f2" />
                                                    <path d="M0 7C8.62687 7 7.61194 16 17.7612 16C27.9104 16 25.3731 9 34 9C42.6269 9 44.5157 5 51.2537 5C57.7936 5 59.3731 14.5 68 14.5" stroke="url(#paint0_linear_622:13631)" stroke-width="2" stroke-linejoin="round" />
                                                    <defs>
                                                        <linearGradient id="paint0_linear_622:13631" x1="68" y1="7.74997" x2="1.69701" y2="8.10029" gradientUnits="userSpaceOnUse">
                                                            <stop stop-color="#E323FF" />
                                                            <stop offset="1" stop-color="#7517F8" />
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
                                                    <rect opacity="0.4" width="17" height="21" rx="1" fill="#e4e4f2" />
                                                    <rect opacity="0.4" x="19" width="14" height="21" rx="1" fill="#e4e4f2" />
                                                    <rect opacity="0.4" x="35" width="14" height="21" rx="1" fill="#e4e4f2" />
                                                    <rect opacity="0.4" x="51" width="17" height="21" rx="1" fill="#e4e4f2" />
                                                    <path d="M0 12.929C8.69077 12.929 7.66833 9.47584 17.8928 9.47584C28.1172 9.47584 25.5611 15.9524 34.2519 15.9524C42.9426 15.9524 44.8455 10.929 51.6334 10.929C58.2217 10.929 59.3092 5 68 5" stroke="url(#paint0_linear_622:13640)" stroke-width="2" stroke-linejoin="round" />
                                                    <defs>
                                                        <linearGradient id="paint0_linear_622:13640" x1="34" y1="5" x2="34" y2="15.9524" gradientUnits="userSpaceOnUse">
                                                            <stop stop-color="#8AFF6C" />
                                                            <stop offset="1" stop-color="#02C751" />
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
                                                    <rect opacity="0.4" width="17" height="21" rx="1" fill="#e4e4f2" />
                                                    <rect opacity="0.4" x="19" width="14" height="21" rx="1" fill="#e4e4f2" />
                                                    <rect opacity="0.4" x="35" width="14" height="21" rx="1" fill="#e4e4f2" />
                                                    <rect opacity="0.4" x="51" width="17" height="21" rx="1" fill="#e4e4f2" />
                                                    <path d="M0 6C8.62687 6 6.85075 12.75 17 12.75C27.1493 12.75 25.3731 9 34 9C42.6269 9 42.262 13.875 49 13.875C55.5398 13.875 58.3731 6 67 6" stroke="url(#paint0_linear_622:13649)" stroke-width="2" stroke-linejoin="round" />
                                                    <defs>
                                                        <linearGradient id="paint0_linear_622:13649" x1="67" y1="7.96873" x2="1.67368" y2="8.44377" gradientUnits="userSpaceOnUse">
                                                            <stop stop-color="#FFD422" />
                                                            <stop offset="1" stop-color="#FF7D05" />
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