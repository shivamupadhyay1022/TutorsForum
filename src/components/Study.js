import React from 'react'
import { Card,Button } from 'flowbite-react'
import { teach,study } from '../assets'


function Study() {
  return (
    <section id="For-Students" class="bg-white">
        <div class="xl:max-w-screen md:w-5/6 mx-auto w-full lg:py-28 py-16 mt-2 text-primary px-4 md:px-0 flex justify-between items-center flex-col lg:flex-row">
            <div class="lg:w-55p w-full">
                <div class="mb-8">
                    <h2 class="text-green-dark font-medium text-base uppercase tracking-wider mb-4">
                        For Students</h2>
                    <h3 class="text-gray-gray9 text-2xl lg:text-5xl lg:leading-[58px] mb-2 tracking-tight">
                        Improve your scores with India's most personalised tutoring services.</h3>
                    <p class="text-base md:text-xl text-gray-gray7 font-light">Crack exams, learn new skills, improve
                        grades with the help of great teachers. Post your learning needs and let qualified tutors get in
                        touch with you.</p>
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 my-10">
                    <div class="flex border border-primaryBorder rounded-lg p-4 bg-white"><svg xmlns="http://www.w3.org/2000/svg" class="text-green-bright flex-shrink-0" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M5 12l5 5l10 -10"></path>
                        </svg>
                        <div class="ml-2">
                            <h4 class="font-semibold text-base text-primary tracking-normal">Strategic Planning</h4>
                            <p class="text-sm font-normal text-gray tracking-normal">A unique course plan is generated
                                as per your needs. </p>
                        </div>
                    </div>
                    <div class="flex border border-primaryBorder rounded-lg p-4 bg-white"><svg xmlns="http://www.w3.org/2000/svg" class="text-green-bright flex-shrink-0" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M5 12l5 5l10 -10"></path>
                        </svg>
                        <div class="ml-2">
                            <h4 class="font-semibold text-base text-primary tracking-normal">Continuous Counselling</h4>
                            <p class="text-sm font-normal text-gray tracking-normal">Countinuous counselling and
                                feedback for course correction</p>
                        </div>
                    </div>
                    <div class="flex border border-primaryBorder rounded-lg p-4 bg-white"><svg xmlns="http://www.w3.org/2000/svg" class="text-green-bright flex-shrink-0" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M5 12l5 5l10 -10"></path>
                        </svg>
                        <div class="ml-2">
                            <h4 class="font-semibold text-base text-primary tracking-normal">
                                1:1 Learning</h4>
                            <p class="text-sm font-normal text-gray tracking-normal">One on One classes for extreme
                                focus and improvement</p>
                        </div>
                    </div>
                    <div class="flex border border-primaryBorder rounded-lg p-4 bg-white"><svg xmlns="http://www.w3.org/2000/svg" class="text-green-bright flex-shrink-0" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M5 12l5 5l10 -10"></path>
                        </svg>
                        <div class="ml-2">
                            <h4 class="font-semibold text-base text-primary tracking-normal">Performance
                                Analytics</h4>
                            <p class="text-sm font-normal text-gray tracking-normal">Track your progress and see your
                                score improvement in real time.</p>
                        </div>
                    </div>
                </div>
                <div class="flex lg:flex-row flex-col items-center">
                    <div class="flex justify-center">
                    <a
                    href="#"
                    className="inline-flex items-center rounded-lg bg-blue-700 py-2 px-4 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Join as a Student
                    </a>
                    </div>
                    <div class="border-b-2 border-green-light lg:ml-10 lg:mt-0 mt-4 w-fit"><a class="text-sm font-semibold text-primary group" href="https://www.tutorsforum.co.in/#">Know what’s more for you</a>
                    </div>
                </div>
            </div><img src={study} alt="For Students" class="w-[484px] mt-10 lg:mt-0"></img>
        </div>
    </section>
  )
}

export default Study