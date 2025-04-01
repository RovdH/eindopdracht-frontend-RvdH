import React, { useState } from "react";
import Button from "../../buttons/Button.jsx";
import {FaCross} from "react-icons/fa6";

const FilterSidebar = ({ onUpdateIngredients }) => {
    const [ingredient, setIngredient] = useState("");
    const [ingredients, setIngredients] = useState([]);

    const addIngredient = () => {
        if (ingredient.trim() && !ingredients.includes(ingredient)) {
            const updatedIngredients = [...ingredients, ingredient];
            setIngredients(updatedIngredients);
            setIngredient("");
            onUpdateIngredients(updatedIngredients);
        }
    };

    const removeIngredient = (ingredientToRemove) => {
        const updatedIngredients = ingredients.filter(
            (item) => item !== ingredientToRemove
        );
        setIngredients(updatedIngredients);
        onUpdateIngredients(updatedIngredients);
    };

    return (
        <div>
            <h2>What's in the fridge</h2>
            <div>
                <input
                    type="text"
                    value={ingredient}
                    onChange={(e) => setIngredient(e.target.value)}
                    placeholder="Add an ingredient"
                />
                <Button variant={"btn_darkgreen"} onClick={addIngredient}>
                    Add
                </Button>
            </div>
            <ul>
                {ingredients.map((item) => (
                    <li
                        key={item}
                    >
                        {item}
                        <button
                            onClick={() => removeIngredient(item)}
                            className="text-red-500 hover:text-red-700"
                        >
                            <FaCross size={16} />
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FilterSidebar;
