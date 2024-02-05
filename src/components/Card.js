import React from 'react'
import {Card,Rating} from "flowbite-react"
import { Button } from 'flowbite-react'


function CardC( {img,name,info,sub} ) {
  return (
    <Card className='shadow-lg' >
    <div className="flex  justify-center flex-col items-center pb-2 ">
      <img
        className="mb-3 h-12 w-18 rounded-full "
        src={img}
        alt={name}
      />
            {/* <Rating>
            <Rating.Star />
            <Rating.Star />
            <Rating.Star />
            <Rating.Star />
            <Rating.Star filled={false} />
            </Rating> */}
      <h5 className="mb-1 text-lg font-medium text-gray-900 dark:text-white">
        {name}
      </h5>
      <span className="text-sm text-gray-500 dark:text-gray-400">
      {info}
      </span>
      <span className="text-sm text-gray-500 dark:text-gray-400">
      {sub}
      </span>
      <div className="mt-2 flex space-x-3 lg:mt-4">
        <button
          href="#"
          className="inline-flex items-center rounded-lg bg-blue-700 py-2 px-4 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Book Class
        </button>
        <button
          href="#"
          className="inline-flex items-center rounded-lg border border-gray-300 bg-white py-2 px-4 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
        >
          Know More
        </button>
      </div>
    </div>
  </Card>
  )
}

export default CardC