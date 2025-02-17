import { FaLocationDot } from "react-icons/fa6"

const ContentAbout1 = () => {
  return (
    <>
      <div className='content-center'>
        <span className="flex flex-wrap gap-1 text-center items-center justify-center">
          {/* <FaLocationDot className="size-3.5"/> */}
          <h1 className='text-[80%]'>📍 Based in</h1>
        </span>
        <h2 className="font-bold">Manila, Philippines</h2>
      </div> 
    </>
  )
}

export default ContentAbout1