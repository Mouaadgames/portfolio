function Button({ text, textColor, color, onClick }) {
  
  return (
    <button onClick={onClick} className={`font-extrabold w-32 sm:w-48 xl:w-64 text-sm  sm:text-xl xl:text-3xl  btn xl:btn-lg ${color} ${textColor}`}>{text}</button>
  )
}
export default Button