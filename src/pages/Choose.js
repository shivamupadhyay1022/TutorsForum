import React from 'react'
import { Card } from 'flowbite-react'
import { HiAcademicCap } from "react-icons/hi2"

function Choose() {
    return (
        <div className='h-full items-center bg-gradient-to-tr from-blue-800 to-purple-700 md:h-[100vh]' >
            <center className='  items-center md:grid grid-cols-3 gap-3 md:pt-[30vh]'>
            <div className='pt-4 pb-4' >
                <Card className="max-w-sm ">

                    <div className="flex flex-col items-center pb-10">

                        <HiAcademicCap />
                        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Admin</h5>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                            Login as an administrator to access the dashboard to manage app data.
                        </span>
                    </div>
                </Card>
            </div>

            <div className='pt-4 pb-4'>
                <Card className="max-w-sm ">

                    <div className="flex flex-col items-center pb-10">

                        <HiAcademicCap />
                        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Student</h5>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                        Login as a student to explore course materials and assignments.
                        </span>
                    </div>
                </Card>
            </div>

            <div className='pt-4 pb-4'>
                <Card className="max-w-sm p">

                    <div className="flex flex-col items-center pb-10">

                        <HiAcademicCap />
                        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Teacher</h5>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                        Login as a teacher to create courses, assignments, and track student progress.
                        </span>
                    </div>
                </Card>
            </div>
            </center>
            </div>

    )
}

export default Choose