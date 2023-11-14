import React from 'react';
import Logo from '../images/logo.png'

export const Nav = ({ open, onOpen }) => {
  return (
    <nav>
            <a href="#index"><img src={ Logo } alt="logo" /></a>
            <div className='nav-links' style={{ right: `${ open ? '0' : '-200px' }` }}>
                <b className='fa fa-times' onClick={ onOpen }>X</b>
                <ul>
                    <li><a href='#home' >HOME</a></li>
                    <li><a href='#course' >COURSE</a></li>
                    <li><a href='#about'  >ABOUT</a></li>
                    <li><a href='#contact' >CONTACT</a></li>

                </ul>
            </div>
            <b className='fa fa-bars' onClick={ onOpen } >=</b>
    </nav>
  )
}
