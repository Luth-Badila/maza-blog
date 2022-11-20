import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div className="bg-white shadow-lg max-w-[1000px] rounded-lg p-2 lg:p-4 sm:mt-[120px] mt-[100px] mb-[5rem] mx-auto">
      <div className="flex flex-col gap-5 min-h-[320px] p-[2rem] border rounded-[15px]">
        <div className="flex flex-col items-center justify-center gap-1">
          <Image
            src="https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80"
            alt="profile"
            width={80}
            height={80}
            className="rounded-full border h-[100px] w-[100px]"
          />
          <p className="font-semibold text-xl">(name)</p>
        </div>
        <div className="flex flex-col text-m font-normal">
          <h4 className="bold-text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus, ad nobis. Doloribus possimus et perferendis ad dignissimos adipisci, ullam iure provident maiores iusto illum molestias? Officia error minima qui. Laborum?
          </h4>
          <h5 className="p-text">(caption)</h5>
        </div>
      </div>
    </div>
  );
};

export default About;
