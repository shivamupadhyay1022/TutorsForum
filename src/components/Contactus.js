import React,{useRef} from 'react'
import emailjs from '@emailjs/browser';
import { Button, Label, TextInput, Textarea } from "flowbite-react";
import { GrUserManager, GrMail } from 'react-icons/gr';
import { Link, useNavigate } from 'react-router-dom'
import { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';

function Contactus() {

    const navigate = useNavigate();
    const form = useRef();
    const sendEmail = (e) => {
        
        e.preventDefault();
    
        emailjs.sendForm('service_73jdu6c', 'template_cy8fl1j', form.current, 'GK6dIs6l3udHayZYY')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };

    const formik = useFormik({
        initialValues: {
            user_name: 'example123',
            user_email: 'example@email.com',
            message: 'Hello'
        },
        validateOnBlur: false,
        validateOnChange: false,
        onSubmit: async values => {
            console.log(values)
        }
    })

    return (
    
        <div class="h-screen md:flex">
            <Toaster position='top-center' reverseOrder={false}></Toaster>

            <div
                class="relative overflow-hidden md:flex w-1/2 i justify-around items-center hidden">
                <div>
                    <h1 class=" font-bold text-4xl font-sans">ContactUs</h1>
                    <p class=" mt-1">Message us with your query and we will get back to you as soon as possible!</p>
                </div>
                <div class="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
                <div class="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
            </div>
            <div class="flex h-full md:w-1/2 justify-center items-center bg-white">
                <div className="flex items-center justify-center p-12">

                    <div className="mx-auto w-full min-w-[350px]">
                        <h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white lg:hidden ">
                            {/* <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Contact</span>  */}
                            Contact Us
                        </h1>
                        <form  ref={form} onSubmit={sendEmail}>
                            <div className="mb-5 w-full mx-auto">
                                <div className="mb-3 block text-base font-medium text-[#07074D]">
                                    <Label
                                        value="Your Name"
                                    />
                                </div>
                                <TextInput
                                    id="username"
                                    placeholder="example123"
                                    name='user_name'
                                    required
                                    {...formik.getFieldProps('user_name')} className=' mb-4 '
                                    rightIcon={GrMail}
                                    type="username"
                                />
                                <div className="mb-3 block text-base font-medium text-[#07074D]">
                                    <Label
                                        value="Your Email"
                                    />
                                </div>
                                <TextInput
                                    id="email"
                                    placeholder="example123@email.com"
                                    name='user_email'
                                    required
                                    {...formik.getFieldProps('user_email')}
                                    rightIcon={GrUserManager}
                                    type="email"
                                />
                            </div>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="comment"
                                    value="Your message"
                                />
                            </div>
                            <Textarea
                                id="comment"
                                placeholder="Leave a comment..."
                                name='message'
                                className='mb-4'
                                {...formik.getFieldProps('message')}
                                required
                                rows={4}
                            />
                            <div>
                                <button type='submit'
                                    className={`w-full hover:shadow-htmlForm rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none`}
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default Contactus