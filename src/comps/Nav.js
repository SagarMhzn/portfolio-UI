import React from 'react'
import './css/nav.css'
import Img1 from './image/img1.jpg'
import {IoLogoDribbble} from 'react-icons/io5'
import {RiTwitterLine} from 'react-icons/ri'
import {SiInstagram} from 'react-icons/si'

export const Nav = () => {
    return (
        <div className="nav">
            <img src={Img1} alt=""/>
            <div className="nav__links">
                <a href="https://mhzn.netlify.app">About  </a>
                <a href="https://mhzn.netlify.app">Works </a>
                <a href="https://mhzn.netlify.app">Services </a>
                <a href="https://mhzn.netlify.app">Contancts </a>
            </div>
            
            
            
            <div className='icon-container'>
                <IoLogoDribbble className='dribble'/>
                <RiTwitterLine className='twitter'/>
                <SiInstagram className='icon'/>

            </div>

        </div>
    )
}

export default Nav;
