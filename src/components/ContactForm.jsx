import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import apiKey from "../DataKey";
import { toast } from "react-hot-toast";

const ContactForm = () => {
  const form = useRef();
  const [data, setData] = useState({
    user_name: "",
    user_email: "",
    user_phone: "",
    message: "",
  });
  const sendEmail = (event) => {
    event.preventDefault();

    emailjs
      .sendForm(
        apiKey.SERVICE_ID,
        apiKey.TEMPLATE_ID,
        form.current,
        apiKey.PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Thanks for contacting me!");
          setData({
            user_name: "",
            user_email: "",
            user_phone: "",
            message: "",
          });
        },
        (error) => {
          console.log(error.text);
          toast.error("Please try again message is not send!")
        } 
      );
  };

  const changeHandler = (e) => {
    setData((prevFormData) => {
      return {
        ...prevFormData,
        [e.target.name]: e.target.value,
      };
    });
  }
  return (
    <form ref={form} className="w-full flex flex-col items-center gap-4" onSubmit={sendEmail}>
      <input
        type="text"
        placeholder="Full Name"
        required
        name="user_name"
        className="border-[3px] border-blue-400 rounded-lg py-[0.7rem] px-4 w-[20rem] text-lg outline-none max-w-[25rem]"
        onChange={changeHandler}
        value={data.user_name}
      />
      <input
        type="email"
        placeholder="Your Email"
        required
        name="user_email"
        className="border-[3px] border-blue-400 rounded-lg py-[0.7rem] px-4 w-[20rem] text-lg outline-none max-w-[25rem]"
        onChange={changeHandler}
        value={data.user_email}
      />
      <input
        type="text"
        placeholder="Phone Number"
        name="user_phone"
        className="border-[3px] border-blue-400 rounded-lg py-[0.7rem] px-4 w-[20rem] text-lg outline-none max-w-[25rem]"
        onChange={changeHandler}
        value={data.user_phone}
      />
      <textarea
        name="message"
        rows="7"
        placeholder="Message"
        required
        className="border-[3px] border-blue-400 rounded-lg py-[0.7rem] px-4 w-[20rem] text-lg outline-none max-w-[25rem]"
        onChange={changeHandler}
        value={data.message}
      />
      <button
        className="text-white font-semibold text-xl hover:bg-gradient-to-r hover:from-sky-500 hover:to-indigo-500 rounded-[34px] border-none text-[16px] py-[11px] px-[26px] bg-gradient-to-r from-cyan-500 to-blue-500 shadow-xl shadow-blue-500"
      >
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
