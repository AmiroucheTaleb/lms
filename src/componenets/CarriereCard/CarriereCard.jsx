import ts from "../../assets/ts.png"
function CarriereCard() {
  return (
    <div className=" w-8/12 lg:max-w-max lg:flex">
      <div
        className="h-96 lg:h-96 lg:w-3/6 flex-none bg-auto rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
        style={{ backgroundImage: `url(${ts})` }}
      ></div>
      <div className="border-r border-b border-l border-gray-400 py-16 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b content-center lg:rounded-b-none lg:rounded-r px-8 flex flex-col justify-between items-center leading-normal">
        <div className="text-gray-900 font-bold text-4xl mb-2">
          Formateur TypeScript
        </div>
        <p className="text-gray-700 text-base">
          JavaScript is the globally used client-side scripting language for the
          web. Most browsers support the language by default
        </p>
        <button className=" w-32 bg-transparent hover:bg-gray-900 text-gray-900 font-semibold hover:text-white py-2 px-4 border border-gray-900 hover:border-transparent rounded">
          Postule Now
        </button>
      </div>
    </div>
  )
}

export default CarriereCard
