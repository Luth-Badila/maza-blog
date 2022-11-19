import React from "react";
import Link from "next/link";
import Image from "next/image";

const Hero2 = () => {
  return (
    <>
      <div class="mx-auto container flex flex-wrap lg:flex-nowrap gap-8 my-[60px] lg:my-[120px] px-4 lg:px-8">
        <div className="bg-white shadow-lg w-[1200px] rounded-lg p-4 lg:p-8">
          <Image width={200} height={200} src="" alt="" />
          <div className="flex items-center gap-2">
            <h1 className="text-l">Linux</h1>
            <p className="text-l text-gray-500">23 September 2022</p>
          </div>
          <p className="text-gray-800 font-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="bg-white shadow-lg w-[1200px] rounded-lg p-4 lg:p-8">
          <Image width={200} height={200} src="" alt="" />
          <div className="flex items-center gap-2">
            <h1 className="text-l">Linux</h1>
            <p className="text-l text-gray-500">23 September 2022</p>
          </div>
          <p className="text-gray-800 font-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
    </>
  );
};

export default Hero2;
