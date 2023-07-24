import React, { useContext } from 'react'
import {Navbar, Dropdown, Avatar} from 'flowbite-react'
import { logo, nitish,profile_male } from '../assets'
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import { signOut } from "firebase/auth";
import { auth, db } from "../firebase";


function NavbarC() {

  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const clickSignOut = () => {
    if (currentUser) {
      signOut(auth);
    } else {
      navigate("/signin");
    }
  };
  return (
    
<Navbar
  fluid={true}
  rounded={true}
  className='flex top-0  z-50'
>
  <Navbar.Brand href="#">
    <img
      src={logo}
      className="mr-3 h-6 sm:h-9"
      alt="TutorsForum Logo"
    />
    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
      TutorsForum
    </span>
  </Navbar.Brand>
  <div className="flex absolute top-0 right-0  ">
  <Navbar.Toggle />
  </div>
  <Navbar.Collapse 
  className="">
    <Navbar.Link
      href="/"
      active={true}
    >
      Dashboard
    </Navbar.Link>
    <Navbar.Link href="/">
      Classes
    </Navbar.Link>
    <Navbar.Link href="/navbars">
      Fees
    </Navbar.Link>
    <Navbar.Link href="/navbars">
      ReportCard
    </Navbar.Link>
    <Navbar.Link href="/navbars">
      Contact
    </Navbar.Link>
  </Navbar.Collapse>
</Navbar>

  );
}

export default NavbarC