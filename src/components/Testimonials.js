import React from 'react'
import { Carousel, Card } from 'flowbite-react'
import { ashish, nitish } from '../assets'

function Testimonials() {
  return (
    <div className="h-56 sm:h-64 px-12 xl:h-80 xl:px-24 lg:px-24 md:px-24 2xl:h-96 mb-24 ">
        <h2 class="text-3xl w-full mb-8 text-center items-center justify-center font-medium">
              Testimonials
              <a href="#" class=""
                ><span
                  class="text-salmon font-medium text-lg ml-2 hover:underline"
                  >See all
                </span></a
              >
        </h2>
    <Carousel
        slideInterval={5000}
        leftControl="<<"
        rightControl=">>">
          {/* Slide 1 */}
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-500 dark:bg-gray-700 dark:text-white">
          <Card className='w-full mr-8 ml-8'>
          <div className="flex flex-col items-center pb-10">
            <img
              className="mb-3 h-12 w-18 rounded-full shadow-lg"
              src={ashish}
              alt={"Ashish"}
            />
            <h5 className="mb-1 text-lg font-medium text-gray-900 dark:text-white">
              {"Ashish"}
            </h5>
            <span className="text-sm text-gray-500 dark:text-gray-400">
            {"Best in Market"}
            </span>
          </div>
        </Card>
          </div>
          {/* Slide 2 */}
          <div className="flex h-full items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-500 dark:bg-gray-700 dark:text-white">
          <Card className='w-full mr-8 ml-8'>
          <div className="flex flex-col items-center pb-10">
            <img
              className="mb-3 h-12 w-18 rounded-full shadow-lg"
              src={nitish}
              alt={"Nitish"}
            />
            <h5 className="mb-1 text-lg font-medium text-gray-900 dark:text-white">
              {"Nitish"}
            </h5>
            <span className="text-sm text-gray-500 dark:text-gray-400">
            {"Best in Market"}
            </span>
          </div>
        </Card>
          </div>
          {/* Slide 3 */}
          <div className="flex h-full items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-500 dark:bg-gray-700 dark:text-white">
          <Card className='w-full mr-8 ml-8'>
          <div className="flex flex-col items-center pb-10">
            <img
              className="mb-3 h-12 w-18 rounded-full shadow-lg"
              src={ashish}
              alt={"Ashish"}
            />
            <h5 className="mb-1 text-lg font-medium text-gray-900 dark:text-white">
              {"Ashish"}
            </h5>
            <span className="text-sm text-gray-500 dark:text-gray-400">
            {"Best in Market"}
            </span>
          </div>
        </Card>
          </div>
    </Carousel>
</div>
  )
}

export default Testimonials