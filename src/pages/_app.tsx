import { type AppType } from "next/dist/shared/lib/utils";
import MyHeader from "../header/header";
import "../styles/globals.css";
import Link from "next/link";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <div className="grid h-screen w-screen grid-rows-3 bg-gradient-to-b from-deep-purple to-deep-green text-white">
      <div className="h-[10vh] p-5">
        <MyHeader></MyHeader>
      </div>
      <div className="row-span-2">
        <Component {...pageProps} />
      </div>
      <div className="w-full pb-2">
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
