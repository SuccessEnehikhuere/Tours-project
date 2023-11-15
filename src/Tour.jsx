import React from 'react'

export const Tour = ({ id, image, info, name, price }) => {
  return (
    <article className='single-tour'>
      <img src={image} alt={name} />
      <div>
        <h2>{info}</h2>
        <span>{price}</span>
      </div>
    </article>
  )
}
