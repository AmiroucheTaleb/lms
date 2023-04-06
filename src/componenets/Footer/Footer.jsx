function Footer() {
  return (
    <footer className="bg-black p-4 flex justify-evenly  text-white relative overflow-hidden">
      <span className="font-extrabold absolute left-4 top-8 text-5xl tracking-logo">
        LMS
      </span>
      <div className="flex flex-col text-2xl gap-2 py-32 font-thin underline">
        <p>Lotem ispum</p>
        <p>Lotem ispum</p>
        <p>Lotem ispum</p>
      </div>
      <div className="flex flex-col text-2xl gap-2 py-32 font-thin underline">
        <p>Lotem ispum</p>
        <p>Lotem ispum</p>
        <p>Lotem ispum</p>
      </div>
      <span className="absolute h-[85%] w-[1px] b-white left-1/2 top-4 bg-white"></span>
      <span className="absolute left-1/2 bottom-2 -translate-x-1/2 opacity-80">
        copyright &copy; 2023/2024
      </span>
    </footer>
  )
}

export default Footer
