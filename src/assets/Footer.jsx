import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { FaDiscord, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <Wrapper>
      <section className="contact-short">
        <div className="mx-20">
          <div className=" flex justify-between items-center">
            <span className=" text-black text-xl">Talk to us Today</span>
            <NavLink to="/">
              <button>Get in Touch</button>
            </NavLink>
          </div>
          
        </div>
      </section>
      <footer className="flex  justify-between items-center ">
        <div className="text-black my-20 mx-10 flex  flex-col">
          <span className="text-3xl">Designauts IIT Mandi</span>
          <span className="text-lg">Thinking made Visual</span>
        </div>

        <div className="text-black my-10">
        <span className="text-2xl my-20 !mb-30">Subscribe to get important updates</span>
          <form className= 'text-lg mr-20 ' action="#">
            <input className="bg-white border border-black border-radius-10 p-2"  
              type="email"
              placeholder="Enter your email"
              autoComplete="off"
              required
            />
            <input className="ml-5 text-xl" type="submit" value="Subscribe" />
          </form>
        </div>

        <div className="footer-social">
          <span className="text-black mr-20 text-2xl">Follow us on Social Media</span>
          <div className="footer-social--icons">
            <div>
              <FaInstagram className="icons" />
            </div>
            <div>
              <FaLinkedin className="icons" />
            </div>
            {/* <div><FaDiscord className='icons'/></div> */}
          </div>
        </div>
      </footer>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .contact-short {
    max-width: 60vw;
    margin: auto;
    padding: 20px 20px 100px 20px;
    background-color: #f5f5f5;
    border-radius: 1rem;

    transform: translateY(50%);
    text-color: #000000;
    h1 {
      color: black; /* Setting font color to black */
    }

    .grid div:last-child {
      justify-self: end;
      align-self: center;
    }
  }
  footer {
    padding: 4rem 0; /* Adjust padding to reduce footer height */
    background-color: #ffffff;
  }
  .footer-social--icons {
    display: flex;
    gap: 2rem;
    div {
      padding: 1rem;
      border-radius: 50%;
      .icons {
        font-size: 2rem;
        position: relative;
        color: #000000;
        cursor: pointer;
      }
    }
  }
`;

export default Footer;
