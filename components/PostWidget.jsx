import Image from "next/image";
import React from "react";
import Link from "next/link";

const PostWidget = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-8 mt-[100px]">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea, facere!</h3>
      {/* Realted Post */}
      <div className="flex items-center w-full mb-4">
        <div className="w-16 flex-none">
          <Image alt="" height="60px" width="60px" className="align-middle rounded-full" src="" />
        </div>
        <div className="flex-grow ml-4">
          <p className="text-gray-500 font-xs">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          <Link href="" className="text-md">
            Lorem ipsum dolor sit amet.
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostWidget;
