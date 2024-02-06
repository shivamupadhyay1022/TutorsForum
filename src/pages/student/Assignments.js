import React, { useContext, useState, useEffect } from 'react'
import SideNavs from './SideNavs';
import ReactLoading from "react-loading"
import { SiGoogleclassroom } from "react-icons/si";
import CountUp from 'react-countup';
import { HiOutlineBookOpen } from "react-icons/hi";
import { FaRegFilePdf } from "react-icons/fa";


function Assignments() {
    const [loading,setLoading] = useState(false)
  return (
    <center>

            <SideNavs
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
                                <HiOutlineBookOpen

                                    className='h-16 w-16 md:h-32 w-32' />
                                <p>
                                    Assignments Incomplete:
                                </p>
                                <p>
                                    <CountUp delay={0.5} end={25} />
                                </p>
                            </div>
                        <div className='my-4 pt-8' >
                        <h1 className='text-lg font-bold my-2'>
                                Assignments
                            </h1>
                            <table className=" overflow-hidden border-spacing-x-4 table-auto w-[90%] md:w-3/4">

                                <thead className='bg-blue-500 text-white' >
                                    <tr>
                                        <th>Due Date</th>
                                        <th>Contents</th>
                                        <th>Subject</th>
                                        <th>Links</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>12th Jan 2024</td>
                                        <td>Complete all excercises of 1st chapter of Maths NCERT Class 11</td>
                                        <td>Maths</td>
                                        <td><FaRegFilePdf /></td>
                                    </tr>
                                    <tr>
                                        <td>24th Jan 2024</td>
                                        <td>Complete the given assignment in the link attached</td>
                                        <td>Chemistry</td>
                                        <td><FaRegFilePdf /></td>
                                    </tr>
                                    <tr>
                                        <td>5th Feb 2024</td>
                                        <td>Complete the assignments attached</td>
                                        <td>Bio</td>
                                        <td><FaRegFilePdf /></td>
                                    </tr>
                                </tbody>
                            </table>
                    </div>
                    </div>
                    
                </div>}


        </center>
        )
}

export default Assignments