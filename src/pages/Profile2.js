import React, {useContext,useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../components/AuthProvider';
import { nitish } from '../assets';
import { Label,Radio } from 'flowbite-react';
import { ref, onValue, update } from "firebase/database";
import { db,auth } from "../firebase";
import convertToBase64 from '../helper/convert';
import { signOut } from "firebase/auth";
import NavbarD from '../components/NavbarD'
import SideNav2 from '../components/SideNav2'
import { Toaster } from 'react-hot-toast';


import styles from '../styles/Username.module.css';
import extend from '../styles/Profile.module.css'

function Profile2() {
    
    const { currentUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const [file, setFile] = useState();
    
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [mobile, setMobile] = useState("");
    const [email, setEmail] = useState("");
    const [grade, setGrade] = useState("");
    const [exam, setexam] = useState("");

    const handlesignOut = () => {
        signOut(auth)
        navigate("/")
  
    };

    useEffect(() => {
        if (currentUser) {
            const starCountRef = ref(db, "users/" + currentUser.uid);
            onValue(starCountRef, (snapshot) => {
                if (snapshot.exists()) {
                    var data = snapshot.val();
                    setFirstName(data.firstName);
                    setEmail(data.email);
                    setMobile(data.mob);
                    setLastName(data.lastName);
                    setGrade(data.grade);
                    setexam(data.exam);
                    setFile(data.file);
                }
            });
        }
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
        <div>

            <SideNav2 />


            <div class="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
                <div class="sticky z-10 top-0 h-16 border-b bg-white ">
                    <div class="px-6 flex items-center justify-between space-x-4 2xl:container">
                        <h5 class="hidden text-2xl mt text-gray-600 font-medium lg:block">Dashboard</h5>

                        <div class=" lg:hidden ">
                            <NavbarD />
                        </div>

                    </div>
                </div>
                {/* Profile section */}
                <div class="px-6 pt-6 2xl:container flex flex-col">
                    <div className="container mx-auto">

                        <Toaster position='top-center' reverseOrder={false}></Toaster>

                        <div className='flex justify-center items-center h-screen'>
                            <div className={`${styles.glass} ${extend.glass}`} style={{ width: "45%", paddingTop: '3em' }}>

                                <div className="title flex flex-col items-center">
                                    <h4 className='text-5xl font-bold'>Profile</h4>
                                    <span className='py-4 text-xl w-2/3 text-center text-gray-500'>
                                        You can update the details.
                                    </span>
                                </div>

                                <form className='py-1' 
                                // onSubmit={handleSubmit}
                                >
                                    <div className='profile flex justify-center py-4'>
                                        <label htmlFor="profile">
                                            <img src={ file || nitish} className={`${styles.profile_img} ${extend.profile_img}`} alt="avatar" />
                                        </label>

                                        <input onChange={onUpload} type="file" id='profile' name='profile' />
                                    </div>

                                    <div className="textbox flex flex-col items-center gap-6">
                                        <div className="name flex w-3/4 gap-10">
                                            <input  
                                            className={`${styles.textbox} ${extend.textbox}`} 
                                            type="text" 
                                            placeholder={firstName||'firstname'} 
                                            onChange={(e) => setFirstName(e.target.value)}
                                            />
                                            <input  
                                            className={`${styles.textbox} ${extend.textbox}`} 
                                            type="text" 
                                            placeholder={lastName||'lastname'} 
                                            onChange={(e) => setLastName(e.target.value)}
                                            />
                                        </div>

                                        <div className="name flex w-3/4 gap-10">
                                            <input  
                                            className={`${styles.textbox} ${extend.textbox}`} 
                                            type="text" 
                                            placeholder={mobile||'mobile'}
                                            onChange={(e) => setMobile(e.target.value)} 
                                            />
                                            <input  
                                            className={`${styles.textbox} ${extend.textbox}`} 
                                            type="text" 
                                            placeholder={grade||'grade'}
                                            onChange={(e) => setGrade(e.target.value)} 
                                            />
                                        </div>
                                        
                                        <fieldset
                                            className="flex max-w-md flex-col gap-4"
                                            id="radio"
                                        >
                                            <legend className="mb-4">
                                                Choose your favorite country
                                            </legend>
                                            <div className=" items-center gap-2">
                                                <Radio
                                                    defaultChecked
                                                    onChange={(e) => setexam('JEE')}
                                                />
                                                <Label className=' ml-4'>
                                                    JEE
                                                </Label>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Radio
                                                    onChange={(e) => setexam('NEET')}
                                                />
                                                <Label className=' ml-4'>
                                                    NEET
                                                </Label>
                                            </div>
                                            </fieldset>
                                        
                                        <input  
                                        className={`${styles.textbox} ${extend.textbox}`} 
                                        type="text" 
                                        // onChange={(e) => setAddress(e.target.value)}
                                        placeholder={exam ||'exam'} />
                                        <button className={styles.btn} type='submit'>Update</button>


                                    </div>

                                    <div className="text-center py-4">
                                        <span className='text-gray-500'>come back later? <button onClick={handlesignOut} className='text-red-500' to="/">Logout</button></span>
                                    </div>

                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile2