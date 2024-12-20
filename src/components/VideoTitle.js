const VideoTitle = ({title, overview}) => {
  return (
    <div className=' absolute w-screen  pt-[15%] px-8 text-white bg-gradient-to-r from-black'>
      <h1 className='text-6xl font-bold'>{title}</h1>
      <p className='py-2 text-lg w-2/6'>{overview}</p>
      <div>
        <button className='bg-white text-black p-4 px-16 text-xl rounded-lg hover:bg-opacity-80 '> 
            ▶ Play
        </button>
        <button className='mx-2 bg-gray-500 text-white p-4 px-16 text-xl opacity-60 rounded-lg hover:bg-opacity-50'>
           ℹ️ More Info</button>
      </div>
    </div>
  )
};

export default VideoTitle;