import React, { useContext, } from 'react'
import { Whatsapp,Gmail } from '../assets';
import {Navbar, Dropdown, Avatar} from 'flowbite-react'
import { logo, nitish,profile_male } from '../assets'
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import { signOut } from "firebase/auth";
import { HashLink } from 'react-router-hash-link';
import { auth, db } from "../firebase";


function NavbarH() {

  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();
  // const Whatsapp = () => {
  //   openURL('https://wa.me/919234567812?text=%7B0%7D+Balaji+CTest')
  // };
  return (
    
<div class="flex items-start justify-center">
  <div class="flex-1  justify-center  py-2 m-2">
    <div className='flex text-center items-center content-center justify-center text-xs md:text-sm '  >
    <img src={Whatsapp} className='h-6'/>
    <a href="https://wa.me/918877666977?text=Query+Tutorsforum" class='underlineblue hover:text-blue-300 ' >WhatsApp at: +918877666977</a>
    </div>
  </div>
  <div class="flex-1  py-2 m-2">
  <div className='flex text-center items-center content-center justify-center text-xs md:text-sm'  >
    <img src={Gmail} className='h-6'/>
    <a href="mailto:chemistryforum@gmail.com" class='underlineblue hover:text-blue-300 ' >Mail at: chemistryforum@gmail.com</a>
    </div>
  </div>
</div>

  );
}

export default NavbarH