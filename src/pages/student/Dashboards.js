import React, { useState, useContext, useEffect } from "react";
import { auth, db } from "../../firebase";
import { NavLink } from "react-router-dom";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { ref, onValue } from "firebase/database";
import { AuthContext } from "../../components/AuthProvider";
import SideNavs from "./SideNavs";
import ReactLoading from "react-loading"
import { SiGoogleclassroom } from "react-icons/si";
import CountUp from 'react-countup';
import { HiOutlineBookOpen } from "react-icons/hi";


function Dashboard2() {
    const { currentUser } = useContext(AuthContext);
    const [username, setUsername] = useState("");
    const [loading, setLoading] = useState (false)

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
        <center>

            <SideNavs
            activepage={"Dashboard"} 
            />
            {loading ?
                <div className='h-screen flex  items-center justify-center  '>
                    <ReactLoading type='bubbles' width={'20%'} color={'#3b82f6'} />
                </div>
                :
                <div class=" pt-20 md:pl-20">

                    {/* Profile section */}
                    <div className=" h-screen flex-row ">
                        <div className='grid grid-cols-2 gap-16 md:gap-32'>
                            <div className='justify-self-end' >
                                <SiGoogleclassroom
                                    className='h-16 w-16 md:h-32 w-32 ' />
                                <p>
                                    Classes Enrolled in:
                                </p>
                                <p>
                                    <CountUp delay={0.5} end={15} />
                                </p>
                            </div>
                            <div className='justify-self-start' >
                                <HiOutlineBookOpen

                                    className='h-16 w-16 md:h-32 w-32' />
                                <p>
                                    Assignments Incomplete:
                                </p>
                                <p>
                                    <CountUp delay={0.5} end={25} />
                                </p>
                            </div>
                        </div>
                        <div className='my-4 pt-8' >
                        <h1 className='text-lg font-bold my-4'>
                                Notices
                                </h1>
                        <table className="  border-spacing-x-4 table-auto w-full md:w-3/4">
                            
                            <thead className='bg-black text-white' >
                                <tr>
                                    <th>Date</th>
                                    <th>Contents</th>
                                    <th>Author</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>12th Jan 2024</td>
                                    <td>Rgistration Successful. Welcome to tutorsforum all tutors need on your fingertips !</td>
                                    <td>Admin</td>
                                </tr>
                                <tr>
                                    <td>24th Jan 2024</td>
                                    <td>Successfully registered with Nilesh Sir's Chemisry Classes - One of the best!</td>
                                    <td>Admin</td>
                                </tr>
                                <tr>
                                    <td>5th Feb 2024</td>
                                    <td>Your monthly fees is due for payment with Nilesh sir. Kindly complete it soon</td>
                                    <td>Nilesh Sir</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    </div>
                    
                </div>}


        </center>
    );
}

export default Dashboard2;