import React from 'react'
import './headerlogin.css'
import Logo from '../../assets/images/logo.jpeg'


const Headerlogin = () => {
  return (
    <div className='bg-white'>
    <div className="logo"><img src={Logo} alt="logo" /></div>
  </div>
  )
}

export default Headerlogin