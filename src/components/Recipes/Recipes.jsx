import { useEffect } from "react";
import { useState } from "react";
import Recipe from "../Recipe/Recipe";
import CookItems from "../CookItems/CookItems";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Recipes = () => {

    const [recipes, setRecipes] = useState([]);
    const [cookItems, setCookItems] = useState([]);
    const [prepareItems, setPrepareItems] = useState([]);

    useEffect(() => {
        fetch('meals.json')
            .then(res => res.json())
            .then(data => setRecipes(data))
    }, [])

    const handleWantToCook = (id, recipe) => {
        const newCookItems = [...cookItems, recipe];

        const repeatItem = cookItems.find(cookItem => cookItem.id === id);

        if(repeatItem){
            toast("You already added this item!");
        }
        else{
            setCookItems(newCookItems);

        }
    }

    const handlePrepareItem = (id) => {
        // remove item
        const remainCookItems = cookItems.filter(cookItem => cookItem.id !== id);
        setCookItems(remainCookItems);

        // add item to next section
        const findCookItems = cookItems.find(cookItem => cookItem.id === id);

        const newPrepareItem = [...prepareItems, findCookItems];

        setPrepareItems(newPrepareItem);
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
                <div className="lg:w-1/3 border rounded-2xl p-4">
                    <CookItems cookItems={cookItems} prepareItems={prepareItems} handlePrepareItem={handlePrepareItem}></CookItems>

                </div>

            </div>
            <ToastContainer />
        </div>
    );
};

export default Recipes;