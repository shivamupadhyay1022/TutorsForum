import React, { useState } from 'react'
import SideNavt from './SideNavt'
import ReactLoading from "react-loading"
import { Button } from 'flowbite-react'
import { IoPeopleOutline } from "react-icons/io5";
import CountUp from 'react-countup';

function Classest() {
    const [loading,setLoading] = useState(false);
  return (
    <center>

    <SideNavt
    activepage={"Assigments"} 
    />
    {loading ?
        <div className='h-screen flex  items-center justify-center  '>
            <ReactLoading type='bubbles' width={'20%'} color={'#3b82f6'} />
        </div>
        :
        <div class=" pt-20 md:pl-20">

            {/* Profile section */}
            <div className=" h-screen flex-row ">
                    <div className='justify-self-center' >
                    <IoPeopleOutline 

                            className='h-16 w-16 md:h-32 w-32' />
                        <p>
                            Total Students Enrolled:
                        </p>
                        <p>
                            <CountUp delay={0.5} end={25} />
                        </p>
                    </div>
                <div className='my-4 pt-8' >
                <h1 className='text-lg font-bold my-2'>
                        Students List
                    </h1>
                    <table className=" overflow-hidden text-center border-spacing-x-4 table-auto w-[90%] md:w-3/4">

                        <thead className='bg-blue-500 text-white' >
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Links</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Anant</td>
                                <td>anant@gmail.com</td>
                                <td><Button className='bg-blue-500' >View</Button></td>
                            </tr>
                            <tr>
                            <td>Aman</td>
                                <td>aman@gmail.com</td>
                                <td><Button>View</Button></td>
                            </tr>
                            <tr>
                            <td>Ankit</td>
                                <td>ankit@gmail.com</td>
                                <td><Button>View</Button></td>
                            </tr>
                        </tbody>
                    </table>
            </div>
            </div>
            
        </div>}


</center>
  )
}

export default Classest