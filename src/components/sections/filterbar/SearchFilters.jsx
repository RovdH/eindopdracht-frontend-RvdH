import { useState } from "react";
import styles from "./SearchFilters.module.css";
import Button from "../../buttons/Button.jsx";

const SearchFilters = ({ onSearch, onFilterChange, filters }) => {
    const [searchQuery, setSearchQuery] = useState("");

    const handleDropdownChange = (e) => {
        const { name, value } = e.target;
        const updatedFilters = { ...filters, [name]: value };

        onFilterChange(updatedFilters);
    };

    return (
        <section className={styles.search__wrapper}>
            <h2>What are you eating today?</h2>
            <div className={styles.search__bar_find}>
                <input
                    type="search"
                    placeholder="Search for recipes..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Button onClick={() => onSearch(searchQuery)} variant={"btn_darkgreen"}>Find Now</Button>
            </div>

            <div className={styles.search__filters_options}>
                <select name="cuisine" onChange={handleDropdownChange}>
                    <option value="">Select Cuisine</option>
                    <option value="italian">Italian</option>
                    <option value="greek">Greek</option>
                    <option value="asian">Asian</option>
                    <option value="mexican">Mexican</option>
                </select>

                <select name="diet" onChange={handleDropdownChange}>
                    <option value="">Select Diet</option>
                    <option value="vegetarian">Vegetarian</option>
                    <option value="vegan">Vegan</option>
                </select>

                <select name="intolerances" onChange={handleDropdownChange}>
                    <option value="">Select Intolerance</option>
                    <option value="gluten">Gluten</option>
                    <option value="dairy">Dairy</option>
                </select>
            </div>
        </section>
    );
};

export default SearchFilters;
