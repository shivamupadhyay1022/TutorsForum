import React from 'react'
import { Accordion } from 'flowbite-react'

function Faq() {
  return (<div className='ml-10 mr-10 mt-8 ' >
    <h2 class="text-3xl w-full text-center items-center justify-center font-medium">
              FAQs
              <a href="#" class=""
                ><span
                  class="text-salmon font-medium text-lg ml-2 hover:underline"
                  >See all
                </span></a
              >
            </h2>
    <Accordion alwaysOpen={true}>
  <Accordion.Panel>
    <Accordion.Title>
    Strategic Planning
    </Accordion.Title>
    <Accordion.Content>
      <p className="mb-2 text-gray-500 dark:text-gray-400">
      A unique course plan is generated as per your needs.
      </p>
      
    </Accordion.Content>
  </Accordion.Panel>
  <Accordion.Panel>
    <Accordion.Title>
    Continuous Counselling
    </Accordion.Title>
    <Accordion.Content>
      <p className="mb-2 text-gray-500 dark:text-gray-400">
      Countinuous counselling and feedback for course correction
      </p>
    </Accordion.Content>
  </Accordion.Panel>
  <Accordion.Panel>
    <Accordion.Title>
      One on One Classes
    </Accordion.Title>
    <Accordion.Content>
      <p className="mb-2 text-gray-500 dark:text-gray-400">
      One on One classes for extreme focus and improvement
      </p>
     
    </Accordion.Content>
  </Accordion.Panel>
</Accordion>
</div>
  )
}

export default Faq