import React from 'react'
import { MdAddCircleOutline } from "react-icons/md";
import { FcCheckmark } from "react-icons/fc";
import { IoIosWarning } from "react-icons/io";


const Card = ({data, onClick}) => {
  
  return (
    <div 
      className='bg-white shadow-xl rounded-[30px] p-6 w-full max-w-sm mx-auto transform transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-gray-100 cursor-pointer'
      onClick={() => onClick(data)}
    >
       <div className='relative'>
          <img src="/images/4-yarder-skip.jpg" alt="Waste Image" className="w-full h-48 object-cover rounded-lg border border-gray-200" />
           <p className='absolute bottom-2 left-2 text-white bg-black bg-opacity-50 rounded-md px-2 py-1 text-sm'>{data.size} Yard Skip</p>
           {!data.allowed_on_road && <p className='absolute top-2 left-2 text-white bg-black bg-opacity-50 rounded-md px-2 py-1 text-sm flex flex-row items-center gap-2'><IoIosWarning /> Not allowed on road</p>}
       </div>
       <div className="flex flex-row justify-between items-center mt-4">
         <div className="flex flex-col">
            <h2 className='text-2xl font-bold text-gray-800 mb-2'>{data.size} Yard Skip</h2>
            <p className='text-gray-700 text-sm mb-1'>{data.hire_period_days} day hire period</p>
            <p className='text-green-600 text-xl font-bold'>£{data.price_before_vat}</p>
         </div>
         <button 
           className='bg-blue-600 text-black text-3xl p-3 rounded-full hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 '
         >
          <MdAddCircleOutline />
         </button>

       </div>
    </div>
  )
}

export default Card
