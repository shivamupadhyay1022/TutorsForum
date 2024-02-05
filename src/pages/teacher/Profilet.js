import React, { useContext, useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import { AuthContext } from '../../components/AuthProvider';
import { Avatarpic, ashish, nitish } from '../../assets';
import { Avatar, Button, Label, Radio } from 'flowbite-react';
import { ref, onValue, update } from "firebase/database";
import { db, auth } from "../../firebase";
import convertToBase64 from '../../helper/convert';
import { signOut } from "firebase/auth";
import SideNavt from './SideNavt';
import ReactLoading from  "react-loading"

function Profilet() {

    const { currentUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const [loading, setLoading] = useState();
    const [file, setFile] = useState();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [mobile, setMobile] = useState("");
    const [email, setEmail] = useState("");
    const [subjects, setSubjects] = useState("");
    const [dob, setDob] = useState("");
    const [grade, setGrade] = useState("");
    const [bio, setBio] = useState("");
    const [gender, setGender] = useState("");
    let name = "Name"

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
            const starCountRef = ref(db, "tutors/" + currentUser.uid);
            setLoading(true);
            await onValue(starCountRef, (snapshot) => {
                if (snapshot.exists()) {
                    console.log(snapshot.data)
                    var data = snapshot.val();
                    setFirstName(data.firstName);
                    setEmail(data.email);
                    setDob(data.dob);
                    setMobile(data.mob);
                    setLastName(data.lastName);
                    setSubjects(data.subject);
                    setGrade(data.grade);
                    setBio(data.bio);
                    setGender(data.gender)
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
            <SideNavt />
            {loading ?
                <div className='h-screen flex  items-center justify-center  '>
                    <ReactLoading type='bubbles'   width={'20%'} color={'#3b82f6'} />
                </div>
                :
                <div className='pt-20 md:pl-20'>

                    {/* Profile section */}



                    <div className=" h-screen flex-row justify-center ">
                        <img className='h-40 w-40 rounded-full border-gray-400 border-4 ' src={file || ashish} />
                        <h1 className='text-xl md:text-3xl mt-6'>
                            {firstName + " " + lastName || name}
                        </h1>
                        <h1 className='text-lg md:text-xl mt-4'>
                            {"Class : " + grade}
                        </h1>
                        <h1 className='text-lg md:text-xl mt-4'>
                            {"School : " + grade}
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
                        <div>
                        <h1 className='text-sm md:text-lg mt-4'>
                                Subjects: 
                            </h1>
                            <h1 className='text-sm md:text-lg mt-4'>
                                {subjects}
                            </h1>
                            <h1 className='text-sm md:text-lg mt-4'>
                                Bio
                            </h1>
                            <h1 className='text-sm md:text-lg mt-4'>
                                {bio}
                            </h1>
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

export default Profilet