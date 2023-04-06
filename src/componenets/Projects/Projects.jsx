import Ecommerce from "../Ecommerce/Ecommerce"

function Projects() {
  return (
    <div className=" bg-project w-screen flex flex-col lg:flex-row px-8 py-16 gap-16 ">
      <div className="w-2/5 flex flex-col justify-between">
        <h2 className="text-white text-8xl">Our</h2>
        <h1 className="text-white text-9xl font-bold">Projects</h1>
      </div>
      <div className="flex justify-around items-center">
        <Ecommerce />
        <Ecommerce />
        <Ecommerce />
      </div>
    </div>
  )
}

export default Projects
