import RecipeList from '../../components/cards/recipe-list/RecipeList';
import TitleBar from "../../components/sections/titlebar/TitleBar.jsx";
import {useState} from "react";
import styles from "./Recipes.module.css";
import SearchFilters from "../../components/sections/filterbar/SearchFilters.jsx";

function Recipes() {
    const [searchQuery, setSearchQuery] = useState("");
    const [filters, setFilters] = useState({});
    const [number, setNumber] = useState(6);

    const handleSearch = (query) => {
        setSearchQuery(query);
    };
    const handleFilterChange = (updatedFilters) => {
        setFilters(updatedFilters);
    }

    return (
        <>
            <TitleBar />
            <section className={styles.recipes__search_filters}>
                <SearchFilters onSearch={handleSearch}
                onFilterChange={handleFilterChange}
                filters={filters}
                />
            </section>
            <RecipeList searchQuery={searchQuery} filters={filters} number={number} setNumber={setNumber} />
        </>
    )
}
export default Recipes;