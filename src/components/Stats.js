import React, { useEffect, useState } from 'react'
import { Card, Rating } from 'flowbite-react'
import styles from "../style";
import { nitish, ashish, Avatarpic } from '../assets';
import CardC from './Card';
import { auth, db } from "../firebase";
import { ref, onValue, update } from "firebase/database";
import 'firebase/database'
import firebase from 'firebase/compat/app';


function Stats() {
  const [teachers, setTeachers] = useState([]);
  const [data, setData] = useState([]);
  const [filteredData,setFilteredData] = useState([])



  const fetchdata = () => {
    var tutors = ref(db, "tutors/")
    tutors.once('firstname', function (snapshot) {
      console.log(snapshot.val())
    })
    // await onValue(tutors, (snap) => {
    //   if (snap.exists()) {
    //       // console.log(snap.data);
    //       const userObject = snap.val();
    //       // console.log(userObject);
    //       const name = userObject['firstname'];
    //       console.log(name);
    //       const newTeachers = [...teachers, userObject];
    //       setTeachers(newTeachers);

    //   }
    // })
  }

  useEffect(() => {
    const fetchData = async () => {
      const dataRef = ref(db, "tutors/") // Replace with your reference
      // dataRef.orderByChild('nestedObject.subject').equalTo('Chemistry')
      onValue(dataRef, (snapshot) => {
        const retrievedData = snapshot.val();
        setData(retrievedData);
      }, error => {
        console.error('Error fetching data:', error);
      });
      const filteredData = data.filter(item => item.email === 'nilesh@gma.com');
      setFilteredData(filteredData)

    };
    console.log(Object.values(data))
    fetchData();
  }, []);

  return (

    <div id='services' className={`${styles.paddingY} ${styles.flexCenter} flex-row relative `}>

      <div class="container px-4 flex-grow w-full   py-4 sm:py-16 mx-auto ">

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
              className='flex gap-2 overflow-x-scroll scrolling-touch mb-8 md:grid grid-cols-4 '>
              {/* <ul>
    {filteredData && filteredData.map(item => (
      <li key={item.id}>{item.email}</li>
    ))}
  </ul> */}
                {data && Object.values(data).map(item => (
                  <CardC
                  className = ""
                  img={item.file||Avatarpic}
                  name={item.firstName||"Nitish Kumar"}
                  info={item.email || "no info"} 
                  sub ={item.subject || "subject"}/> // Adjust based on your data structure
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Stats