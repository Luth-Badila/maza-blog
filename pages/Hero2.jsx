import React from "react";
import Link from "next/link";
import Image from "next/legacy/image";

const Hero2 = () => {
  return (
    <div className="px-5 my-[80px] lg:my-[120px] md:my-[110px] sm:grid md:grid-cols-2 3xl:flex flex-wrap justify-center gap-5">
      <div className="bg-white p-2 group cursor-pointer transition duration-200 ease-in transform lg:hover:scale-105 hover:z-50 rounded-lg lg:mb-0 mb-5">
        <Link href="">
          <Image
            src="https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80"
            alt="Film Image"
            layout="responsive"
            height={1080}
            width={1920}
          />
          <div className="p-2">
            <p className="truncate max-w-md">Lorem, ipsum dolor.</p>
            <h2 className="mt-1 text-2xl text-black transition-all duration-100 ease-in-out group-hover:font-bold">Lorem, ipsum dolor sit amet consectetur adipisicing.</h2>
            <p className="flex items-center opacity-0 group-hover:opacity-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, commodi!</p>
          </div>
        </Link>
      </div>
      <div className="bg-white p-2 group cursor-pointer transition duration-200 ease-in transform lg:hover:scale-105 hover:z-50 rounded-lg lg:mb-0 mb-5">
        <Link href="">
          <Image
            src="https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80"
            alt="Film Image"
            layout="responsive"
            height={1080}
            width={1920}
          />
          <div className="p-2">
            <p className="truncate max-w-md">Lorem, ipsum dolor.</p>
            <h2 className="mt-1 text-2xl text-black transition-all duration-100 ease-in-out group-hover:font-bold">Lorem, ipsum dolor sit amet consectetur adipisicing.</h2>
            <p className="flex items-center opacity-0 group-hover:opacity-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, commodi!</p>
          </div>
        </Link>
      </div>
      <div className="bg-white p-2 group cursor-pointer transition duration-200 ease-in transform lg:hover:scale-105 hover:z-50 rounded-lg lg:mb-0 mb-5">
        <Link href="">
          <Image
            src="https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80"
            alt="Film Image"
            layout="responsive"
            height={1080}
            width={1920}
          />
          <div className="p-2">
            <p className="truncate max-w-md">Lorem, ipsum dolor.</p>
            <h2 className="mt-1 text-2xl text-black transition-all duration-100 ease-in-out group-hover:font-bold">Lorem, ipsum dolor sit amet consectetur adipisicing.</h2>
            <p className="flex items-center opacity-0 group-hover:opacity-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, commodi!</p>
          </div>
        </Link>
      </div>
      <div className="bg-white p-2 group cursor-pointer transition duration-200 ease-in transform lg:hover:scale-105 hover:z-50 rounded-lg lg:mb-0 mb-5">
        <Link href="">
          <Image
            src="https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80"
            alt="Film Image"
            layout="responsive"
            height={1080}
            width={1920}
          />
          <div className="p-2">
            <p className="truncate max-w-md">Lorem, ipsum dolor.</p>
            <h2 className="mt-1 text-2xl text-black transition-all duration-100 ease-in-out group-hover:font-bold">Lorem, ipsum dolor sit amet consectetur adipisicing.</h2>
            <p className="flex items-center opacity-0 group-hover:opacity-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, commodi!</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Hero2;
