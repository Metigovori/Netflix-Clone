import React, { useEffect, useState } from 'react'
import './Nav.css'

function Nav() {
 const [show, handleShow] = useState(false);

 const controlNavbar = () => {
    if (window.scrollY > 100 ) {
        handleShow(true)
    }else{
      handleShow(false)
    }
}

useEffect(() => {
    window.addEventListener('scroll', controlNavbar)
    return () => {
        window.removeEventListener('scroll', controlNavbar)
    }
}, [])

  return (
    <div className={`nav ${show && "nav__black"}`}>
        <img className="nav__logo" 
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1198px-Netflix_2015_logo.svg.png?20190206123158" 
        alt="Netflix Logo" />

       <img className="nav__avatar" 
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117" 
        alt="Netflix Logo" />

    </div>
  )
}

export default Nav