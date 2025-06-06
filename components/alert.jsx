import React from 'react'
import { IoCloseCircleOutline } from "react-icons/io5";

const Alert = ({ title, titlePrice, description, onClose }) => {
  return (
    <div className="fixed inset-0 bg-transparent bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md relative">
        <button 
          onClick={onClose} 
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-2xl"
        >
          <IoCloseCircleOutline />
        </button>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">{title}</h2>
        <p className="text-green-600 text-xl font-bold mb-3">{titlePrice}</p>
        <p className="text-gray-700 text-base">{description} day hire period</p>
        <div className='flex flex-row gap-5 mt-4'>
             <button className='secondary_button' onClick={onClose}>Back</button>
             <button className='primary_button' onClick={()=>alert("sorry the process cannot proceed")}>Continue</button>
        </div>
        
      </div>
    </div>
  )
}

export default Alert
