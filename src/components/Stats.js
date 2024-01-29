import React from 'react'
import { Card, Rating } from 'flowbite-react'
import styles from "../style";
import { nitish, ashish } from '../assets';
import CardC from './Card';

function Stats() {
  return (

    <div id='services' className={`${styles.paddingY} ${styles.flexCenter} flex-row relative `}>
      <div className='flex flex-wrap align-items-center justify-center w-full  relative z-[1] sm:flex hidden'>
        <div className=' align-items-center justify-center w-full  relative z-[1]'>
          <div class=" w-full mb-8 text-center items-center justify-center font-medium" >
          <h2 class="text-3xl ">
            Our Best Tutors
            <a href="#" class="">
              <span class="text-salmon font-medium text-lg ml-2 hover:underline text-blue">
                See all
              </span>
            </a>
          </h2>
          <p>
            Learn from the best amongst the best for the future you adorn
          </p>
          </div>
          
          <CardC
            img={nitish}
            name={"Nitish Kumar"}
            info=<div> B.E.(Hons) BITS Pilani <br />10+ YOE in Chemistry </div> />
          {/* ------------ */}
          <CardC
            img={nitish}
            name={"Nitish Kumar"}
            info=<div> B.E.(Hons) BITS Pilani <br />10+ YOE in Chemistry </div> />
          {/* ------------ */}
          <CardC
            img={nitish}
            name={"Nitish Kumar"}
            info=<div> B.E.(Hons) BITS Pilani <br />10+ YOE in Chemistry </div> />
          {/* ------------ */}
          <CardC
            img={nitish}
            name={"Nitish Kumar"}
            info=<div> B.E.(Hons) BITS Pilani <br />10+ YOE in Chemistry </div> />
          {/* ------------ */}{/* ------------ */}
        </div>
        <div className='flex flex-wrap align-items-center justify-center w-full  relative z-[1]'>
          <CardC
            img={ashish}
            name={"Ashish Kumar"}
            info=<div>  B.Tech. IIT Bombay<br />7+ YOE in Physics </div> />
          <CardC
            img={ashish}
            name={"Ashish Kumar"}
            info=<div>  B.Tech. IIT Bombay<br />7+ YOE in Physics </div> />
          {/* ------------ */}
          <CardC
            img={ashish}
            name={"Ashish Kumar"}
            info=<div>  B.Tech. IIT Bombay<br />7+ YOE in Physics </div> />
          {/* ------------ */}
          <CardC
            img={ashish}
            name={"Ashish Kumar"}
            info=<div>  B.Tech. IIT Bombay<br />7+ YOE in Physics </div> />
          {/* ------------ */}



        </div>
      </div>
      <div class="container px-4 flex-grow w-full  sm:hidden py-4 sm:py-16 mx-auto px-0">

        <div class="mx-auto w-full md:w-4/5 px-4">
          <div class="container my-8">
            <div class="flex justify-between items-center mb-4">
              <h2 class="text-3xl font-medium">
                Our Best Tutors
                <a href="#" class=""
                ><span
                  class="text-salmon font-medium text-lg ml-2 hover:underline"
                >See all
                  </span></a
                >
              </h2>
              <div>
                <button
                  class="cursor-pointer text-xl mx-1 text-indigo-600 font-bold"
                >
                  {" <<"}
                </button>
                <button
                  class="cursor-pointer text-xl mx-1 text-indigo-600 font-bold"
                >
                  {">>"}
                </button>
              </div>
            </div>
            <div
              id="scrollContainer"
              class="flex flex-no-wrap overflow-x-scroll scrolling-touch items-start mb-8">
              <CardC
                img={nitish}
                name={"Nitish Kumar"}
                info=<div> B.E.(Hons) BITS Pilani <br />10+ YOE in Chemistry </div> />
              {/* ------------ */}
              <CardC
                img={nitish}
                name={"Nitish Kumar"}
                info=<div> B.E.(Hons) BITS Pilani <br />10+ YOE in Chemistry </div> />
              {/* ------------ */}
              <CardC
                img={nitish}
                name={"Nitish Kumar"}
                info=<div> B.E.(Hons) BITS Pilani <br />10+ YOE in Chemistry </div> />
              {/* ------------ */}{/* ------------ */}
              <CardC
                img={ashish}
                name={"Ashish Kumar"}
                info=<div>  B.Tech. IIT Bombay<br />7+ YOE in Physics </div> />
              <CardC
                img={ashish}
                name={"Ashish Kumar"}
                info=<div>  B.Tech. IIT Bombay<br />7+ YOE in Physics </div> />
              {/* ------------ */}
              <CardC
                img={ashish}
                name={"Ashish Kumar"}
                info=<div>  B.Tech. IIT Bombay<br />7+ YOE in Physics </div> />
              {/* ------------ */}{/* ------------ */}
              <CardC
                img={nitish}
                name={"Nitish Kumar"}
                info=<div> B.E.(Hons) BITS Pilani <br />10+ YOE in Chemistry </div> />
              {/* ------------ */}
              <CardC
                img={nitish}
                name={"Nitish Kumar"}
                info=<div> B.E.(Hons) BITS Pilani <br />10+ YOE in Chemistry </div> />
              {/* ------------ */}
              <CardC
                img={nitish}
                name={"Nitish Kumar"}
                info=<div> B.E.(Hons) BITS Pilani <br />10+ YOE in Chemistry </div> />
              {/* ------------ */}{/* ------------ */}
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Stats