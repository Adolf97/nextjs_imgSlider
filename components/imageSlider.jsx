"use client";

import { useState, useEffect } from "react";

export default function ImageSlider() {
  let imgArr = [
    {url: "https://static.crunchyroll.com/fms/landscape_poster/960x540/100/png/8062c3a3-7a4f-4797-a266-4b23c9d46a30.webp", name: "Jujutsu Kaisen"},
    {url: "https://static.crunchyroll.com/fms/landscape_poster/960x540/100/png/97abd827-dd41-40c9-aeec-5efdee6a7a03.webp", name: "One Piece"},
    {url: "https://static.crunchyroll.com/fms/landscape_poster/960x540/100/png/db5d4df7-1282-4369-8968-723339419e94.webp", name: "The Misfit of Demon King Academy II"},
    {url: "https://static.crunchyroll.com/fms/landscape_poster/960x540/100/png/c40d3a11-92be-407f-9bbb-eb09869e7f52.webp", name: "Horimiya: The Missing Pieces"},
    {url: "https://static.crunchyroll.com/fms/landscape_poster/960x540/100/png/cdb20656-aa1e-42cf-9618-9c59e83654a4.webp", name: "Rent a Girlfriend"},
    {url: "https://static.crunchyroll.com/fms/landscape_poster/960x540/100/png/87dabd74-cf47-409d-96e8-0e4d7b3ed273.webp", name: "My Unique Skill Make Me OP Even At Level 1"}
    
  ]

  const [ img, setImg ] = useState(0)

  const goToPrevious = () => {
    const isFirstImg = img === 0;
    const newIndex = isFirstImg ? imgArr.length - 1 : img - 1;
    setImg(newIndex)
  }

  const goToNext = () => {
    const isLastImg = img === imgArr.length - 1;
    const newIndex = isLastImg ? 0 : img + 1;
    setImg(newIndex)
  }

  const goToImg = (imgIndex) => {
    setImg(imgIndex)
  }

  return (
    <div className='text-2xl font-semibold'>
      <div className="relative m-auto mb-3 w-[1000px] h-[400px]">
        <img className="h-full w-full object-cover" src={imgArr[img].url} alt={imgArr[img].name} />

        <button onClick={goToPrevious} className='absolute h-full bg-slate-100/40 border-none px-3 top-1/2 translate-y-[-50%] left-0 text-black text-[50px]'>&#60;</button>
        <button onClick={goToNext} className='absolute h-full bg-slate-100/40 border-none px-3 top-1/2 translate-y-[-50%] right-0 text-black text-[50px]'>&#62;</button>
      </div>
      <div className="grid grid-cols-6 max-w-[1000px] justify-center gap-2">
        {
          imgArr.map((img, imgIndex) => (
            <div 
              className="flex justify-center items-center p-2 text-sm bg-gray-500 text-slate-200 hover:cursor-pointer" 
              onClick={() => goToImg(imgIndex)} 
              key={imgIndex}>
                {img.name}
            </div>
          ))
        }
      </div>
    </div>
  )
}
