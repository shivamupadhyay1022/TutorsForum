import React from 'react'
import {Navbar, Dropdown, Avatar} from 'flowbite-react'
import { logo, ashish } from '../assets'

function Navbar2() {
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
    <Dropdown
      arrowIcon={false}
      inline={true}
      label={<Avatar alt="User settings" img={ashish} rounded={true}/>}
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
        Sign out
      </Dropdown.Item>
    </Dropdown>
    <Navbar.Toggle />
  </div>
  <Navbar.Collapse>
    <Navbar.Link
      href="/navbars"
      active={true}
    >
      Home
    </Navbar.Link>
    <Navbar.Link href="/navbars">
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

  )
}

export default Navbar2