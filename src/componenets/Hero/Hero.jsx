import React from "react"
import "./Hero.css"

function Hero({ image, first, second, third }) {
  return (
    <div
      className="flex w-screen flex-col-reverse lg:flex-row
    "
    >
      <div className=" bg-parimary__bg flex-1 flex flex-col py-8 items-start gap-8 px-16">
        <h1 className=" font-bold text-black text-8xl">{first}</h1>
        <h1 className=" font-bold text-parimary__txt text-8xl">{second}</h1>
        <h1 className=" font-thin text-black text-8xl">{third}</h1>
        <button className=" bg-black text-parimary__bg px-8 py-4 text-4xl mt-8 mx-auto">
          Get started
        </button>
      </div>
      <img src={image} alt="groupe__img" className="flex-1" />
    </div>
  )
}

export default Hero
