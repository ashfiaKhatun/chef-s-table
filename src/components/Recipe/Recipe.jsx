import time from '../../assets/time.png';
import caloriesImg from '../../assets/calories.png'

const Recipe = (props) => {

    const {recipe, handleWantToCook} = props;

    const {id, img, title, description, ingredients, cook_time, calories} = recipe;

    return (
        <div>
            <div className="card lg:w-96 border shadow-xl">
                <figure className="p-4"><img className="rounded-lg" src={img} /></figure>
                <div className="card-body">
                    
                    <h2 className='text-xl font-semibold'>{title}</h2>
                    <p className='text-gray-500'>{description}</p>
                    <hr />
                    <h4 className='text-lg font-semibold'>Ingredients: {ingredients.length}</h4>
                    <ul className="list-disc pl-5 text-gray-500">
                        {
                            ingredients.map((ingredient, idx) => <li key={idx}>{ingredient}</li>)
                        }
                    </ul>

                    <div className='flex gap-5 text-gray-600'>
                        <div className='flex gap-2'><img src={time} alt="" /><span>{cook_time} minutes</span></div>

                        <div className='flex gap-2'><img src={caloriesImg} alt="" />{calories} calories</div>
                    </div>


                    <div className="card-actions">
                        <button onClick={() => handleWantToCook(id, recipe)} className="btn rounded-full bg-[#0BE58A] font-bold">Want to Cook</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Recipe;