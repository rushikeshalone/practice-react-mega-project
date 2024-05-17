/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import React ,{ useId } from 'react'

function Select({
    options,
    label,
    name,
    className = "" ,
   ...props
},ref) {

    const id = useId()
  return (
    <div className='w-full'>
       {label && <label htmlFor={id} className=''></label>}
       <select
       {...props} 
       ref={ref} 
       name={name}
       className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 
       duration-300 border border-gray-200 w-full ${className}`}
       id={id}>
         {options ?.map((option)=>(
            <option key={option} value={option} >
             {option}
            </option>
         ))}

       </select>
    </div>
  )
}

export default React.forwardRef(Select)