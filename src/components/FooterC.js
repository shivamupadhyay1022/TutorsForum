
import { Footer } from 'flowbite-react';
import { BsDribble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';

export default function FooterSitemapLinks() {
  return (
    <Footer bgDark>
      <div className="w-full mt-4 text-[#50d71e] ">
        <div className="grid bg-gray-700 w-full grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4 text-[#50d71e] ">
          <div className='text-white' >
            <Footer.Title title="Company" className='text-white' />
            <Footer.LinkGroup col>
              <Footer.Link className='text-white'  href="#">
                About
              </Footer.Link>
              <Footer.Link href="#" className='text-white' >
                Careers
              </Footer.Link>
              <Footer.Link href="#" className='text-white'>
                Brand Center
              </Footer.Link>
              <Footer.Link href="#" className='text-white'>
                Blog
              </Footer.Link>
            </Footer.LinkGroup >
          </div>
          <div>
            <Footer.Title title="help center" className='text-white' />
            <Footer.LinkGroup col>
              <Footer.Link href="#" className='text-white'>
                Discord Server
              </Footer.Link>
              <Footer.Link href="#" className='text-white'>
                Twitter
              </Footer.Link>
              <Footer.Link href="#" className='text-white'>
                Facebook
              </Footer.Link>
              <Footer.Link href="#" className='text-white'>
                Contact Us
              </Footer.Link>
            </Footer.LinkGroup >
          </div>
          <div>
            <Footer.Title title="legal" className='text-white'/>
            <Footer.LinkGroup col>
              <Footer.Link href="#" className='text-white'>
                Privacy Policy
              </Footer.Link>
              <Footer.Link href="#" className='text-white'>
                Licensing
              </Footer.Link>
              <Footer.Link href="#" className='text-white'>
                Terms & Conditions
              </Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="download" className='text-white'/>
            <Footer.LinkGroup col>
              <Footer.Link href="#" className='text-white'>
                iOS
              </Footer.Link>
              <Footer.Link href="#" className='text-white'>
                Android
              </Footer.Link>
              <Footer.Link href="#" className='text-white'>
                Windows
              </Footer.Link>
              <Footer.Link href="#" className='text-white'>
                MacOS
              </Footer.Link>
            </Footer.LinkGroup>
          </div>
        </div>
        <div className="w-full bg-gray-700 px-4 py-6 sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright
            by="Solaris™"
            href="solaristechservices.in"
            year={2022}
          />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon className='text-white'
              href="#"
              icon={BsFacebook}
            />
            <Footer.Icon className='text-white'
              href="#"
              icon={BsInstagram}
            />
            <Footer.Icon className='text-white'
              href="#"
              icon={BsTwitter}
            />
            <Footer.Icon className='text-white'
              href="#"
              icon={BsGithub}
            />
           
          </div>
        </div>
      </div>
    </Footer>
  )
}