import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { Link } from "react-router-dom";
import myPic from "../assets/simarjeet.jpeg"

const HeroSection = () => {
  return (
    <div className="w-[100%] justify-between flex flex-col md:flex-row gap-14 md:gap-0 items-center mt-[2.5rem]">
      {/* left side */}
      <div className="flex relative flex-1 flex-col">
        <div className="flex flex-col gap-3">
          <span className="text-black font-bold text-5xl">Hy! I Am</span>
          <span className="text-[#004aad] font-bold text-5xl">Simarjeet Singh Bhatia</span>
          <span className="font-extralight mt-[10px] text-[#788097] text-[14px]">
          I am A Trainer by Profession a small Memory sketcher by hobby.
          </span>
        </div>

        <div className="mt-[2rem] p-[1.89rem] flex gap-[4rem]">
          <Link className="transform scale-[4] text-[#004aad]" to="http://github.com/bhatiasimarjeet">
            <AiFillGithub />
          </Link>
          <Link className="transform scale-[4] text-[#004aad]" to="https://www.linkedin.com/in/bhatiasimarjeet/">
            <AiFillLinkedin />
          </Link>
        </div>
      </div>

      {/* right side */}
        <img
          src={myPic}
          alt="Hariom Chouhan"
          className="rounded-full w-[25rem] border-[6px] shadow-2xl border-blue-500"
          draggable="false"
        />
    </div>
  );
};

export default HeroSection;
