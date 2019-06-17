import React from 'react';
import style from './recipe.module.css';

const Recipe = ({title, calories, image, ingredients, instructions}) => {
    return(
        <div className={style.recipe}>
            <h1>{title}</h1>
            <ul>
                {ingredients.map(ingredient =>(
                    <li>
                        {ingredient.text}
                    </li>
                ))}
            </ul>
            <p>Calories: {calories}</p>
            <a href={instructions}>Instructions</a>
            <img className={style.image} src={image} alt=""/>
        </div>
    );
}

export default Recipe;