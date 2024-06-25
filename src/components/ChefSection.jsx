import React from 'react'
import { ChefCards  } from './ChefCards'
const ChefSection = () => {
    const chiefs = [ 
        {
            name:'Chef Oggy',
            img:'/images/chiefs/Chef Oggy.jpeg',
            recipesCount: '5',
            cuisine: "Benin"
        },
        
        {
            name:'Chef Danny',
            img:'/images/chiefs/Chef Danny.jpeg',
            recipesCount: '10',
            cuisine: "Hausa"
        },
       
        {
            name:'Chef Joy',
            img:'/images/chiefs/Chef Joy.jpeg',
            recipesCount: '13',
            cuisine: "English"
        },
        {
            name:'Chef Chi',
            img:'/images/chiefs/Chef Chi.jpeg',
            recipesCount: '08',
            cuisine: "Ibo"
        },
        {
            name:'Chef Nelly',
            img:'/images/chiefs/Chef Nelly.jpeg',
            recipesCount: '04',
            cuisine: "Yoruba"
        },
        {
            name:'Chef Sandy',
            img:'/images/chiefs/Chef Sandy.jpeg',
            recipesCount: '04',
            cuisine: "Akwa Ibom"
        },
    ]
  return (
    <div className='section chiefs'>
        <h1 className="title">Our Top Chiefs</h1>
        <div className="top-chiefs-container">
   
    {chiefs.map(chief => <ChefCards key={chief.name} chief={chief} />)}
        </div>
    </div>
  )
}

export default ChefSection