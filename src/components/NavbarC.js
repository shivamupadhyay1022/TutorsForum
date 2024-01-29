import React, { useContext, useState, useEffect } from 'react'
import { Navbar, Dropdown, Avatar } from 'flowbite-react'
import { logo, nitish, profile_male } from '../assets'
import { NavLink } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { ref, onValue } from 'firebase/database';
import { AuthContext } from "../components/AuthProvider";
import { signOut } from "firebase/auth";
import { HashLink } from 'react-router-hash-link';
import { auth, db } from "../firebase";


function NavbarC() {

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
          //when logged in
          <div>
            <Dropdown
              arrowIcon={false}
              inline={true}
              label={<Avatar alt="User settings" img={file} rounded={true} />}
            >
              <Dropdown.Header>
                <span className="block text-sm">
                  {firstName + " " + lastName}
                </span>
                <span className="block truncate text-sm font-medium">
                  {email}
                </span>
              </Dropdown.Header>
              <NavLink
                to={"/dashboard2"}>
                <Dropdown.Item>
                  Dashboard
                </Dropdown.Item>
              </NavLink>
              <NavLink
                to={"/dashboard2"}>
                <Dropdown.Item>
                  Classes
                </Dropdown.Item>
              </NavLink>
              <NavLink
                to={"/dashboard2"}>
                <Dropdown.Item>
                  Inbox
                </Dropdown.Item>
              </NavLink>
              <NavLink
                to={"/profile2"}>
                <Dropdown.Item>
                  Profile
                </Dropdown.Item>
              </NavLink>
              <NavLink
                to={"/dashboard2"}>
                <Dropdown.Item>
                  Teachers
                </Dropdown.Item>
              </NavLink>
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
          <div className='mr-2'>
            <Dropdown
              arrowIcon={false}
              inline={true}
              label={<Avatar alt="User settings" img={profile_male} rounded={true} />}
            >
              <Dropdown.Item>
                <a href='/signup2'>Sign Up</a>
              </Dropdown.Item>
              <Dropdown.Item>
                <a href='/signin2'>Sign In</a>
              </Dropdown.Item>
            </Dropdown>
          </div>
        }
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <HashLink smooth to='/' > Home </HashLink>
        <HashLink smooth to='/#For-Students' > About </HashLink>
        <HashLink smooth to='/#services' > Services </HashLink>
        <Navbar.Link href="/signin">
          Pricing
        </Navbar.Link>
        <HashLink smooth to='/#contact' > Contact Us </HashLink>
      </Navbar.Collapse>
    </Navbar>

  );
}

export default NavbarC