import React from 'react'

const Interest = () => {
  return (
    <div className="rounded-xl bg-slate-200 w-full flex flex-col-reverse justify-between gap-16 my-14 shadow-lg px-2 py-8">
      
      <div className="w-full flex flex-col md:flex-row gap-5 md:gap-4 text-xl font-semibold p-3 text-white justify-center items-center">
        <span className='hover:scale-110 transition-all duration-200 hover:shadow-xl p-3 bg-blue-500 rounded-xl flex justify-center items-center'>Reading</span>
        <span className='hover:scale-110 transition-all duration-200 hover:shadow-xl p-3 bg-blue-500 rounded-xl flex justify-center items-center'>Memory Sketching</span>
        <span className='hover:scale-110 transition-all duration-200 hover:shadow-xl p-3 bg-blue-500 rounded-xl flex justify-center items-center'>Listening music</span>
    </div>
    <div className="w-full">
        <h2 className="text-[#004aad] h-full text-5xl font-bold flex justify-center items-center">Interest</h2>
    </div>
    </div>
  )
}

export default Interest
