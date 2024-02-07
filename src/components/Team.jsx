import React from 'react'
import Card from './Card'
import ParticlesContainer from './ParticlesContainer'

const mcolor = "bg-[#40A2E3]"
const ccolor = "bg-[#F3B95F]"

function Team() {
    const members = [
        {
            "COORDINATOR": [
                {
                    name: "Vivek Aggarwal",
                    post: "COORDINATOR",
                    tag: "DAMN",
                    bg: "bg-[#DF7A1C]",
                    img: "/pfps/Vivek Aggarwal.png",
                    linkedin: "",
                    instagram: ""
                },
            ],
        },
        {
            "CO-COORDINATORS": [
                {
                    name: "Aryan Singh",
                    post: "CO-COORDINATOR",
                    tag: "DAMN",
                    bg: ccolor,
                    img: "/pfps/Aryan Singh.png",
                    linkedin: "",
                    instagram: ""


                },
                {
                    name: "Harshit Vyas",
                    post: "CO-COORDINATOR",
                    tag: "DAMN",
                    bg: ccolor,
                    img: "/pfps/Harshit Vyas.png",
                    linkedin: "",
                    instagram: ""
                },
                {
                    name: "Sanket",
                    post: "CO-COORDINATOR",
                    tag: "DAMN",
                    bg: ccolor,
                    img: "/pfps/Sanket.png",
                    linkedin: "",
                    instagram: ""
                }
            ],
        },
        {
            "CORE MEMBERS": [
                {
                    name: "Sam",
                    post: "Core Member",
                    tag: "COOL",
                    bg: mcolor,
                    img: "/pfps/Sam.png",
                    linkedin: "",
                    instagram: ""
                },
                {
                    name: "Aditya Kumar Singh",
                    post: "Core Member",
                    tag: "COOL",
                    bg: mcolor,
                    img: "/pfps/Aditya Kumar Singh.png",
                    linkedin: "",
                    instagram: ""
                },
                {
                    name: "Anusha Tiwari",
                    post: "Core Member",
                    tag: "COOL",
                    bg: mcolor,
                    img: "/pfps/Anusha Tiwari.png",
                    linkedin: "",
                    instagram: ""
                },

                {
                    name: "Akshat Singh",
                    post: "Core Member",
                    tag: "COOL",
                    bg: mcolor,
                    img: "/pfps/Akshat Singh.png",
                    linkedin: "",
                    instagram: ""
                },
                {
                    name: "Bhavesh Goyal",
                    post: "Core Member",
                    tag: "COOL",
                    bg: mcolor,
                    img: "/pfps/Bhavesh Goyal.png",
                    linkedin: "",
                    instagram: ""
                },
                {
                    name: "Luv Sharma",
                    post: "Core Member",
                    tag: "COOL",
                    bg: mcolor,
                    img: "/pfps/Luv Sharma.png",
                    linkedin: "",
                    instagram: ""
                },
                {
                    name: "Sarthak Goel",
                    post: "Core Member",
                    tag: "COOL",
                    bg: mcolor,
                    img: "/pfps/Sarthak Goel.png",
                    linkedin: "",
                    instagram: ""
                },
                {
                    name: "Siddhi Upadhyaya",
                    post: "Core Member",
                    tag: "COOL",
                    bg: mcolor,
                    img: "/pfps/Siddhi Upadhyaya.png",
                    linkedin: "",
                    instagram: ""
                },
                {
                    name: "Utkarsh Yadav",
                    post: "Core Member",
                    tag: "COOL",
                    bg: mcolor,
                    img: "/pfps/Utkarsh Yadav.png",
                    linkedin: "",
                    instagram: ""
                },
            ],
        }
    ]
    return (
        <div className='relative'>
            <ParticlesContainer />
        <div className='py-[10rem] flex justify-center'>
                            

            <div className='flex flex-col gap-[0.5rem]'>
                {
                    members.map((post) => {
                        return (
                            <>
                                <div className='flex flex-col gap-[5rem]'>
                                    <div className='text-5xl  text-center'>{Object.keys(post)}</div>
                                    <div className='flex flex-wrap max-w-[1200px] mt-[1rem] justify-around'>
                                        {
                                            post[Object.keys(post)].map((member) => {
                                                return (
                                                    <Card name={member.name} post={member.post} tag={member.tag} img={member.img} linkedin={member.linkedin} instagram={member.instagram} bg={member.bg} />
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
            </div>
        </div>
        </div>
    )
}

export default Team