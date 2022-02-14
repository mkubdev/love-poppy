import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="h-screen bg-gradient-to-r from-rose-700 to-pink-600 flex flex-col items-center justify-center">
      {/* Image */}
      <div className="pt-16 animate-bounce">
        <img alt="heart" className="mx-auto w-1/2" src="./letter.png"></img>
      </div>

      <div className="text-white text-3xl font-bold text-center px-8">
        <p>Une surprise t&apos;attends mon petit cul... 🌷</p>
      </div>

      {/* Button */}
      <div className="content-center">
        <Link href="/iloveyou">
          <a
            type="button"
            className="transition duration-300 ease-in-out mx-auto my-16 text-center animate-pulse items-center px-6 py-3 text-base font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 hover:bg-gradient-to-r hover:from-rose-500 hover:via-fuchsia-600 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
          >
            Voir késséssé la surprise 💌
          </a>
        </Link>
      </div>
    </div>
  );
}
