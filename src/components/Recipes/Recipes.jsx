import { useEffect } from "react";
import { useState } from "react";
import Recipe from "../Recipe/Recipe";
import CookItems from "../CookItems/CookItems";

const Recipes = () => {

    const [recipes, setRecipes] = useState([]);
    const [cookItems, setCookItems] = useState([]);

    useEffect(() => {
        fetch('meals.json')
            .then(res => res.json())
            .then(data => setRecipes(data))
    }, [])

    const handleWantToCook = (recipe) => {
        const newCookItems = [...cookItems, recipe];
        setCookItems(newCookItems);
    }

    return (
        <div className="my-6 lg:my-12">
            <div className="text-center space-y-3 mb-6 lg:mb-12 lg:space-y-6">
                <h1 className="text-2xl lg:text-4xl font-bold">Our Recipes</h1>
                <p className="px-4 lg:px-36">Explore our latest mouthwatering recipe—a culinary delight that promises to tantalize your taste buds and impress even the most discerning food enthusiasts. Join us in the kitchen and embark on a flavorful journey today</p>
            </div>


            <div className="flex flex-col lg:flex-row">
                <div className="px-2 lg:px-10 grid gap-6 lg:grid-cols-2">
                    {
                        recipes.map(recipe => <Recipe key={recipe.id} handleWantToCook={handleWantToCook} recipe={recipe}></Recipe>)
                    }
                </div>
                <div className="lg:w-1/3">
                    <CookItems cookItems={cookItems}></CookItems>

                </div>

            </div>
        </div>
    );
};

export default Recipes;