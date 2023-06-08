import { type AppType } from "next/dist/shared/lib/utils";
import MyHeader from "../header/header";
import "../styles/globals.css";
import Link from "next/link";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <div className="flex h-screen w-screen flex-col gap-3 bg-gradient-to-b from-deep-purple to-[#003c00] px-7 text-white">
      <div className="w-full">
        <MyHeader></MyHeader>
      </div>
      <div className="h-full w-full grow ">
        <Component {...pageProps} />
      </div>
      <div className="w-full grow pb-2">
        <p className="text-center">
          <a
            href="https://cmcedricm.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-300"
          >
            Created By Cedric
          </a>
        </p>
      </div>
    </div>
  );
};

export default MyApp;
