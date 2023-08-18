import React from "react";
import { AiOutlineLinkedin, AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="w-full h-[5px] bg-[#004aad] mx-auto rounded-2xl"></div>
      <div className="flex flex-col gap-6 md:gap-0 md:flex-row justify-between items-center w-full my-8">
        <p className="text-lg">@ 2023, All Right Reserved</p>
        <p className="text-lg flex justify-center items-center">
          Designed by{" "}&nbsp;
          <Link to='mailto:hariomchouhan430@gmail.com' className="flex justify-center items-center">
          <span className="text-[#004aad] font-semibold underline">Hariom Chouhan</span>
          &nbsp;
          <AiOutlineMail className="text-[#004aad] font-bold" fontSize={25} />
          </Link>
        </p>
        <div className="flex gap-[1.8rem] text-[#004aad] text-4xl">
          <Link to="https://www.linkedin.com/in/bhatiasimarjeet/">
            <AiOutlineLinkedin />
          </Link>
          <Link to="http://github.com/bhatiasimarjeet">
            <AiFillGithub />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Footer;
