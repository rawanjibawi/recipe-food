import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import '../assets/style/recipepage.css'
// import RecipeItem from '../components/RecipeItem'
const RecipePage = () => {
    const { id } = useParams(); //get the dynamic id from the parameters
    const [recipe, setRecipe] = useState([]);
    useEffect(()=>{
        fetchRecipe();
    }, [id])

    const fetchRecipe= async ()=>{
        const response = await fetch(
          `https://api.spoonacular.com/recipes/${id}/information?apiKey=58419ffcb3a048df84e2911550bc2e27`,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const data = await response.json();
        console.log("hi ", data);
        setRecipe(data);
    }
  return (
    <div className="recipe-details-container">
      <div className="recipe-header">
        <h1>{recipe.title}</h1>
      </div>
      <div className="recipe-details-page">
        <img className="recipe-image" src={recipe.image} alt={recipe.title} />
        <div className="recipe-content">
          <div className="recipe-info">
            <h2>Ingredients</h2>
            <ul className="ingredient-list">
              {recipe.extendedIngredients &&
                recipe.extendedIngredients.map((ingredient, index) => (
                  <li key={index}>{ingredient.original}</li>
                ))}
            </ul>
          </div>
          <div className="recipe-instructions">
            <h2>Instructions</h2>
            <p className="instructions-text">{recipe.instructions}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipePage
