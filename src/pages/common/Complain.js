import React, { useState } from 'react'
import SideNavs from '../student/SideNavs'
import SideNavt from '../teacher/SideNavt'
import { Button, Label,Textarea,TextInput } from 'flowbite-react'
import { HiMail } from 'react-icons/hi';

function Complain(option) {
    const [email,setEmail] = useState("")
    const [name,setName] = useState("")
    const [message,setMessage] = useState("")



    return (
        <center>
            {option ? <SideNavs
                activepage={"Complain"}
            /> : <SideNavt activepage={"Complain"} />}
            <div class=" pt-20 md:pl-20">

                {/* Profile section */}
                <div className=" h-screen flex-row ">
                    <div className=" w-5/6 md:w-3/4">
                    <div className="mb-5 w-full mx-auto">
                                <div className="mb-3 block text-base font-medium text-[#07074D]">
                                    <Label
                                        value="Name"
                                    />
                                </div>
                                <TextInput
                                    placeholder="name"
                                    required
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div className="mb-5 w-full mx-auto">
                                <div className="mb-3 block text-base font-medium text-[#07074D]">
                                    <Label
                                        value="Email"
                                    />
                                </div>
                                <TextInput
                                    placeholder="example123@gmail.com"
                                    required
                                    onChange={(e) => setEmail(e.target.value)}
                                    rightIcon={HiMail}
                                />
                            </div>
                        <div className="mb-2 block">
                            <Label htmlFor="comment" value="Your message" />
                        </div>
                        <Textarea 
                        placeholder="Leave a comment..." 
                        required rows={4}
                        onChange={(e)=>setMessage(e.target.value)}
                         />
                         <Button className='w-2/3 md:3/6' >
                        Submit
                    </Button>
                    </div>
                    
                </div>

            </div>


        </center>
    )
}

export default Complain