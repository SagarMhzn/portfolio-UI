import React from 'react'
import './css/body.css'
import {RiPencilRuler2Line} from 'react-icons/ri'
import Img2 from './image/img2.png'

export const Body = () => {
    return (
        <div className="body">
            <div></div>
            <div className='heading-container'>
                <div className='heading-wrapper'>
                    <h1>Building digital products, brands</h1>
                    <span><RiPencilRuler2Line className="pencil_icon"/><h1>experience.</h1> </span>
                </div>

                <div className='desc'>
                    <p>
                        a <b>Product Designer</b> and <b>Visual Develepor</b> in SF.<br/>I specialize in UI/UX Design,Responeive Web Design<br/>  and Visual Development.           
                    </p>
                </div>
                
                <div className='btn-container'>
                    <input placeholder="Email Address"/>
                    <button>Connect with me</button>
                </div>

            </div>
            
            <div className='man-photo'><img src={Img2} alt=""/></div>
            <div></div>
        </div>
    )
}

export default Body;