import {useState} from "react";
import styles from "./SearchFilters.module.css";
import Button from "../../buttons/Button.jsx";
import {FaSearch} from "react-icons/fa";
import Select from "react-select";

const SearchFilters = ({onSearch, onFilterChange, filters}) => {
    const [searchQuery, setSearchQuery] = useState("");

    const handleCustomSelectChange = (name, selectedOption) => {
        const updatedFilters = {
            ...filters,
            [name]: selectedOption ? selectedOption.value : "",
        };
        onFilterChange(updatedFilters);
    };

    const cuisineOptions = [
        {value: "", label: "Select Cuisine"},
        {value: "italian", label: "Italian"},
        {value: "greek", label: "Greek"},
        {value: "asian", label: "Asian"},
        {value: "mexican", label: "Mexican"},
    ];

    const typeOptions = [
        {value: "", label: "Select Course Type"},
        {value: "main course", label: "Main Course"},
        {value: "breakfast", label: "Breakfast"},
        {value: "appetizer", label: "Appetizer"},
        {value: "soup", label: "Soup"},
        {value: "fingerfood", label: "Fingerfood"},
        {value: "side dish", label: "Side Dish"},
        {value: "dessert", label: "Dessert"},
        {value: "salad", label: "Salad"},
        {value: "snack", label: "Snack"},
    ];

    const dietOptions = [
        {value: "", label: "Select Diet"},
        {value: "vegetarian", label: "Vegetarian"},
        {value: "vegan", label: "Vegan"},
    ];

    const intoleranceOptions = [
        {value: "", label: "Select Intolerance"},
        {value: "gluten", label: "Gluten"},
        {value: "dairy", label: "Dairy"},
    ];

    return (
        <section className={styles.search__wrapper}>
            <h6>What are you eating today?</h6>
            <article className={styles.search__bar}>
                <FaSearch className={styles.search__bar_icon}/>
                <input
                    type="search"
                    name="search"
                    id="search-input"
                    placeholder="Search for recipes..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className={styles.search__bar_find}
                />
                <Button onClick={() => onSearch(searchQuery)} variant={"btn_darkgreen"}>
                    Find Now
                </Button>
            </article>

            <article className={styles.search__filters_options}>
                <Select
                    className={styles.search__filters_select}
                    classNamePrefix="filter"
                    options={cuisineOptions}
                    onChange={(selected) => handleCustomSelectChange("cuisine", selected)}
                    placeholder="Select Cuisine"
                    isSearchable
                />
                <Select
                    className={styles.search__filters_select}
                    classNamePrefix="filter"
                    options={typeOptions}
                    onChange={(selected) => handleCustomSelectChange("type", selected)}
                    placeholder="Select Course Type"
                    isSearchable
                />
                <Select
                    className={styles.search__filters_select}
                    classNamePrefix="filter"
                    options={dietOptions}
                    onChange={(selected) => handleCustomSelectChange("diet", selected)}
                    placeholder="Select Diet"
                    isSearchable
                />
                <Select
                    className={styles.search__filters_select}
                    classNamePrefix="filter"
                    options={intoleranceOptions}
                    onChange={(selected) => handleCustomSelectChange("intolerances", selected)}
                    placeholder="Select Intolerance"
                    isSearchable
                />
            </article>
        </section>
    );
};

export default SearchFilters;
