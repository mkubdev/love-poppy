import Link from "next/link";

const iloveyou = () => {
  return (
    <div className="h-screen bg-gradient-to-r from-rose-700 to-pink-600">
      <div className="flex flex-col items-center justify-center">

        {/* Image */}
        <div className="pt-12 my-10 animate-bounce">
          <img alt="heart" className="mx-auto w-1/2" src="./hearth.png"></img>
        </div>

        <div className="text-white text-3xl font-bold text-center px-8">
          <p>Joyeuse Saint Valentin 2022 🌷💕</p>
        </div>

        {/* Content */}
        <div className="content-center">
         

        </div>
      </div>
    </div>
  );
}

export default iloveyou;