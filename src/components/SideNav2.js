import React,{useContext,useEffect, useState} from 'react'
import { Sidebar, } from 'flowbite-react';
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from 'react-icons/hi';
import {FaChalkboardTeacher} from 'react-icons/fa';
import {MdClass} from 'react-icons/md'
import UserProfileCard from './UserProfileCard';
import { Navbar, Dropdown, Avatar } from 'flowbite-react'
import { logo, nitish, profile_male } from '../assets'
import { NavLink } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { ref, onValue } from 'firebase/database';
import { AuthContext } from "../components/AuthProvider";
import { signOut } from "firebase/auth";
import { auth, db } from "../firebase";

export default function SideNav2() {

    const { currentUser } = useContext(AuthContext);
    const navigate = useNavigate();
  
    const [file, setFile] = useState();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [mobile, setMobile] = useState("");
    const [email, setEmail] = useState("");
    const [grade, setGrade] = useState("");
    const [exam, setexam] = useState("");
  
    useEffect(() => {
      if (currentUser) {
        const starCountRef = ref(db, "users/" + currentUser.uid);
        onValue(starCountRef, (snapshot) => {
          if (snapshot.exists()) {
            var data = snapshot.val();
            setFirstName(data.firstName);
            setEmail(data.email);
            setMobile(data.mob);
            setLastName(data.lastName);
            setGrade(data.grade);
            setexam(data.exam);
            setFile(data.file);
          }
        });
      }
    }, [currentUser]);
  
    const clickSignOut = () => {
      if (currentUser) {
        signOut(auth);
        navigate("/")
      } else {
        navigate("/signin2");
      }
    };

    return (
        <Sidebar aria-label="Sidebar with multi-level dropdown example"
            className='flex ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-white transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]'>
            <Sidebar.Logo
                href="#"
                img={logo}
                imgAlt="Tutorsforum logo"
            >
                <p>
                    TutorsForum
                </p>
            </Sidebar.Logo>
            <Sidebar.Items>
                <Sidebar.ItemGroup>
                    <Sidebar.Item>
                    <div class="mt-8 text-center">
            <img src={file} alt="" class="w-10 h-10 m-auto rounded-full object-cover lg:w-28 lg:h-28" />
            <h5 class=" mt-4 text-xl font-semibold text-gray-600 lg:block">{firstName+" "+lastName}</h5>
            <span class=" text-gray-400 lg:block">{"Class "+grade+" Student"}</span>
        </div>
                    </Sidebar.Item>
                    <Sidebar.Item
                        href="/dashboard2"
                        icon={HiChartPie}
                    >
                        <p>
                            Dashboard
                        </p>
                    </Sidebar.Item>
                    <Sidebar.Item
                        href="/dashboard2"
                        icon={MdClass}
                    >
                        <p>
                            Classes
                        </p>
                    </Sidebar.Item>
                    <Sidebar.Item
                        href="/dashboard2"
                        icon={HiInbox}
                    >
                        <p>
                            Inbox
                        </p>
                    </Sidebar.Item>
                    <Sidebar.Item
                        href="/profile2"
                        icon={HiUser}
                    >
                        <p>
                            Profile
                        </p>
                    </Sidebar.Item>
                    <Sidebar.Item
                        href="/dashboard2"
                        icon={FaChalkboardTeacher}
                    >
                        <p>
                            Teachers
                        </p>
                    </Sidebar.Item>
                    <Sidebar.Item
                        href="#"
                        icon={HiArrowSmRight}
                    >
                        <button onClick={clickSignOut} className={`w-full py-2 px-4 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none `}>
                  Sign Out
                </button>
                    </Sidebar.Item>
                </Sidebar.ItemGroup>
            </Sidebar.Items>
        </Sidebar>
    )
}



