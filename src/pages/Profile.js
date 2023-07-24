import React, { useState } from 'react'
import NavbarD from '../components/NavbarD'
import SideNav2 from '../components/SideNav2'
import { Card,Label, Radio } from 'flowbite-react'
import { nitish } from '../assets'
import toast, { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import { profileValidation } from '../helper/validate';
import convertToBase64 from '../helper/convert';
import useFetch from '../hooks/fetch.hook';
import { updateUser } from '../helper/helper'
import { useNavigate } from 'react-router-dom'

import styles from '../styles/Username.module.css';
import extend from '../styles/Profile.module.css'

export default function Profile() {

    const [file, setFile] = useState();
    const [{ isLoading, apiData, serverError }] = useFetch();
    const navigate = useNavigate()

    const formik = useFormik({
        initialValues: {
            firstName: apiData?.firstName || '',
            lastName: apiData?.lastName || '',
            email: apiData?.email || '',
            mobile: apiData?.mobile || '',
            address: apiData?.address || ''
        },
        enableReinitialize: true,
        validate: profileValidation,
        validateOnBlur: false,
        validateOnChange: false,
        onSubmit: async values => {
            values = await Object.assign(values, { profile: file || apiData?.profile || '' })
            let updatePromise = updateUser(values);

            toast.promise(updatePromise, {
                loading: 'Updating...',
                success: <b>Update Successfully...!</b>,
                error: <b>Could not Update!</b>
            });

        }
    })

    /** formik doensn't support file upload so we need to create this handler */
    const onUpload = async e => {
        const base64 = await convertToBase64(e.target.files[0]);
        setFile(base64);
    }

    // logout handler function
    function userLogout() {
        localStorage.removeItem('token');
        navigate('/')
    }


    return (
        <div>

            <SideNav2 />


            <div class="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
                <div class="sticky z-10 top-0 h-16 border-b bg-white ">
                    <div class="px-6 flex items-center justify-between space-x-4 2xl:container">
                        <h5 class="hidden text-2xl mt text-gray-600 font-medium lg:block">Dashboard</h5>

                        <div class=" lg:hidden ">
                            <NavbarD />
                        </div>

                    </div>
                </div>
                {/* Profile section */}
                <div class="px-6 pt-6 2xl:container flex flex-col">
                    <div className="container mx-auto">

                        <Toaster position='top-center' reverseOrder={false}></Toaster>

                        <div className='flex justify-center items-center h-screen'>
                            <div className={`${styles.glass} ${extend.glass}`} style={{ width: "45%", paddingTop: '3em' }}>

                                <div className="title flex flex-col items-center">
                                    <h4 className='text-5xl font-bold'>Profile</h4>
                                    <span className='py-4 text-xl w-2/3 text-center text-gray-500'>
                                        You can update the details.
                                    </span>
                                </div>

                                <form className='py-1' onSubmit={formik.handleSubmit}>
                                    <div className='profile flex justify-center py-4'>
                                        <label htmlFor="profile">
                                            <img src={apiData?.profile || file || nitish} className={`${styles.profile_img} ${extend.profile_img}`} alt="avatar" />
                                        </label>

                                        <input onChange={onUpload} type="file" id='profile' name='profile' />
                                    </div>

                                    <div className="textbox flex flex-col items-center gap-6">
                                        <div className="name flex w-3/4 gap-10">
                                            <input {...formik.getFieldProps('firstName')} className={`${styles.textbox} ${extend.textbox}`} type="text" placeholder='FirstName' />
                                            <input {...formik.getFieldProps('lastName')} className={`${styles.textbox} ${extend.textbox}`} type="text" placeholder='LastName' />
                                        </div>

                                        <div className="name flex w-3/4 gap-10">
                                            <input {...formik.getFieldProps('mobile')} className={`${styles.textbox} ${extend.textbox}`} type="text" placeholder='Mobile No.' />
                                            <input {...formik.getFieldProps('email')} className={`${styles.textbox} ${extend.textbox}`} type="text" placeholder='Email*' />
                                        </div>
                                        <fieldset
                                            className="flex max-w-md flex-col gap-4"
                                            id="radio"
                                        >
                                            <legend className="mb-4">
                                                Choose your favorite country
                                            </legend>
                                            <div className="flex items-center gap-2">
                                                <Radio
                                                    defaultChecked
                                                    id="united-state"
                                                    name="countries"
                                                    value="USA"
                                                />
                                                <Label htmlFor="united-state">
                                                    United States
                                                </Label>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Radio
                                                    id="germany"
                                                    name="countries"
                                                    value="Germany"
                                                />
                                                <Label htmlFor="germany">
                                                    Germany
                                                </Label>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Radio
                                                    id="spain"
                                                    name="countries"
                                                    value="Spain"
                                                />
                                                <Label htmlFor="spain">
                                                    Spain
                                                </Label>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Radio
                                                    id="uk"
                                                    name="countries"
                                                    value="United Kingdom"
                                                />
                                                <Label htmlFor="uk">
                                                    United Kingdom
                                                </Label>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Radio
                                                    disabled
                                                    id="china"
                                                    name="countries"
                                                    value="China"
                                                />
                                                <Label
                                                    disabled
                                                    htmlFor="china"
                                                >
                                                    <p>
                                                        China (disabled)
                                                    </p>
                                                </Label>
                                            </div>
                                        </fieldset>


                                        <input {...formik.getFieldProps('address')} className={`${styles.textbox} ${extend.textbox}`} type="text" placeholder='Address' />
                                        <button className={styles.btn} type='submit'>Update</button>


                                    </div>

                                    <div className="text-center py-4">
                                        <span className='text-gray-500'>come back later? <button onClick={userLogout} className='text-red-500' to="/">Logout</button></span>
                                    </div>

                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
