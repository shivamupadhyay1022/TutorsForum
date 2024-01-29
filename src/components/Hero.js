import styles from "../style";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";



const Hero = () => {

  const navigate = useNavigate();

  const navigateSignup = () =>{
    navigate('/signup2')
  }

  const navigateSignin = () =>{
    navigate('/signin2')
  }

  return (
    <section id="hero" class="xl:max-w-screen md:w-5/6 mx-auto w-full pt-12  pb-6 mt-2 lg:mt-16 text-primary">
      <div class="w-fit-content mx-auto">
        <h1 class="w-full font-bold md:text-5xl lg:px-0 px-2 text-center text-gray-800 word-spacing-4 mb-4">
          <div class="block title show text-4xl sm:text-7xl">Find&nbsp;<span class="w-fit-content text-transparent bg-clip-text bg-gradient-to-r from-[#50b5d1] to-[#9adbe6] lg:inline">Your</span>&nbsp;Perfect
            Tutor. </div>
        </h1>
      </div>
      <div class="text-center self-center w-full">
        <p class="mx-auto text-gray-gray7 text-base lg:text-2xl leading-140 font-light max-w-4xl appear delay-400 lg:w-full w-4/5">
          with India's largest professional network of tutors.</p>
          <button class="px-6 mt-4 py-2 text-blue-100 rounded bg-gradient-to-r from-blue-600 to-blue-400" onClick={navigateSignin}>SignIn</button>
          <button class=" ml-2 mt-4  text-decoration-line: underline " onClick={navigateSignup}>SignUp</button>
      </div>
    </section>
  );
};

export default Hero;
