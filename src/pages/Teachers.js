import React from 'react'
import toast, { Toaster } from 'react-hot-toast';
import NavbarD from '../components/NavbarD';
import SideNav2 from '../components/SideNav2';
import Stats from '../components/Stats';

const Teachers = () => {
  return (
    <div>
            <SideNav2 />
            <div class="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
                <div class="sticky z-10 top-0 h-16 border-b bg-white ">
                    <div class="px-6 flex items-center justify-between space-x-4 2xl:container">
                        <h5 class="hidden text-2xl mt text-gray-600 font-medium lg:block">Teachers</h5>

                        <div class=" lg:hidden ">
                            <NavbarD />
                        </div>
                        
                    </div>
                    <div>
                            <Stats/>
                        </div>
                </div>
                {/* Profile section */}
                <div class="px-6 pt-6 2xl:container flex flex-col">
                    <div className="container mx-auto">

                        <Toaster position='top-center' reverseOrder={false}></Toaster>


                    </div>
                </div>
            </div>
        </div>
  )
}

export default Teachers