import React, {useState,useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { passwordValidate } from '../helper/validate'
import useFetch from '../hooks/fetch.hook';
import { verifyPassword } from '../helper/helper'
import {Button, Label, TextInput, Checkbox, Card} from "flowbite-react";
import { HiMail,HiPassword,HiCog } from 'react-icons/hi';
import { useFormik } from "formik";
import convertToBase64 from "../helper/convert";
import { registerUser } from "../helper/helper";
import { registerValidation } from "../helper/validate";
import toast, { Toaster } from 'react-hot-toast';
import { useAuthStore } from  '../store/store'
import styles from '../styles/Username.module.css';
import { generateOTP, verifyOTP } from '../helper/helper';

function Recovery() {

  const { username } = useAuthStore(state => state.auth);
  const [OTP, setOTP] = useState();
  const navigate = useNavigate()

  useEffect(() => {
    generateOTP(username).then((OTP) => {
      console.log(OTP)
      if(OTP) return toast.success('OTP has been send to your email!');
      return toast.error('Problem while generating OTP!')
    })
  }, [username]);

  async function onSubmit(e){
    e.preventDefault();
    try {
      let { status } = await verifyOTP({ username, code : OTP })
      if(status === 201){
        toast.success('Verify Successfully!')
        return navigate('/reset')
      }  
    } catch (error) {
      return toast.error('Wront OTP! Check email again!')
    }
  }

  // handler of resend OTP
  function resendOTP(){

    let sentPromise = generateOTP(username);

    toast.promise(sentPromise ,
      {
        loading: 'Sending...',
        success: <b>OTP has been send to your email!</b>,
        error: <b>Could not Send it!</b>,
      }
    );

    sentPromise.then((OTP) => {
      console.log(OTP)
    });
    
  }

  return (
    <div class="h-screen md:flex">
            <Toaster position='top-center' reverseOrder={false}></Toaster>

    <div
      class="relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-blue-800 to-purple-700 i justify-around items-center hidden">
      <div>
        <h1 class="text-white font-bold text-4xl font-sans">TutorsForum</h1>
        <p class="text-white mt-1">All your tutotors need at your fingerpoint</p>
        <button type="submit" class="block w-28 bg-white text-indigo-800 mt-4 py-2 rounded-2xl font-bold mb-2">Read More</button>
      </div>
      <div class="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
      <div class="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
      <div class="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
      <div class="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
    </div>
    <div class="flex h-full md:w-1/2 justify-center py-10 items-center bg-white">
    <div className="flex items-center justify-center p-12">

      <div className="mx-auto w-full min-w-[350px]">
        <form className="signupForm" onSubmit={onSubmit}>


          <div className="mb-5 w-full mx-auto">
          <div className="mb-3 block text-base font-medium text-[#07074D]">
            <Label
              htmlFor="otp"
              value="OTP"
            />
          </div>
          <TextInput
            id="otp"
            required
            onChange={(e) => setOTP(e.target.value) }
            rightIcon={HiMail}
            type="otp"
          />
        </div>


          <div
          className="flex max-w-md flex-col gap-4"
          id="checkbox"
        >
          <div className="flex items-center gap-2 mb-5">
              <p>
                Didn't recieve OTP
              </p>
              <button
                className="text-cyan-600 pl-1 hover:underline dark:text-cyan-500"
                onClick={resendOTP}>resend

              </button>
          </div>
        </div>
          <div>
            <button
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

export default Recovery