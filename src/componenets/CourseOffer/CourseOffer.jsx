function CourseOffer({ title, content, prevPrice, currPrice, background }) {
  return (
    <div>
      {background === "white" ? (
        <div className=" bg-white text-black flex py-8 px-16 border-[1px] border-solid border-white">
          <div className=" flex flex-col gap-4">
            <h1 className=" font-light text-3xl underline">{title}</h1>
            <p className=" w-2/3 text-xl">{content}</p>
          </div>
          <div className="flex flex-col gap-2 w-1/3 items-end justify-end">
            <span className=" line-through font-semibold text-xl">
              {prevPrice}$
            </span>
            <span className="text-xl">{currPrice}$</span>
            <button className="px-2 py-2 border-solid border-[1px] border-black bg-white text-black">
              BUY NOW
            </button>
          </div>
        </div>
      ) : (
        <div className=" bg-black text-white flex py-8 px-16 border-[1px] border-solid border-white">
          <div className=" flex flex-col gap-4">
            <h1 className=" font-light text-3xl underline">{title}</h1>
            <p className=" w-2/3 text-xl">{content}</p>
          </div>
          <div className="flex flex-col gap-2 w-1/3 items-end justify-end">
            <span className=" line-through font-semibold text-xl">
              {prevPrice}$
            </span>
            <span className="text-xl">{currPrice}$</span>
            <button className="px-2 py-2 border-solid border-[1px] border-white bg-black text-white">
              BUY NOW
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
export default CourseOffer
