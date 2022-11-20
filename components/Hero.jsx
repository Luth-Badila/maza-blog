import React from "react";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="bg-white shadow-lg max-w-[1000px] rounded-lg p-4 lg:p-8 sm:mt-[120px] mt-[100px] mb-[10px] mx-10">
      <div className="relative overflow-hidden shadow-md pb-80 mb-6 pt-3">
        <Image src="" alt="" height={100} width={100} className="object-top absolute h-80 w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg" />
      </div>
      <h1 className="duration transition-700 text-black text-center mb-8 cursor-pointer hover:text-pink-600 text-3xl font-semibold">
        <Link href="">bvuver</Link>
      </h1>
      <div className="block lg:flex text-center items-center justify-center mb-8 w-full">
        <div className="flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8">
          <Image alt="" height={30} width={30} className="align-middle rounded-full" src="" />
          <p className="inline align-middle text-gray-700 ml-2 text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, explicabo.</p>
        </div>
        <div className="font-medium text-gray-700">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-2 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span>Lorem ipsum dolor sit amet.</span>
        </div>
      </div>
      <p className="text-center text-lg text-gray-700 font-normal px-4 lg:px-20 mb-8">Lorem ipsum dolor sit amet.</p>
      <div className="text-center">
        <Link href="">
          <span className="transition duration-500 transform hover:-translate-y-1 inline-block bg-blue-800 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer">Lanjutkan membaca</span>
        </Link>
      </div>
      <div className="relative overflow-hidden shadow-md pb-80 mb-6 pt-3">
        <Image src="" alt="" height={100} width={100} className="object-top absolute h-80 w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg" />
      </div>
      <h1 className="duration transition-700 text-black text-center mb-8 cursor-pointer hover:text-pink-600 text-3xl font-semibold">
        <Link href="">bvuver</Link>
      </h1>
      <div className="block lg:flex text-center items-center justify-center mb-8 w-full">
        <div className="flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8">
          <Image alt="" height={30} width={30} className="align-middle rounded-full" src="" />
          <p className="inline align-middle text-gray-700 ml-2 text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, explicabo.</p>
        </div>
        <div className="font-medium text-gray-700">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-2 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span>Lorem ipsum dolor sit amet.</span>
        </div>
      </div>
      <p className="text-center text-lg text-gray-700 font-normal px-4 lg:px-20 mb-8">Lorem ipsum dolor sit amet.</p>
      <div className="text-center">
        <Link href="">
          <span className="transition duration-500 transform hover:-translate-y-1 inline-block bg-blue-800 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer">Lanjutkan membaca</span>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
