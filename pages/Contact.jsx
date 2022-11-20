import React from "react";

const Contact = () => {
  return (
    <div className="mt-[100px] flex justify-center items-center h-[80vh] lg:mx-0 mx-5">
      <form className="bg-[#003566] p-[20px] my-0 mx-auto w-[800px] rounded-md flex flex-col gap-3 text-white">
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" className="block w-[100%] border-solid border-grey p-[6px]" />

        <label htmlFor="method">Method:</label>
        <textarea id="method" className="block w-[100%] border-solid border-grey p-[6px]" />

        <label htmlFor="rating">Rating:</label>
        <input type="number" id="rating" className="block w-[100%] border-solid border-grey p-[6px]" />

        <button className="mx-auto my-0 items-center bg-[#ffc300] text-white border-0 py-[8px] px-[6px] rounded-lg cursor-pointer w-[100px]">Send</button>
      </form>
    </div>
  );
};

export default Contact;
