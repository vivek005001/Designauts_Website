import React from 'react'
import Card from './Card'

function Team() {
    const members = [{
        "COORDINATORS": [
            {
                name:"Vivek Aggarwal",
                post:"COORDINATOR",
                tag:"DAMN",
                img:"/pfps/vivek.png",
                linkedin:"",
                instagram:""
            }
        ],
    },
    {   "CORE MEMBERS": [
            {
                name:"Vivek",
                post:"Core Member",
                tag:"COOL",
                img:"/pfps/vivek.jpg",
                linkedin:"",
                instagram:""
            }
        ],
    }
]
  return (
    <div className='py-[10rem] flex justify-center'>
        <div className='flex flex-col gap-[10rem]'>
            {
                members.map((post) => {
                    return (
                       <>
                       <div className='flex flex-col gap-[5rem]'>
                        <div className='text-5xl underline'>{Object.keys(post)}</div>
                            <div className='flex flex-wrap max-w-[800px] mt-[1rem] justify-center'>
                                {
                                    post[Object.keys(post)].map((member) => {
                                        return (
                                            <Card name={member.name} post={member.post} tag={member.tag} img={member.img} linkedin={member.linkedin} instagram={member.instagram}/>
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
  )
}

export default Team