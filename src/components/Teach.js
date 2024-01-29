import React from 'react'
import { Card,Button } from 'flowbite-react'
import { teach,study } from '../assets'


function Teach() {
  return (
    <section id="For-Tutors" class="bg-white">
        <div class="xl:max-w-screen md:w-5/6 mx-auto w-full lg:py-28 py-16  text-primary px-4 md:px-0 flex justify-between items-center flex-col lg:flex-row">
            <div class="lg:w-55p w-full">
                <div class="mb-10">
                    <h2 class="text-green-dark font-medium text-base uppercase tracking-wider mb-4">
                        For Tutors</h2>
                    <h3 class="text-gray-gray9 text-2xl lg:text-5xl lg:leading-[58px] mb-2 tracking-tight">
                        Teach What You Love. Faster.</h3>
                    <p class="text-base md:text-xl text-gray-gray7 font-light">Tutors Forum
                        student-tutor matching is based on skills &amp; credibility, not popularity.
                    </p>
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 my-10 text-left">
                    <div class="flex border border-primaryBorder rounded-lg p-4 bg-white"><svg xmlns="http://www.w3.org/2000/svg" class="text-green-bright flex-shrink-0" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M5 12l5 5l10 -10"></path>
                        </svg>
                        <div class="ml-2">
                            <h4 class="font-semibold text-base text-primary tracking-normal">Proof
                                of work</h4>
                            <p class="text-sm font-normal text-gray tracking-normal">Showcase your proof of work to potential students</p>
                        </div>
                    </div>
                    <div class="flex border border-primaryBorder rounded-lg p-4 bg-white"><svg xmlns="http://www.w3.org/2000/svg" class="text-green-bright flex-shrink-0" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M5 12l5 5l10 -10"></path>
                        </svg>
                        <div class="ml-2">
                            <h4 class="font-semibold text-base text-primary tracking-normal">Jobs in your locality
                            </h4>
                            <p class="text-sm font-normal text-gray tracking-normal">Search and apply for jobs of your choice in your own locality</p>
                        </div>
                    </div>
                    <div class="flex border border-primaryBorder rounded-lg p-4 bg-white"><svg xmlns="http://www.w3.org/2000/svg" class="text-green-bright flex-shrink-0" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M5 12l5 5l10 -10"></path>
                        </svg>
                        <div class="ml-2">
                            <h4 class="font-semibold text-base text-primary tracking-normal">Learning Management System</h4>
                            <p class="text-sm font-normal text-gray tracking-normal">Track and report your students progress with our inbuilt tools</p>
                        </div>
                    </div>
                    <div class="flex border border-primaryBorder rounded-lg p-4 bg-white"><svg xmlns="http://www.w3.org/2000/svg" class="text-green-bright flex-shrink-0" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M5 12l5 5l10 -10"></path>
                        </svg>
                        <div class="ml-2">
                            <h4 class="font-semibold text-base text-primary tracking-normal">Set your own teaching conditions</h4>
                            <p class="text-sm font-normal text-gray tracking-normal">Share your passion with the world and be rewarded for it.</p>
                        </div>
                    </div>
                </div>
                <div class="flex lg:flex-row-reverse flex-col items-center">

                    <div class="flex justify-center ml-4"><a
                    href="/signupt"
                    className="inline-flex items-center rounded-lg bg-blue-700 py-2 px-4 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Join as a Tutor
                    </a>
                    </div>
                    <div class="border-b-2 border-green-light  lg:mt-0 mt-4 w-fit"><a class="text-sm font-semibold text-primary group" href="#">Know what’s more for
                            tutors</a></div>

                </div>
            </div>
            <img src={teach} alt="For Tutors" class="w-[484px] mt-10 lg:mt-0"></img>
        </div>
    </section>
  )
}

export default Teach