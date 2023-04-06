import sarah from "../../assets/sarah.jpg"
function CardTemoignage() {
  return (
    <div className="w-full  bg-black bg-opacity-50 pt-0 pb-8 px-5 rounded-3xl">
      <img
        src={sarah}
        alt="sarah"
        className=" rounded-full w-20 translate-y-[-50%] mx-auto"
      />
      <h1 className="text-white text-3xl pb-4 text-center">Sabouni Sarah</h1>
      <p className=" text-white font-thin">
        Le lorem ipsum est, en imprimerie, une suite de mots sans signification
        utilisée à titre provisoire pour calibrer une mise en page, le texte
        définitif venant remplacer le faux-texte dès qu'il est prêt ou que la
        mise en page est achevée.
      </p>
    </div>
  )
}

export default CardTemoignage
