import React from 'react'
import { Link } from 'react-router-dom'
import '../Card.css'
const Cards = ({title, description, link}) => {
  return (
    <>
    <div className='card'>
    <Link to={link} className='card-link'>
    
      <h3>{title}</h3>
      <p>{description}</p>
    </Link>
    </div>
   
    </>
  )
}

export default Cards