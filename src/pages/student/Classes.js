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
import { Chart } from "react-google-charts"



export const data = [
    ["Element", "Density"],
    ["Maths", 88.94], // RGB value
    ["Bio", 70.49], // English color name
    ["Chemistry", 69.3],
    ["Physics", 81.4], // CSS-style declaration
];


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
                            <div
                                className=''>
                                <Chart chartType="ColumnChart" width="100%" height="400px" data={data} />
                            </div>

                            
                        </div>
                    </div>

                </div>}


        </center>
    )
}

export default Classes