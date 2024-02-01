import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import NavbarD from '../../components/NavbarD';
import SideNav from '../../components/SideNav';


const Classes = () => {
  return (
    <div>
            <SideNav />
            <div class="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">

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

export default Classes