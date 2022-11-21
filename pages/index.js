import Head from "next/head";
import Hero from "../components/Hero";
import PostWidget from "../components/PostWidget";
import Menu from "./Menu";
import Hero2 from "./Hero2";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Maza&apos;s blog</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid grid-cols-1 lg:grid-cols-12 text-blue-500 lg:gap-5 gap-1 px-5">
        <div className="lg:col-span-8 col-span-1">
          {/* <Hero /> */}
          <Hero2 />
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative">
            <PostWidget />
          </div>
        </div>
      </div>
    </div>
  );
}
