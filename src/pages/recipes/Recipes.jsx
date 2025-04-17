import RecipeListAll from '../../components/cards/recipe-list/RecipeListAll.jsx';
import TitleBar from "../../components/sections/titlebar/TitleBar.jsx";
import {useState} from "react";
import styles from "./Recipes.module.css";
import SearchFilters from "../../components/sections/filterbartop/SearchFilters.jsx";

function Recipes() {
    const [searchQuery, setSearchQuery] = useState("");
    const [filters, setFilters] = useState({});
    const [number, setNumber] = useState(1);

    const handleSearch = (query) => {
        setSearchQuery(query);
    };
    const handleFilterChange = (updatedFilters) => {
        setFilters(updatedFilters);
    }

    return (
        <>
            <header><TitleBar/></header>
            <main>
                <section className={styles.recipes__search_filters}>
                    <SearchFilters onSearch={handleSearch}
                                   onFilterChange={handleFilterChange}
                                   filters={filters}
                    />
                </section>
                <section><RecipeListAll searchQuery={searchQuery} filters={filters} number={number}
                                        setNumber={setNumber}/></section>
            </main>
        </>
    )
}

export default Recipes;