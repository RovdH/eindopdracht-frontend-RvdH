import React, {useState} from "react";
import Button from "../../buttons/Button.jsx";
import {FaCheck, FaXmark} from "react-icons/fa6";
import styles from "./FilterSidebar.module.css"

const FilterSidebar = ({onUpdateIngredients}) => {
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
        <aside className={styles.sidebar__wrapper}>
            <h3>What items do you have in home?</h3>
            <section className={styles.sidebar__input}>
                <input className={styles.sidebar__input_field}
                       type="text"
                       name="filter"
                       id="filter-input"
                       value={ingredient}
                       onChange={(e) => setIngredient(e.target.value)}
                       placeholder="Add an ingredient"
                />
                <Button variant={"btn_darkgreen"} onClick={addIngredient}>
                    Add...
                </Button>
            </section>
            <h6>My Added Items</h6>
            <ul>
                {ingredients.map((item) => (
                    <li className={styles.sidebar__list_items}
                        key={item}
                    >
                        <FaCheck size={40} className={styles.sidebar__list_icon_check}/><p>{item}</p>
                        <button
                            onClick={() => removeIngredient(item)}
                            className={styles.sidebar__list_icon_x}
                        >
                            <FaXmark size={20}/>
                        </button>
                    </li>
                ))}
            </ul>
        </aside>
    );
};

export default FilterSidebar;
