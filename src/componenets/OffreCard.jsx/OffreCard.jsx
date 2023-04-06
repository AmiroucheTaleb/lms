import React from "react"
// import "./JavascriptCard.css";
import heroBack from "../../assets/js.png"
function JavascriptCard() {
  return (
    <div className="border border-gray-300 w-fit">
      <div className="lg:flex">
        <div
          className="h-48 lg:h-auto lg:w-48 flex-none bg-contain rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden bg-no-repeat"
          style={{ backgroundImage: `url(${heroBack})` }}
        ></div>
        <div className="rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal sm:flex-wrap">
          <div className="mb-8">
            <div className="text-gray-900 font-bold text-xl mb-2">
              JAVASCRIPT COURSE
            </div>
            <div className="flex gap-20">
              {" "}
              <p className="text-gray-700 text-base">
                JavaScript is the globally used client-side scripting language
                for the web. Most browsers support the language by default
              </p>
              <button className=" w-32 bg-transparent hover:bg-gray-900 text-gray-900 font-semibold hover:text-white py-2 px-4 border border-gray-900 hover:border-transparent rounded">
                BUY NOW
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default JavascriptCard
