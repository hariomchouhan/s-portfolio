import React from "react";
import { BsWhatsapp } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div className="flex flex-col gap-14 mb-20 w-full items-center">
      <h2 className="text-5xl font-bold">
        Contact <span className="text-[#004aad]">Me</span>
      </h2>
      <div className="flex flex-col md:flex-row gap-16 md:gap-0 justify-between w-full items-center">
        <div className="w-[80%] px-[1rem] flex flex-col gap-4">
          <div className="bg-[#187bdf] w-[18rem] rounded-2xl self-center flex items-center text-white">
            <div className="my-[0.7rem] ml-[0.7rem] p-6 rounded-2xl text-xl">
              <BsWhatsapp />
            </div>
            <div>
              <p className="font-semibold">Call Me</p>
              <p>+91-9406812321</p>
              <p>+91-7000106748</p>
            </div>
          </div>
          <div className="bg-[#187bdf] w-[18rem] rounded-2xl self-center flex items-center text-white">
            <div className="my-[0.7rem] ml-[0.7rem] p-4 rounded-2xl text-xl">
              <AiOutlineMail />
            </div>
            <div>
              <p className="font-semibold">Email</p>
              <p>bhatiasimarjeet@gmail.com</p>
            </div>
          </div>
          <div className="bg-[#187bdf] w-[18rem] rounded-2xl self-center flex items-center text-white">
            <div className="my-[0.7rem] ml-[0.7rem] p-4 rounded-2xl text-xl">
              <CiLocationOn />
            </div>
            <div>
              <p className="font-semibold">Address</p>
              <p>Indore, MP, India</p>
            </div>
          </div>
        </div>
        <div className="w-full px-4 flex flex-col">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
