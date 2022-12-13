import React from "react";
import supabase from "../../config/supabaseClient";
import Image from "next/legacy/image";

export default function Slug({ image }) {
  console.log({ image });
  return (
    <div className="bg-white w-[800px] text-black shadow-lg rounded-lg p-4 lg:p-8 sm:mt-[140px] mt-[100px] mb-[60px] mx-auto flex justify-center items-center flex-col">
      <Image src={image.imageSrc} alt="Film Image" height={500} width={800} />
      <div className="flex flex-col items-center">
        <h1>{image.name}</h1>
        <p>@{image.username}</p>
      </div>
    </div>
  );
}

export const getStaticPaths = async () => {
  const { data: images } = await supabase.from("images").select("id");

  const paths = images.map(({ id }) => ({
    params: {
      id: id.toString(),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { id } }) => {
  const { data: image } = await supabase.from("images").select("*").eq("id", id).single();
  return {
    props: {
      image,
    },
  };
};

// export async function getServerSideProps() {
//   const supabaseAdmin = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL || "", process.env.NEXT_PUBLIC_SUPABASE_KEY || "");

//   const { data: images } = await supabaseAdmin.from("images").select("*");
//   return {
//     props: {
//       images,
//     },
//   };
// }
