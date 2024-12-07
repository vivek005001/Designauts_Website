import React from "react";
import Card from "./Card";
import ParticlesContainer from "./ParticlesContainer";

const mcolor = "bg-[#40A2E3]";
const ccolor = "bg-[#F3B95F]";
const pccolor = "bg-[#E05656]";

function Team({ textLeave, textEnter }) {
  const members = [
    {
      COORDINATOR: [
        {
          name: "Prashasti Singh",
          post: "COORDINATOR",
          tag: "DAMN",
          bg: "bg-[#EF9C50]",
          img: "/pfps/Prashasti Singh.png",
          linkedin: "",
          instagram: "",
        },
      ],
    },
    {
      "CO-COORDINATORS": [
        {
          name: "Yash Kataria",
          post: "CO-COORDINATOR",
          tag: "DAMN",
          bg: ccolor,
          img: "/pfps/Yash Kataria.png",
          linkedin: "",
          instagram: "",
        },
        {
          name: "Pranjal Rai",
          post: "CO-COORDINATOR",
          tag: "DAMN",
          bg: ccolor,
          img: "/pfps/Pranjal Rai.png",
          linkedin: "",
          instagram: "",
        },
      ],
    },
    {
      "CORE MEMBERS": [
        {
          "name": "Shubh Sahu",
          "post": "Core Member",
          "tag": "COOL",
          "bg": mcolor,
          "img": "/pfps/Shubh Sahu.png",
          "linkedin": "",
          "instagram": ""
      },
      {
        "name": "R C Manish",
        "post": "Core Member",
        "tag": "COOL",
        "bg": mcolor,
        "img": "/pfps/R C Manish.png",
        "linkedin": "",
        "instagram": ""
    },
    {
      "name": "Shubham Shrimay Padhi",
      "post": "Core Member",
      "tag": "COOL",
      "bg": mcolor,
      "img": "/pfps/Shubham Shrimay Padhi.png",
      "linkedin": "",
      "instagram": ""
  },
    {
        "name": "Vani Dhiman",
        "post": "Core Member",
        "tag": "COOL",
        "bg": mcolor,
        "img": "/pfps/Vani Dhiman.png",
        "linkedin": "",
        "instagram": ""
    },
  
    {
        "name": "Shubhankit Singh",
        "post": "Core Member",
        "tag": "COOL",
        "bg": mcolor,
        "img": "/pfps/Shubhankit Singh.png",
        "linkedin": "",
        "instagram": ""
    },
    {
        "name": "Shivam Anand",
        "post": "Core Member",
        "tag": "COOL",
        "bg": mcolor,
        "img": "/pfps/Shivam Anand.png",
        "linkedin": "",
        "instagram": ""
    },
    {
        "name": "Rahul Kumar",
        "post": "Core Member",
        "tag": "COOL",
        "bg": mcolor,
        "img": "/pfps/Rahul Kumar.png",
        "linkedin": "",
        "instagram": ""
    },

    {
        "name": "Pranav Raj",
        "post": "Core Member",
        "tag": "COOL",
        "bg": mcolor,
        "img": "/pfps/Pranav Raj.png",
        "linkedin": "",
        "instagram": ""
    },
    {
        "name": "Pranab Ray",
        "post": "Core Member",
        "tag": "COOL",
        "bg": mcolor,
        "img": "/pfps/Pranab Ray.png",
        "linkedin": "",
        "instagram": ""
    },
    {
        "name": "Mankirat Singh Saini",
        "post": "Core Member",
        "tag": "COOL",
        "bg": mcolor,
        "img": "/pfps/Mankirat Singh Saini.png",
        "linkedin": "",
        "instagram": ""
    },
    {
        "name": "Garvit Garg",
        "post": "Core Member",
        "tag": "COOL",
        "bg": mcolor,
        "img": "/pfps/Garvit Garg.png",
        "linkedin": "",
        "instagram": ""
    },
    {
        "name": "Farhat Hossain",
        "post": "Core Member",
        "tag": "COOL",
        "bg": mcolor,
        "img": "/pfps/Farhat Hossain.png",
        "linkedin": "",
        "instagram": ""
    },
    {
        "name": "Ayush Kumar",
        "post": "Core Member",
        "tag": "COOL",
        "bg": mcolor,
        "img": "/pfps/Ayush Kumar.png",
        "linkedin": "",
        "instagram": ""
    },
    {
        "name": "Ananya Nitin Gawade",
        "post": "Core Member",
        "tag": "COOL",
        "bg": mcolor,
        "img": "/pfps/Ananya Nitin Gawade.png",
        "linkedin": "",
        "instagram": ""
    },
    {
        "name": "Aditi Gupta",
        "post": "Core Member",
        "tag": "COOL",
        "bg": mcolor,
        "img": "/pfps/Aditi Gupta.png",
        "linkedin": "",
        "instagram": ""
    },
    {
        "name": "Aadra Sharma",
        "post": "Core Member",
        "tag": "COOL",
        "bg": mcolor,
        "img": "/pfps/Aadra Sharma.png",
        "linkedin": "",
        "instagram": ""
    },
    {
        "name": "Daksh Yadav",
        "post": "Core Member",
        "tag": "COOL",
        "bg": mcolor,
        "img": "/pfps/Daksh Yadav.png",
        "linkedin": "",
        "instagram": ""
    },
    {
        "name": "Sumit Tiwari",
        "post": "Core Member",
        "tag": "COOL",
        "bg": mcolor,
        "img": "/pfps/Sumit Tiwari.png",
        "linkedin": "",
        "instagram": ""
    },
],
    },

    {
      "PAST COORDINATORS": [
        {
          name: "Vivek Aggarwal",
          post: "COORDINATOR 23-24'",
          tag: "COOL",
          bg: pccolor,
          img: "/pfps/Vivek Aggarwal.png",
          linkedin: "",
          instagram: "",
        },
        {
          name: "Shivangi",
          post: "COORDINATOR 22-23'",
          tag: "COOL",
          bg: pccolor,
          img: "/pfps/shivangi.png",
          linkedin: "",
          instagram: "",
        },
        {
          name: "Punit Daga",
          post: "COORDINATOR 21-22'",
          tag: "COOL",
          bg: pccolor,
          img: "/pfps/Punit.png",
          linkedin: "",
          instagram: "",
        },
        {
          name: "Kalyani A.",
          post: "COORDINATOR 19-20'",
          tag: "COOL",
          bg: pccolor,
          img: "/pfps/Kalyani.png",
          linkedin: "",
          instagram: "",
        },
        {
          name: "Amit Chauhan",
          post: "COORDINATOR 18-19'",
          tag: "COOL",
          bg: pccolor,
          img: "/pfps/Amit.png",
          linkedin: "",
          instagram: "",
        },
        {
          name: "Pratyush G.",
          post: "COORDINATOR 17-18'",
          tag: "COOL",
          bg: pccolor,
          img: "/pfps/Pratyush.png",
          linkedin: "",
          instagram: "",
        },
      ],
    },
  ];

  return (
    <div className="relative">
      {/* Particles container extending to the entire page */}
      <ParticlesContainer />

      {/* Main content */}
      <div className="py-[10rem] flex justify-center z-10" onMouseEnter={textEnter} onMouseLeave={textLeave}>
        <div className="flex flex-col gap-[0.5rem]">
          {members.map((post) => {
            return (
              <>
                <div className="flex flex-col gap-[5rem]">
                  <div className="text-5xl text-center" onMouseEnter={textEnter} onMouseLeave={textLeave}>
                    {Object.keys(post)}
                  </div>
                  <div className="flex flex-wrap max-w-[1200px] mt-[1rem] justify-around">
                    {post[Object.keys(post)].map((member) => {
                      return (
                        <Card
                          name={member.name}
                          post={member.post}
                          tag={member.tag}
                          img={member.img}
                          linkedin={member.linkedin}
                          instagram={member.instagram}
                          bg={member.bg}
                          customCss={Object.keys(post)[0] === "PAST COORDINATORS" ? " text-wrap" : " text-nowrap"}
                        />
                      );
                    })}
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Team;