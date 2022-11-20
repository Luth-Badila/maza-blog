import React from "react";
import Link from "next/link";
import Image from "next/image";

const Hero2 = () => {
  return (
    <div className="px-5 my-[80px] lg:my-[120px] sm:grid md:grid-cols-2 3xl:flex flex-wrap justify-center gap-5">
      <div className="bg-white p-2 group cursor-pointer transition duration-200 ease-in transform lg:hover:scale-105 hover:z-50 rounded-lg lg:mb-0 mb-5">
        <Link href="">
          <Image src="" alt="Film Image" layout="responsive" height={1080} width={1920} />
          <div className="p-2">
            <p className="truncate max-w-md">Lorem, ipsum dolor.</p>
            <h2 className="mt-1 text-2xl text-black transition-all duration-100 ease-in-out group-hover:font-bold">Lorem, ipsum dolor sit amet consectetur adipisicing.</h2>
            <p className="flex items-center opacity-0 group-hover:opacity-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, commodi!</p>
          </div>
        </Link>
      </div>
      <div className="bg-white p-2 group cursor-pointer transition duration-200 ease-in transform lg:hover:scale-105 hover:z-50 rounded-lg lg:mb-0 mb-5">
        <Link href="">
          <Image src="" alt="Film Image" layout="responsive" height={1080} width={1920} />
          <div className="p-2">
            <p className="truncate max-w-md">Lorem, ipsum dolor.</p>
            <h2 className="mt-1 text-2xl text-black transition-all duration-100 ease-in-out group-hover:font-bold">Lorem, ipsum dolor sit amet consectetur adipisicing.</h2>
            <p className="flex items-center opacity-0 group-hover:opacity-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, commodi!</p>
          </div>
        </Link>
      </div>
      <div className="bg-white p-2 group cursor-pointer transition duration-200 ease-in transform lg:hover:scale-105 hover:z-50 rounded-lg lg:mb-0 mb-5">
        <Link href="">
          <Image src="" alt="Film Image" layout="responsive" height={1080} width={1920} />
          <div className="p-2">
            <p className="truncate max-w-md">Lorem, ipsum dolor.</p>
            <h2 className="mt-1 text-2xl text-black transition-all duration-100 ease-in-out group-hover:font-bold">Lorem, ipsum dolor sit amet consectetur adipisicing.</h2>
            <p className="flex items-center opacity-0 group-hover:opacity-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, commodi!</p>
          </div>
        </Link>
      </div>
      <div className="bg-white p-2 group cursor-pointer transition duration-200 ease-in transform lg:hover:scale-105 hover:z-50 rounded-lg lg:mb-0 mb-5">
        <Link href="">
          <Image src="" alt="Film Image" layout="responsive" height={1080} width={1920} />
          <div className="p-2">
            <p className="truncate max-w-md">Lorem, ipsum dolor.</p>
            <h2 className="mt-1 text-2xl text-black transition-all duration-100 ease-in-out group-hover:font-bold">Lorem, ipsum dolor sit amet consectetur adipisicing.</h2>
            <p className="flex items-center opacity-0 group-hover:opacity-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, commodi!</p>
          </div>
        </Link>
      </div>
      {/* <div class="mx-auto container flex flex-wrap lg:flex-nowrap gap-8 my-[60px] lg:my-[120px] px-4 lg:px-8">
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
      </div> */}
    </div>
  );
};

export default Hero2;
