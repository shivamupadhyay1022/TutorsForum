import React, { useContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../components/AuthProvider';
import { Avatarpic, ashish, nitish } from '../../assets';
import { Button, Label, Radio } from 'flowbite-react';
import { ref, onValue, update } from "firebase/database";
import { db, auth } from "../../firebase";
import convertToBase64 from '../../helper/convert';
import { signOut } from "firebase/auth";
import NavbarD from '../../components/NavbarD'
import { Toaster } from 'react-hot-toast';
import ReactLoading from 'react-loading'

import styles from '../../styles/Username.module.css';
import extend from '../../styles/Profile.module.css'
import SideNavs from './SideNavs';


function Profiles() {

    const { currentUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const [loading, setLoading] = useState();
    const [file, setFile] = useState();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [mobile, setMobile] = useState("");
    const [email, setEmail] = useState("");
    const [grade, setGrade] = useState("");
    const [exam, setexam] = useState("");
  const [dob, setDob] = useState("")
  const [gender, setGender] = useState("");

    const handlesignOut = () => {
        if (currentUser) {
            signOut(auth);
            navigate("/");
          } else {
            navigate("/choose");
          }
    };
    const fetchdata = async () => {
        if (currentUser) {
            const starCountRef = ref(db, "users/" + currentUser.uid);
            setLoading(true);
            await onValue(starCountRef, (snapshot) => {
                if (snapshot.exists()) {
                    console.log(snapshot.data)
                    var data = snapshot.val();
                    setFirstName(data.firstName);
                    setEmail(data.email);
                    setMobile(data.mob);
                    setLastName(data.lastName);
                    setGrade(data.grade);
                    setexam(data.exam);
                    setFile(data.file);
                    setLoading(false)
                }
            });
        }
    }
    useEffect(() => {
        fetchdata();
    }, [currentUser]);

    const onUpload = async e => {
        const base64 = await convertToBase64(e.target.files[0]);
        setFile(base64);
    }
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     function onRegister() {
    //       createUserWithEmailAndPassword(auth, email, password)
    //         .then((userCredential) => {
    //           set(ref(db, "users/" + userCredential.user.uid), {
    //             firstName: firstName,
    //             lastName: lastName,
    //             email: email,
    //             mob: mobile,
    //             grade: grade,
    //             exam: exam,
    //           });
    //         })
    //         .catch((error) => setError(error));
    //       console.log(error);

    //       navigate("/dashboard2");
    //     }
    //     onRegister();
    //   };

    return (
        <center>

            <SideNavs />
            {loading ?
                <div className='h-screen flex  items-center justify-center  '>
                    <ReactLoading type='bubbles'   width={'20%'} color={'#3b82f6'} />
                </div>
                :
                <div class=" pt-20 md:pl-20">

                    {/* Profile section */}
                    <div className=" h-screen flex-row justify-center ">
                        <img className='h-40 w-40 rounded-full border-gray-400 border-4 ' src={file || ashish} />
                        <h1 className='text-xl md:text-3xl mt-6'>
                            {firstName + " " + lastName }
                        </h1>
                        <h1 className='text-lg md:text-xl mt-4'>
                            {"Class : " + grade}
                        </h1>
                        <h1 className='text-lg md:text-xl mt-4'>
                            {"School : " + grade}
                        </h1>
                        <h1 className='text-lg md:text-xl mt-4'>
                            {"Exam Preparing for : " + exam}
                        </h1>
                        <div className=''>
                            <h1 className='text-gray-600'>
                                Personal Information
                            </h1>
                        </div>
                        <div className='grid grid-cols-2' >
                            <div>
                                <h1 className='text-sm md:text-lg mt-4'>
                                    {"Date of Birth : " + dob}
                                </h1>
                                <h1 className='text-sm md:text-lg mt-4'>
                                    {"Email : " + email}
                                </h1>
                            </div>
                            <div>

                                <h1 className='text-sm md:text-lg mt-4'>
                                    {"Gender : " + gender}
                                </h1>
                                <h1 className='text-sm md:text-lg mt-4'>
                                    {"Phone : " + mobile}
                                </h1>
                            </div>


                        </div>
                        
                        <Button
                        className=''
                        // onClick={}
                        >
                            Edit
                        </Button>
                    </div>
                </div>}


        </center>
    )
}

export default Profiles