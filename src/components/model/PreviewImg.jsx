function PreviewImg({ images }) {
  return (
    <div className="flex gap-2 w-full overflow-hidden select-none  ">
      {images.map((img, i) => {
        return <a key={i} href={`#item${i + 1}`} className="basis-full"> <img src={img} className="object-cover object-center aspect-video transition hover:scale-110" alt="" /></a>
      })}
    </div>
  )
}
export default PreviewImg