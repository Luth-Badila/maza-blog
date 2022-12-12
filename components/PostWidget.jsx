import Image from "next/legacy/image";
import React from "react";
import Link from "next/link";

const PostWidget = ({ images }) => {
  return (
    <div className=" bg-white shadow-lg rounded-lg p-8 lg:mt-[120px] mt-0 lg:mx-[50px] mx-[20px] my-[60px] lg:my-[120px]">
      <h3 className="lg:text-xl text-m mb-8 font-semibold border-b pb-4">Other topic</h3>
      {/* Realted Post */}
      {images.map((image) => (
        <div key={image.id} className="flex items-center w-full mb-4">
          <div className="w-16 flex-none">
            <Image alt="image" height={80} width={80} className="align-middle rounded-md" src={image.imageSrc} />
          </div>
          <div className="flex-grow ml-4">
            <p className="text-gray-500 font-xs text-s">{image.name}</p>
            <Link href="" className="text-md">
              Lorem ipsum dolor sit amet.
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostWidget;
