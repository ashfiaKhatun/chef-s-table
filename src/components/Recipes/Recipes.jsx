import { useEffect } from "react";
import { useState } from "react";
import Recipe from "../Recipe/Recipe";

const Recipes = () => {

    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetch('meals.json')
        .then(res => res.json())
        .then(data => setRecipes(data))
    }, [])

    return (
        <div>
            <div>
                <h1>Our Recipes</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quibusdam aspernatur ipsam sit quaerat deleniti culpa quisquam, obcaecati provident minima recusandae blanditiis! A omnis nesciunt nam voluptatem esse illum ipsum!</p>
            </div>
            <div>
                {
                    recipes.map(recipe => <Recipe key={recipe.id} recipe={recipe}></Recipe>)
                }
            </div>
        </div>
    );
};

export default Recipes;