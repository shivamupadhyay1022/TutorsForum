import React from 'react'
import { Sidebar, Avatar } from 'flowbite-react';
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from 'react-icons/hi';
import { logo, nitish } from '../assets';
import UserProfileCard from './UserProfileCard';

export default function SideNav2() {
    return (
        <Sidebar aria-label="Sidebar with multi-level dropdown example"
            className='flex ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-white transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]'>
            <Sidebar.Logo
                href="#"
                img={logo}
                imgAlt="Flowbite logo"
            >
                <p>
                    TutorsForum
                </p>
            </Sidebar.Logo>
            <Sidebar.Items>
                <Sidebar.ItemGroup>
                    <Sidebar.Item>
                    <div class="mt-8 text-center">
            <img src={nitish} alt="" class="w-10 h-10 m-auto rounded-full object-cover lg:w-28 lg:h-28" />
            <h5 class=" mt-4 text-xl font-semibold text-gray-600 lg:block">Nitish Kumar</h5>
            <span class=" text-gray-400 lg:block">Class 11 Student</span>
        </div>
                    </Sidebar.Item>
                    <Sidebar.Item
                        href="#"
                        icon={HiChartPie}
                    >
                        <p>
                            Dashboard
                        </p>
                    </Sidebar.Item>
                    <Sidebar.Item
                        href="#"
                        icon={HiViewBoards}
                    >
                        <p>
                            Kanban
                        </p>
                    </Sidebar.Item>
                    <Sidebar.Item
                        href="#"
                        icon={HiInbox}
                    >
                        <p>
                            Inbox
                        </p>
                    </Sidebar.Item>
                    <Sidebar.Item
                        href="/profile"
                        icon={HiUser}
                    >
                        <p>
                            Profile
                        </p>
                    </Sidebar.Item>
                    <Sidebar.Item
                        href="#"
                        icon={HiShoppingBag}
                    >
                        <p>
                            Products
                        </p>
                    </Sidebar.Item>
                    <Sidebar.Item
                        href="#"
                        icon={HiArrowSmRight}
                    >
                        <p>
                            Sign In
                        </p>
                    </Sidebar.Item>
                    <Sidebar.Item
                        href="#"
                        icon={HiTable}
                    >
                        <p>
                            Sign Up
                        </p>
                    </Sidebar.Item>
                </Sidebar.ItemGroup>
            </Sidebar.Items>
        </Sidebar>
    )
}



