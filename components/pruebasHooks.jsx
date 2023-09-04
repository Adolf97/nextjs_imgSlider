"use client";

import { useState, useEffect } from "react";

export default function PruebasHooks() {
  const [contador, setContador] = useState(0)

  let imgArr = [
    "https://static.crunchyroll.com/fms/landscape_poster/960x540/100/png/8062c3a3-7a4f-4797-a266-4b23c9d46a30.webp",
    "https://static.crunchyroll.com/fms/landscape_poster/960x540/100/png/97abd827-dd41-40c9-aeec-5efdee6a7a03.webp",
    "https://static.crunchyroll.com/fms/landscape_poster/960x540/100/png/db5d4df7-1282-4369-8968-723339419e94.webp",
    "https://static.crunchyroll.com/fms/landscape_poster/960x540/100/png/c40d3a11-92be-407f-9bbb-eb09869e7f52.webp",
    "https://static.crunchyroll.com/fms/landscape_poster/960x540/100/png/cdb20656-aa1e-42cf-9618-9c59e83654a4.webp",
    "https://static.crunchyroll.com/fms/landscape_poster/960x540/100/png/87dabd74-cf47-409d-96e8-0e4d7b3ed273.webp"
    
  ]

  const [ img, setImg ] = useState("")

  const [ activeLess, setActiveLess ] = useState(true)
  const [ activeMore, setActiveMore ] = useState(false)

  useEffect( () => {
    if (contador < 0) {
      console.log(activeLess);
    } else if (contador+1 <= imgArr.length) {
      setImg(imgArr[contador])
      console.log(activeLess)
    } else {
      console.log(activeMore);
    }
  }, [contador])

  return (
    <div className='text-2xl font-semibold'>
      <div className="mb-10">
        <button disabled={activeLess} onClick={() => setContador(contador-1)} className='bg-gray-400 px-3 rounded mr-2'>-</button>
        <span>{contador}</span>
        <button disabled={activeMore} onClick={() => setContador(contador+1)} className='bg-gray-400 px-3 rounded ml-2'>+</button>
      </div>

      <div>
        {/* <button className="mb-2" onClick={() => setImg("https://images.pexels.com/photos/8451450/pexels-photo-8451450.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load")}>Traer Imagen</button> */}
        <div className="h-[500px] w-[500px] rounded-2xl overflow-hidden">
          <img className="h-full w-full object-cover" src={img} alt="" />
        </div>
      </div>
    </div>
  )
}
