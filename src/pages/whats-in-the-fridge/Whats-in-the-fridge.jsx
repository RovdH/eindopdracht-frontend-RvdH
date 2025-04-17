import styles from './Whats-in-the-fridge.module.css';
import TitleBar from "../../components/sections/titlebar/TitleBar.jsx";
import FilterSidebar from "../../components/sections/filtersidebar/FilterSidebar.jsx";
import RecipeListFridge from "../../components/sections/recipe-list/RecipeListFridge.jsx";
import {useState} from "react";

function WhatsInTheFridge() {
    const [ingredients, setIngredients] = useState([]);
    const [number, setNumber] = useState(6);

    const updateIngredients = (newIngredients) => {
        setIngredients(newIngredients);
    };

    return (
        <>
            <header><TitleBar/></header>
            <main className={styles.witf__wrapper}>
                <FilterSidebar onUpdateIngredients={updateIngredients}/>
                <RecipeListFridge ingredients={ingredients} number={number} setNumber={setNumber}/>
            </main>
        </>
    )
}

export default WhatsInTheFridge