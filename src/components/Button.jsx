function Button({ text, textColor, color, width, onClick }) {
  return (
    <button onClick={onClick} className={`font-extrabold ${width} text-xl btn ${color} ${textColor}`}>{text}</button>
  )
}
export default Button