function BigTitle({ name }) {
  return (
    <div className="mt-20 p-4">
      <span className="bold titleFont text-5xl sm:text-6xl md:text-8xl lg:text-10xl xl:text-12xl font-semibold ">Hi I'm <span className="text-blue-700 font-extrabold">{name}</span></span>
    </div>
  )
}
export default BigTitle