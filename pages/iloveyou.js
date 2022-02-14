import Link from "next/link";
import { useState } from "react";

export default function Iloveyou() {
  const isLoading = useState(false);

  const mounted = () => {
    setTimeout(() => (this.isLoading = false), 3000); //Note: When interacting with a state manager(e.g. Vuex), remove this hook and let the flag to be filled from a state getter.
  };

  return (
      <div className="h-screen bg-gradient-to-r from-rose-700 to-pink-600 flex flex-col items-center justify-center">

        {/* Image coeur */}
        <div className="pt-16 animate-bounce">
          <img alt="heart" className="mx-auto w-1/2" src="./hearth.png"></img>
        </div>

        {/* Text Content */}
        <div className="animate-pulse text-white text-4xl font-bold text-center px-8">
          <p>Joyeuse Saint-Valentin 2022</p>
          <p className="pt-2">💕💕💕</p>

        </div>
        <div className=" text-white text-2xl font-bold text-center px-8 py-24">
          <p>Je t&apos;aime pour toute la vie.</p>
          <p>Dispo pour un restaurant dans la semaine? 😇</p>
        </div>
      </div>
  );
}
