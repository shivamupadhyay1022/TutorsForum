import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import NavbarD from '../../components/NavbarD';
import SideNavs from './SideNavs';
import ReactLoading from 'react-loading'
import { SiGoogleclassroom } from "react-icons/si";
import CountUp from 'react-countup';
import { HiOutlineBookOpen } from "react-icons/hi";
import Stats from '../../components/Stats';
import { FaRegFilePdf } from "react-icons/fa";
// import Chart from 'react-apexcharts'






const Classes = () => {
    const [loading, setLoading] = useState(false);
    // const data = {
    //     options: {
    //         chart: {
    //             id: 'apexchart-example'
    //         },
    //         xaxis: {
    //             categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
    //         }
    //     },
    //     series: [{
    //         name: 'series-1',
    //         data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
    //     }]
    // }
    return (
        <center>

            <SideNavs
                className='z-999'
                activepage={"Classes"} />
            {loading ?
                <div className='h-auto flex  items-center justify-center  '>
                    <ReactLoading type='bubbles' width={'20%'} color={'#3b82f6'} />
                </div>
                :
                <div className=" pt-20 -z-50 md:pl-20">

                    {/* Profile section */}
                    <div className=" mb-16 flex-row ">
                        <Stats />
                        <div className='my-4 pt-8' >
                            <h1 className='text-lg font-bold my-2'>
                                Marks in Last Exams
                            </h1>
                            {/* <div
                                className=''>
                                <Chart options={data.options} series={data.series} type="bar" width={500} height={320} />
                                 </div> */}

                            <h1 className='text-lg font-bold my-2'>
                                Assignments
                            </h1>
                            <table className=" overflow-hidden border-spacing-x-4 table-auto w-[90%] md:w-3/4">

                                <thead className='bg-blue-600 text-white' >
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

export default Classes