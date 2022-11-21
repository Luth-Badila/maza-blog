import Image from "next/legacy/image";
import React from "react";
import Link from "next/link";

const PostWidget = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-8 lg:mt-[120px] mt-0 lg:mx-[50px] mx-[20px] my-[60px] lg:my-[120px]">
      <h3 className="lg:text-xl text-m mb-8 font-semibold border-b pb-4">Other topic</h3>
      {/* Realted Post */}
      <div className="flex items-center w-full mb-4">
        <div className="w-16 flex-none">
          <Image
            alt="image"
            height={80}
            width={80}
            className="align-middle rounded-md"
            src="https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80"
          />
        </div>
        <div className="flex-grow ml-4">
          <p className="text-gray-500 font-xs text-s">title</p>
          <Link href="" className="text-md">
            Lorem ipsum dolor sit amet.
          </Link>
        </div>
      </div>
      <div className="flex items-center w-full mb-4">
        <div className="w-16 flex-none">
          <Image
            alt="image"
            height={80}
            width={80}
            className="align-middle rounded-md"
            src="https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80"
          />
        </div>
        <div className="flex-grow ml-4">
          <p className="text-gray-500 font-xs text-s">title</p>
          <Link href="" className="text-md">
            Lorem ipsum dolor sit amet.
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostWidget;
