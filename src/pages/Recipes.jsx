import React from 'react'
import PreviousSearches from '../components/PreviousSearches'
import RecipeCard from '../components/RecipeCard'
const Recipes = () => {
  const recipes = [
    {
        title: "Vegetable porridge",
        image: "/images/Vegetable porridge.jpeg",
        authorImg: "/images/chiefs/Chef Oggy.jpeg",
    }, 
    {
        title: "Jollof Rice, Plantain and Sauce",
        image: "/images/Jollof Rice, plantain and sauce.jpeg",
        authorImg: "/images/chiefs/Chef Danny.jpeg",
    },
    {
        title: "Amala and Ewedu",
        image: "/images/Amala&Ewedu.jpeg",
        authorImg: "/images/chiefs/Chef Joy.jpeg",
    },
    {
        title: "Appetizers",
        image: "/images/Appetizers.jpeg",
        authorImg: "/images/chiefs/Chef Chi.jpeg",
    },
    {
        title: "Plantain and Sauce",
        image: "/images/Plantain&Sauce.jpeg",
        authorImg: "/images/chiefs/Chef Nelly.jpeg",
    },
    {
        title: "Jollof Rice and Chicken",
        image: "/images/All you can eat.jpeg",
        authorImg: "/images/chiefs/Chef Nelly.jpeg",
    }, 
    {
        title: "Amala and Ewedu",
        image: "/images/Amala&Ewedu.jpeg",
        authorImg: "/images/chiefs/Chef Oggy.jpeg",
    },
    {
        title: "Puff puff",
        image: "/images/Appetizers.jpeg",
        authorImg: "/images/chiefs/Chef Joy.jpeg",
    },
    {
        title: "Eba and Egusi",
        image: "/images/Eba&Egusi.jpeg",
        authorImg: "/images/chiefs/Chef Danny.jpeg",
    },
    {
        title: "Munches",
        image: "/images/munches.jpeg",
        authorImg: "/images/chiefs/Chef Oggy.jpeg",
    },
    {
        title: "Ofada rice and Sauce",
        image: "/images/Ofada rice.jpeg",
        authorImg: "/images/chiefs/Chef Nelly.jpeg",
    },
    {
        title: "Plantain and Sauce",
        image: "/images/Plantain&Sauce.jpeg",
        authorImg: "/images/chiefs/Chef Chi.jpeg",
    }
].sort(() => Math.random() - 0.5)

  return (
    <div>
      <PreviousSearches />
      <div className="recipes-container">
        {recipes.map((recipe, index) =>
        <RecipeCard key={index} recipe={recipe}/>
        )}
      
      
      </div>
    </div>
  )
}

export default Recipes