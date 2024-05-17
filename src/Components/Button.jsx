// eslint-disable-next-line no-unused-vars
import React from 'react'

function Button({
    // eslint-disable-next-line react/prop-types
    children,
    type = 'button',
    bgColor = 'bg-blue-600',
    textColor = 'text-white',
    className = '',
     ...props
}) {
  return (
    <button className={`px-4 py-2 rounded-lg ${className} ${bgColor} ${textColor}`} {...props}>
        {children}
    </button>
  )
}

export default Button