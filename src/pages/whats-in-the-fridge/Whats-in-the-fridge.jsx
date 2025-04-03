import styles from './Whats-in-the-fridge.module.css';
import TitleBar from "../../components/sections/titlebar/TitleBar.jsx";
import FilterSidebar from "../../components/sections/filtersidebar/FilterSidebar.jsx";
import RecipeListFridge from "../../components/cards/recipe-list/RecipeListFridge.jsx";
import {useState} from "react";

function WhatsInTheFridge() {
    const [ingredients, setIngredients] = useState([]);
    const [number, setNumber] = useState(9);

    const updateIngredients = (newIngredients) => {
        setIngredients(newIngredients);
    };

    return (
        <>
            <TitleBar />
                <section className={styles.witf__wrapper}>
                    <FilterSidebar onUpdateIngredients={updateIngredients} />
                    <RecipeListFridge ingredients={ingredients} number={number} setNumber={setNumber} />
                </section>
            </>
    )
}

export default WhatsInTheFridge