import React from "react"
import Hero from "../../componenets/Hero/Hero"
import CourseOffer from "../../componenets/CourseOffer/CourseOffer"
import Projects from "../../componenets/Projects/Projects"
import Temoignage from "../Temoignage/Temoignage"
import img from "../../assets/hero-back.png"

function Acceuil() {
  return (
    <div>
      <Hero
        image={img}
        first="Get your class"
        second="Get your invitation"
        third="class mentors"
      />
      <div className="flex p-8 gap-4 bg-black sm:flex-col md:flex-row">
        <CourseOffer
          title="Machine Learning"
          content="Le Machine Learning ou apprentissage automatique est un domaine scientifique, et plus particulièrement une sous-catégorie de l'intelligence artificielle."
          prevPrice="187.99"
          currPrice="112.99"
          background="white"
        />
        <CourseOffer
          title="Cloud Computing"
          content="Le Machine Learning ou apprentissage automatique est un domaine scientifique, et plus particulièrement une sous-catégorie de l'intelligence artificielle."
          prevPrice="187.99"
          currPrice="112.99"
          background="black"
        />
      </div>
      <Projects />
      <Temoignage />
    </div>
  )
}

export default Acceuil
