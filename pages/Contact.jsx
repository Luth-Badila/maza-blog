import React, { useState } from "react";
import supabase from "../config/supabaseClient";

const Contact = () => {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [formError, setFormError] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !subject || !message) {
      setFormError("Please fill all the blank correctly");
      return;
    }
    const { data, error } = await supabase.from("Contact").insert([{ name, subject, message }]);

    if (error) {
      setFormError("Please fill all the blank correctly");
    }
    if (data) {
      console.log(data);
      setFormError(null);
    }
  };
  return (
    <div className="mt-[100px] flex justify-center items-center h-[80vh] lg:mx-0 mx-5">
      <form onSubmit={handleSubmit} className="bg-[#003566] p-[20px] my-0 mx-auto w-[800px] rounded-md flex flex-col gap-3 text-black">
        <label htmlFor="name">Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} id="name" className="block w-[100%] border-solid border-grey p-[6px]" />

        <label htmlFor="subject">Subject:</label>
        <textarea id="subject" value={subject} onChange={(e) => setSubject(e.target.value)} className="block w-[100%] border-solid border-grey p-[6px]" />

        <label htmlFor="message">Message:</label>
        <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} className="block w-[100%] border-solid border-grey p-[6px]" />

        <button className="mx-auto my-0 items-center bg-[#ffc300] text-white border-0 py-[8px] px-[6px] rounded-lg cursor-pointer w-[100px]">Send</button>
      </form>
    </div>
  );
};

export default Contact;
