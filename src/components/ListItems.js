import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/style/listitems.css'
const ListItems = ({ meal, index }) => {
  return (
    <Link to={`recipe/${meal.id}`} className="link">
      <div className="recipe-container" >
        <p className="label">{meal.title}</p>
        <img
          src={meal.image}
          alt={meal.title}
          width={200}
          height={200}
        />
        <div className="details">
          <p>{meal.readyInMinutes} mins</p>
          <p>{meal.servings} People</p>
        </div>
      </div>
    </Link>
  );
}
export default ListItems