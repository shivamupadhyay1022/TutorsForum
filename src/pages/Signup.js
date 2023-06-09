import React, { useState } from "react";
import { auth, db } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { ref, set } from "firebase/database";
import {Button, Label, TextInput, Checkbox, Card, FileInput} from "flowbite-react";
import { HiMail } from 'react-icons/hi';
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
  const [grade, setGrade] = useState("");
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
    <div class=" md:flex">
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
      <div class="flex md:w-1/2 justify-center py-10 items-center bg-white">
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
            <div className="mb-3 block text-base font-medium text-[#07074D]">
              <Label
                htmlFor="email4"
                value="Your email"
              />
            </div>
            <TextInput
              id="email4"
              placeholder="name@email.com"
              required
              rightIcon={HiMail}
              type="email"
            />
          </div>

            <div className="mb-5">
            <div className="mb-3 block text-base font-medium text-[#07074D]">
              <Label
                htmlFor="number"
                value="Class"
              />
            </div>
            <TextInput
              id="email4"
              placeholder="Class"
              required
              onChange={(e) => setEmail(e.target.value)}
              type="number"
            />
            </div>

            <div className="mb-5">
            <div className="mb-3 block text-base font-medium text-[#07074D]">
              <Label
                htmlFor="date"
                value="Date of Birth"
              />
            </div>
            <TextInput
              id="email4"
              required
              type="date"
            />
            </div>

              
            <div className="mb-5">
            <div className="mb-3 block text-base font-medium text-[#07074D]">
              <Label
                htmlFor="mobile"
                value="Mobile No"
              />
            </div>
            <TextInput
              id="mobile"
              required
              placeholder="mobile no"
              onChange={(e) => setMobile(e.target.value)}
              type="text"
            />
            </div>

            <div className="mb-5">
              <label className="mb-3 block text-base font-medium text-[#07074D]">
                Exam Preparing For?
              </label>
              <div className="flex items-center space-x-6">
                <div className="flex items-center mb-5">
                  <input
                    type="radio"
                    name="radio1"
                    className="h-5 w-5 "
                    onChange={(e) => setexam("JEE")}
                  />
                  <label
                    htmlFor="radioButton1"
                    className="pl-3 text-base font-medium text-[#07074D]"
                    
                  >
                    JEE
                  </label>
                </div>
                <div className="flex items-center mb-5">
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

            <div className="mb-5">
              <div className="mb-3 block text-base font-medium text-[#07074D]">
                <Label
                  htmlFor="mobile"
                  value="Password"
                />
              </div>
              <TextInput
                id="password"
                required
              
                placeholder="password"
                onChange={(e) => setMobile(e.target.value)}
                type="password"
              />
            </div>
            </div>

            <div
      className="max-w-md mb-5"
      id="fileUpload"
    >
      <div className="mb-2 block">
        <Label
          htmlFor="file"
          value="Upload file"
        />
      </div>
      <FileInput
        helperText="A profile picture is useful to confirm your are logged into your account"
        id="file"
      />
    </div>

            <div
            className="flex max-w-md flex-col gap-4"
            id="checkbox"
          >
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
                  I agree with the 
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

  );
};

export default SignUp;