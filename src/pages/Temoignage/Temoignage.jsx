import React from "react"
import CardTemoignage from "../../componenets/CardTemoignage/CardTemoignage"

function Temoignage() {
  return (
    <div className="pt-[6rem] pb-16 px-4 md:px-64 bg-parimary__bg flex justify-around flex-col items-center gap-16 xl:flex-row">
      <CardTemoignage />
      <CardTemoignage />
      <CardTemoignage />
    </div>
  )
}

export default Temoignage
