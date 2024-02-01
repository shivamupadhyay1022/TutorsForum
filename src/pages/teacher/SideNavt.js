import React, { useState, useContext, useEffect } from 'react'
import {
  Calender,
  Chart_fill,
  Folder,
  Chart_fill2,
  Chat,
  Search,
  Chart,
  Setting,
  User,
  logo,
  Avatarpic,
}
  from '../../assets'
import { useNavigate } from "react-router-dom";
import { NavLink } from 'react-router-dom';
import { AuthContext } from "../../components/AuthProvider";
import { IoIosArrowDropleft } from "react-icons/io";
import { Navbar, Dropdown, Avatar } from 'flowbite-react'
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from 'react-icons/hi';
import { MdClass, MdOutlineClass, MdOutlineDashboardCustomize } from 'react-icons/md'
import { SiGoogleclassroom } from "react-icons/si";
import { FaChalkboardTeacher } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { RiFileInfoLine } from "react-icons/ri";
import { IoIosLogOut } from "react-icons/io";
import AppContext from '../../components/AppContext';
import { auth, db } from "../../firebase";
import { signOut } from "firebase/auth";
import { ref, onValue, update } from "firebase/database";



function SideNavt() {
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const myContext = useContext(AppContext);
  const [open, setOpen] = useState(false);
  const [file, setFile] = useState();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [grade, setGrade] = useState("");
  const [exam, setexam] = useState("");
  const ClickSignOut = () => {
    if (currentUser) {
      signOut(auth);
    } else {
      navigate("/signint");
    }
  };

  useEffect(() => {
    if (currentUser) {
        const starCountRef = ref(db, "tutors/" + currentUser.uid);
        onValue(starCountRef, (snapshot) => {
            if (snapshot.exists()) {
              console.log(snapshot.data)
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

  return (
    <div>
      <div className='w-full  bg-blue-500 fixed z-[50] h-12  items-center'>
        {/* <button
            className={`absolute ${!open ? "mx-0.5 " : "-right-[0.1px] mr-3"} mx-6 my-4 border-dark-purple border-2 rounded-full  ${!open && "rotate-180"}`}
            onClick={() => setOpen(!open)}>
            <IoIosArrowDropleft color='white' className='text-color-white h-8 w-8' />
          </button> */}
        <div className=' flex ' >
          <div className='flex md:hidden z-[200]'>
            {!open ? <button
              className={`absolute ${!open ? "mx-0.5 " : "-right-[0.1px] mr-3 transition"} my-1 mx-1 transition  border-dark-purple border-2 rounded-full  ${!open && "rotate-180"}`}
              onClick={() => setOpen(!open)}>
              <IoIosArrowDropleft color='white' className=' text-color-white h-8 w-8' ></IoIosArrowDropleft>
            </button> : <div className='h-0 w-0'></div>}

          </div>
          <div className="text-xl md:text-2xl w-full mt text-white align-middle text-center my-1 font-medium lg:block">
            {myContext.active}</div>
          <div className="flex md:order-2">
            {currentUser ?
              //when logged in
              <div className='mr-4 md:mr-8 my-2 '>
                <Dropdown label = {<img alt="User settings" className='bg-white w-[24px] h-[24px] rounded-3xl' src={file} />} style={{ background: "#3b82f6" }} size={10} dismissOnClick={false}>
                  <Dropdown.Item  ><h2 className='text-black'>{firstName+" "+lastName}</h2></Dropdown.Item>
                  <Dropdown.Item>{email}</Dropdown.Item>
                  <Dropdown.Item>Profile</Dropdown.Item>
                  <Dropdown.Item  ><button onClick={ClickSignOut}>Sign out </button></Dropdown.Item>
                </Dropdown>
              </div>
              :
              // When not logged in
              <div className='mr-4 md:mr-8 my-1 '>
                <Dropdown label = {<img alt="User settings" className='bg-white w-[24px] h-[24px] rounded-3xl' src={Avatarpic} />} style={{ background: "#3b82f6" }} size={10} dismissOnClick={false}>
                  <Dropdown.Item>Sign In</Dropdown.Item>
                  <Dropdown.Item ><button onClick={ClickSignOut}>Sign out </button></Dropdown.Item>
                </Dropdown>
                {/* <img alt="User settings" className='bg-white w-10 rounded-3xl' src={Avatarpic}  /> */}
              </div>}

          </div>
        </div>
        <div className={`md:flex  bg-blue-500  fixed z-[180] ${!open && "hidden"}`}>
          <div
            className={` ${open ? "w-72" : "w-20 "} bg-dark-purple h-screen p-5   relative duration-300`}>
            <div className='flex flex-col'>
              <button
                className={`absolute ${!open ? "mx-0.5 " : "-right-[0.1px] mr-3 transition"} hiden md:flex mx-1 transition  border-dark-purple border-2 rounded-full  ${!open && "rotate-180"}`}
                onClick={() => setOpen(!open)}>
                <IoIosArrowDropleft color='white' className=' text-color-white h-8 w-8' ></IoIosArrowDropleft>
              </button>

              <div className="flex gap-x-4 mt-12 items-center">
                <img
                  src={logo}
                  className={`cursor-pointer duration-500 ${open && "rotate-[360deg]"
                    }`}
                />
                <h1
                  className={`text-white origin-left font-medium text-xl duration-200 ${!open && "scale-0"
                    }`}
                >
                  TutorsForum
                </h1>
              </div>

              <ul className="pt-6">
                <li
                  className={`flex  rounded-md p-2 cursor-pointer  text-gray-300 text-sm items-center gap-x-4 my-2`}>
                  <button className='flex flex-row items-center '>
                    {/* <img src={Chart_fill} /> */}
                    <MdOutlineDashboardCustomize size={25} />
                    <span className={`${!open && "hidden"} ml-2 text-lg  duration-200`}>
                      Dashboard
                    </span>
                  </button>
                </li>
                <li
                  className={`flex  rounded-md p-2 cursor-pointer  text-gray-300 text-sm items-center gap-x-4 my-2`}>
                  <button className='flex flex-row items-center '>
                    {/* <img src={Chart} /> */}
                    <SiGoogleclassroom size={25} />
                    <span className={`${!open && "hidden"} ml-2 text-lg  duration-200`}>
                      Classes
                    </span>
                  </button>
                </li>
                <li
                  className={`flex  rounded-md p-2 cursor-pointer  text-gray-300 text-sm items-center gap-x-4 my-2`}>
                  <button className='flex flex-row items-center '>
                    {/* <img src={Calender} /> */}
                    <MdOutlineClass size={25} />
                    <span className={`${!open && "hidden"} ml-2 text-lg  duration-200`}>
                      Attendance
                    </span>
                  </button>
                </li>
                <li
                  className={`flex  rounded-md p-2 cursor-pointer  text-gray-300 text-sm items-center gap-x-4 my-2`}>
                  <button className='flex flex-row items-center '>
                    {/* <img src={Chat} /> */}
                    <FaChalkboardTeacher size={25} />
                    <span className={`${!open && "hidden"} ml-2 text-lg  duration-200`}>
                      Teachers
                    </span>
                  </button>
                </li>
                <hr className={`${open === true ? "w-48" : "w-8"} h-1 mx-auto  bg-gray-100 border-0 rounded  dark:bg-gray-700`} />

                <li
                  className={`flex  rounded-md p-2 cursor-pointer  text-gray-300 text-sm items-center gap-x-4 my-2`}>
                  <button className='flex flex-row items-center '>
                    <RiFileInfoLine size={25} />
                    <span className={`${!open && "hidden"} ml-2 text-lg  duration-200`}>
                      Complain
                    </span>
                  </button>
                </li>
                <hr className={`${open === true ? "w-48" : "w-8"} h-1 mx-auto  bg-gray-100 border-0 rounded  dark:bg-gray-700`} />

                <li
                  className={`flex  rounded-md p-2 cursor-pointer  text-gray-300 text-sm items-center gap-x-4 my-2`}>
                  <button className='flex flex-row items-center '>
                    <CgProfile size={25} />
                    <span className={`${!open && "hidden"} ml-2 text-lg  duration-200`}>
                      Profile
                    </span>
                  </button>
                </li>
                <li
                  className={`flex  rounded-md p-2 cursor-pointer  text-gray-300 text-sm items-center gap-x-4 my-2`}>
                  <button className='flex flex-row items-center '>
                    {/* <img src={Chat} /> */}
                    <IoIosLogOut size={25} />
                    <span className={`${!open && "hidden"} ml-2 text-lg  duration-200`}>
                      Logout
                    </span>
                  </button>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </div>
    </div>
  )
}

export default SideNavt