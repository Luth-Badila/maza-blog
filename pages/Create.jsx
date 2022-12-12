import React, { useState } from "react";
import { useRouter } from "next/router";

import supabase from "../config/supabaseClient";

const Create = () => {
  const router = useRouter();

  const [name, setName] = useState("");
  const [href, setHref] = useState("");
  const [username, setUsername] = useState("");
  const [imageSrc, setImageSrc] = useState("");
  const [formError, setFormError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !username || !imageSrc) {
      setFormError("Please fill in all the field correctly");
      return;
    }

    const { data, error } = await supabase.from("images").insert([{ name, username, imageSrc }]);

    if (error) {
      setFormError("Please fill in all the field correctly");
    }
    if (data) {
      setFormError(null);
      router.push("/");
    }
  };

  return (
    <div className="mt-[60px] flex justify-center items-center h-screen lg:mx-0 mx-5 text-black">
      <form onSubmit={handleSubmit} className="bg-white p-[20px] my-0 mx-auto w-[700px] rounded-md flex flex-col gap-3">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} className="block w-[100%] border-solid border-grey p-[6px]" />

        <label htmlFor="username">Username:</label>
        <textarea id="username" value={username} onChange={(e) => setUsername(e.target.value)} className="block w-[100%] border-solid border-grey p-[6px]" />

        <label htmlFor="imageSrc">Image Source:</label>
        <input type="text" id="imageSrc" value={imageSrc} onChange={(e) => setImageSrc(e.target.value)} className="block w-[100%] border-solid border-grey p-[6px]" />

        <button className="bg-black ml-[275px] text-white border-0 py-[6px] px-[4px] rounded-lg cursor-pointer w-[130px]">Create Newpost</button>

        {formError && <p className="text-black">{formError}</p>}
      </form>
    </div>
  );
};

export default Create;
