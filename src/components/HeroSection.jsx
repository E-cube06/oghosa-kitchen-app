import React from 'react'
import CustomImage from './CustomImage'

const HeroSection = () => {

    const images = [
        "./images/All you can eat.jpeg",
        "./images/Amala&Ewedu.jpeg",
        "./images/Jollof Rice, plantain and sauce.jpeg",
        "./images/munches.jpeg",
        "./images/Ofada rice.jpeg",
        "./images/Pounded yam and vegetables.jpeg",
        "./images/Vegetable porridge.jpeg",
        "./images/Plantain&Sauce.jpeg",
        "./images/Appetizers.jpeg",
        
    ]
  return (
    <div className='section hero'>
        <div className="col typography">
            <h1 className="title">What Are We About</h1>
            <p className="info">Oggy's Kitchen is a place where you can please your soul and tummy with delicious Nigerian food recipes of all delicacies and our services are absolutely flawless. What are you waiting for!!! explore now</p>
            <button className="btn">Explore Now</button>
        </div>
        <div className="col gallery">
            {images.map((src, index) =>(
                <CustomImage key={index} imgSrc={src} pt={"90%"}/>
            ))}
            
           
        </div>
    </div>
  )
}

export default HeroSection