import React from 'react'
import './css/nav.css'
import Img1 from './image/img1.jpg'
import {IoLogoDribbble} from 'react-icons/io5'
import {RiTwitterLine} from 'react-icons/ri'
import {SiInstagram} from 'react-icons/si'

export const Nav = () => {
    return (
        <div className="nav">
            <img src={Img1}/>
            <div className="nav__links">
                <a href="#">About  </a>
                <a href="#">Works </a>
                <a href="#">Services </a>
                <a href="#">Contancts </a>
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
