import React from 'react'
import { Link } from 'react-router-dom'

const NoEncontrada = () => {
  return (
    <div>
        <h1>404</h1>
        <Link to="/Cuidadores" className='btn btn-outline-primary'>Volver atras</Link>
    </div>
  )
}

export default NoEncontrada