import React, { useState } from "react";
import { auth, db } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { ref, set } from "firebase/database";
import {Button, Label, TextInput, Checkbox, Card} from "flowbite-react";
import styles from "../style";
import { NavLink } from "react-router-dom";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [grade, setgrade] = useState("");
  const [exam, setexam] = useState("");

  const navigate = useNavigate();
  const [error, setError] = useState("")
  const handleSubmit = (e) => {
    e.preventDefault();
    function onRegister() {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          set(ref(db, "users/" + userCredential.user.uid), {
            firstName: firstName,
            lastName: lastName,
            email: email,
            mob: mobile,
            address: address,
            city:city,
            grade: grade,
            exam:exam,
          });
        })
        .catch((error) =>setError(error));
      console.log(error);
        
      navigate("/dashboard");
    }
    onRegister();
  };


  return (
<div className="flex items-center justify-center p-12">

  <div className="mx-auto w-full max-w-[550px]">
    <form className="signupForm" onSubmit={handleSubmit}>
      <div className="-mx-3 flex flex-wrap">
        <div className="w-full px-3 sm:w-1/2">
          <div className="mb-5">
            <label
              htmlFor="name"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              First Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="First Name"
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
        </div>
        <div className="w-full px-3 sm:w-1/2">
          <div className="mb-5">
            <label
              htmlFor="lastname"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Last Name
            </label>
            <input
              type="text"
              name="lastname"
              placeholder="Last Name"
              onChange={(e) => setLastName(e.target.value)}
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
        </div>
      </div>

      <div className="mb-5">
        <label
          className="mb-3 block text-base font-medium text-[#07074D]"
        >
          Email
        </label>
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>

      <div className="mb-5">
        <label
          className="mb-3 block text-base font-medium text-[#07074D]"
        >
          Class
        </label>
        <input
          type="number"
          name="classname"
          placeholder="10"
          onChange={(e) => setgrade(e.target.value)}
          min="0"
          className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>

      <div className="-mx-3 flex flex-wrap">
        <div className="w-full px-3 sm:w-1/2">
          <div className="mb-5">
            <label
              htmlFor="date"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Date of Birth
            </label>
            <input
              type="date"
              name="date"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
        </div>

      </div>
      <div className="w-full ">
          <div className="mb-5">
            <label
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Mobile number
            </label>
            <input
              type="number"
              name="mobile"
              placeholder="mobile no"
              onChange={(e) => setMobile(e.target.value)}
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
        </div>

      <div className="mb-5">
        <label className="mb-3 block text-base font-medium text-[#07074D]">
          Exam Preparing htmlFor?
        </label>
        <div className="flex items-center space-x-6">
          <div className="flex items-center">
            <input
              type="radio"
              name="radio1"
              className="h-5 w-5"
              onChange={(e) => setexam("JEE")}
            />
            <label
              htmlFor="radioButton1"
              className="pl-3 text-base font-medium text-[#07074D]"
              
            >
              JEE
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="radio"
              name="radio1"
              className="h-5 w-5"
              onChange={(e) => setexam("NEET")}
            />
            <label
              htmlFor="radioButton2"
              className="pl-3 text-base font-medium text-[#07074D]"
              
            >
              NEET
            </label>
          </div>
        </div>

        <div className="w-full mt-4 ">
          <div className="mb-5">
            <label
              htmlFor="Password"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Password
            </label>
            <input
              type="password"
              name="Password"
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
        </div>

      </div>

      <div>
        <button
          className={`hover:shadow-htmlForm rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none`}
        >
          Submit
        </button>
      </div>
    </form>
  </div>
  
</div>

  );
};

export default SignUp;