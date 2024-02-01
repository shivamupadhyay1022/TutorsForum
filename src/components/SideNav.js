import React,{useState} from 'react'
import {Calender,
    Chart,
    Chart_fill,
    Chart_fill2,
    Chat,
    Folder,
    Search ,
    Setting,
    User,
    logo,
    Control,}
    from '../assets'
    import { IoIosArrowDropleft } from "react-icons/io";


function SideNav() {

    const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Dashboard", src: "Chart_fill" },
    { title: "Inbox", src: "Chat" },
    { title: "Accounts", src: "User", gap: true },
    { title: "Schedule ", src: "Calendar" },
    { title: "Search", src: "Search" },
    { title: "Analytics", src: "Chart" },
    { title: "Files ", src: "Folder", gap: true },
    { title: "Setting", src: "Setting" },
  ];

  return (
    <div className="flex bg-blue-500  fixed z-50 ">
      <div
        className={` ${
          open ? "w-72" : "w-20 "
        } bg-dark-purple h-screen p-5  pt-8 relative duration-300`}

      >
        <div className='flex flex-col'>

        
        <button
        className={`absolute ${!open ? "mx-0.5" : "-right-[0.1px]"}  border-dark-purple
        border-2 rounded-full  ${!open && "rotate-180"}`}
       onClick={() => setOpen(!open)}>
            <IoIosArrowDropleft color='white' className='text-color-white h-8 w-8'/>
        </button>
        {/* <img
          src={Control}
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        /> */}
        <div className="flex gap-x-4 mt-12 items-center">
          <img
            src={logo}
            className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            Designer
          </h1>
        </div>
        <ul className="pt-6">
            <li
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 my-2} bg-light-white `}
            >
              <img src={Chart_fill} />
              <span className={`${!open && "hidden"}  origin-left duration-200`}>
                Dashboard
              </span>
            </li>
        </ul>
      </div>
      
      </div>
      
    </div>
  )
}

export default SideNav