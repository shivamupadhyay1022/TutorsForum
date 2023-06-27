import React, { useContext } from 'react'
import {Navbar, Dropdown, Avatar} from 'flowbite-react'
import { logo, nitish,profile_male } from '../assets'
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../components/AuthProvider";
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
  <div className="flex md:order-2">
  {currentUser ? 
  <div>
  <Dropdown
    arrowIcon={false}
    inline={true}
    label={<Avatar alt="User settings" img={nitish} rounded={true}/>}
  >
    <Dropdown.Header>
      <span className="block text-sm">
        Shivam
      </span>
      <span className="block truncate text-sm font-medium">
        name@TutorsForum.com
      </span>
    </Dropdown.Header>
    <Dropdown.Item>
      Dashboard
    </Dropdown.Item>
    <Dropdown.Item>
      Settings
    </Dropdown.Item>
    <Dropdown.Item>
      Earnings
    </Dropdown.Item>
    <Dropdown.Divider />
    <Dropdown.Item>
    <button onClick={clickSignOut} className={`w-full py-2 px-4 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none `}>
        Sign Out
      </button>
    </Dropdown.Item>
  </Dropdown>
  </div> 
  : 
    // When not logged in
    <div>
    <Dropdown
      arrowIcon={false}
      inline={true}
      label={<Avatar alt="User settings" img={profile_male} rounded={true}/>}
    >
      <Dropdown.Item>
        <a href='/signup'>Sign Up</a>
      </Dropdown.Item>
      <Dropdown.Item>
      <a href='/signin'>Sign In</a>
      </Dropdown.Item>
    </Dropdown>
  </div>
  }
    <Navbar.Toggle />
  </div>
  <Navbar.Collapse>
    <Navbar.Link
      href="/"
      active={true}
    >
      Home
    </Navbar.Link>
    <Navbar.Link href="/">
      About
    </Navbar.Link>
    <Navbar.Link href="/navbars">
      Services
    </Navbar.Link>
    <Navbar.Link href="/navbars">
      Pricing
    </Navbar.Link>
    <Navbar.Link href="/navbars">
      Contact
    </Navbar.Link>
  </Navbar.Collapse>
</Navbar>

  );
}

export default NavbarC