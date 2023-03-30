import React from 'react'
import {Footer} from 'flowbite-react'
import { BStwitter }   from '../assets' ;
import { logo } from '../assets';

function FooterC() {
  return (
    <Footer container={true}>
  <div className="w-full ml-4 mr-4">
    <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
      <div>
        <Footer.Brand
          href= "#"
          src={logo}
          alt="TutorsForum Logo"
          name="TutorsForum"
        />
      </div>
      <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
        <div>
          <Footer.Title title="about" />
          <Footer.LinkGroup col={true}>
            <Footer.Link href="#">
              TutorsForum
            </Footer.Link>
            <Footer.Link href="#">
              Tailwind CSS
            </Footer.Link>
          </Footer.LinkGroup>
        </div>
        <div>
          <Footer.Title title="Follow us" />
          <Footer.LinkGroup col={true}>
            <Footer.Link href="#">
              Github
            </Footer.Link>
            <Footer.Link href="#">
              Discord
            </Footer.Link>
          </Footer.LinkGroup>
        </div>
        <div>
          <Footer.Title title="Legal" />
          <Footer.LinkGroup col={true}>
            <Footer.Link href="#">
              Privacy Policy
            </Footer.Link>
            <Footer.Link href="#">
              Terms & Conditions
            </Footer.Link>
          </Footer.LinkGroup>
        </div>
      </div>
    </div>
    <Footer.Divider />
    <div className="w-full sm:flex sm:items-center sm:justify-between">
      <Footer.Copyright
        href="https://solaristech.in/"
        by="Solaris™"
        year={2023}
      />
      
      </div>
    </div>
</Footer>
  )
}

export default FooterC