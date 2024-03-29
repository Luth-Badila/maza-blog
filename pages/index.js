import Head from "next/head";
import PostWidget from "../components/PostWidget";
import Hero2 from "./Hero2";
import { createClient } from "@supabase/supabase-js";

export default function Home({ images }) {
  return (
    <div>
      <Head>
        <title>Maza&apos;s blog</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid grid-cols-1 lg:grid-cols-12 text-blue-500 lg:gap-5 gap-1 px-5">
        <div className="lg:col-span-8 col-span-1">
          <Hero2 images={images} />
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative">
            <PostWidget images={images} />
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const supabaseAdmin = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL || "", process.env.NEXT_PUBLIC_SUPABASE_KEY || "");

  const { data } = await supabaseAdmin.from("images").select("*").order("id");
  return {
    props: {
      images: data,
    },
  };
}
