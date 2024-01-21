import React from 'react'

const Button = ({text, bg}) => {
  return (
    <button className={`$ text-white font-bold py-2 px-4 rounded`}>{text}</button>
  )
}

export default Button