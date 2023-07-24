import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast';
import { passwordValidate } from '../helper/validate'
import useFetch from '../hooks/fetch.hook';
import { useAuthStore } from '../store/store'
import { verifyPassword } from '../helper/helper'
import styles from '../styles/Username.module.css';
import { ref, set } from "firebase/database";
import {Button, Label, TextInput, Checkbox, Card} from "flowbite-react";
import { HiMail,HiPassword,HiCog } from 'react-icons/hi';
import { useFormik } from "formik";
import convertToBase64 from "../helper/convert";
import { registerUser } from "../helper/helper";
import { registerValidation } from "../helper/validate";


export default function Password() {

  const navigate = useNavigate()
  const { username } = useAuthStore(state => state.auth)
  const [{ isLoading, apiData, serverError }] = useFetch(`/user/${username}`)

  const formik = useFormik({
    initialValues : {
      password : 'admin@123'
    },
    validate : passwordValidate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit : async values => {
      
      let loginPromise = verifyPassword({ username, password : values.password })
      toast.promise(loginPromise, {
        loading: 'Checking...',
        success : <b>Login Successfully...!</b>,
        error : <b>Password Not Match!</b>
      });

      loginPromise.then(res => {
        let { token } = res.data;
        localStorage.setItem('token', token);
        navigate('/profile')
      })
    }
  })

  if(isLoading) return <h1 className='text-2xl font-bold'>isLoading</h1>;
  if(serverError) return <h1 className='text-xl text-red-500'>{serverError.message}</h1>

  return (
    <div class="h-screen md:flex">
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
        <form className="signupForm" onSubmit={formik.handleSubmit}>


          <div className="mb-5 w-full mx-auto">
          <div className="mb-3 block text-base font-medium text-[#07074D]">
            <Label
              htmlFor="password"
              value="Password"
            />
          </div>
          <TextInput
            id="password"
            placeholder="admin@123"
            required
            {...formik.getFieldProps('password')} className={styles.textbox}
            rightIcon={HiMail}
            type="password"
          />
        </div>


          <div
          className="flex max-w-md flex-col gap-4"
          id="checkbox"
        >
                        <div className="flex">
                <p>
                  Forgot password ?
                </p>
                <a
                className="text-cyan-600 pl-1 hover:underline dark:text-cyan-500"
                href="/recovery">
                {' '}  Reset
                </a>
              </div>
          <div className="flex items-center gap-2 mb-5">
            <Checkbox
              defaultChecked
              id="accept"
            />
            <Label
              className="flex"
              htmlFor="agree"
            >
              <p>
                Keep me logged in 
              </p>
              <a
                className="text-cyan-600 pl-1 hover:underline dark:text-cyan-500"
                href="/termsandcontions"
              >
                <p>
                {" "}terms and conditions
                </p>
              </a>
            </Label>
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
