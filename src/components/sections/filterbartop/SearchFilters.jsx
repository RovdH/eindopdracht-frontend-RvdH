import { useState } from "react";
import styles from "./SearchFilters.module.css";
import Button from "../../buttons/Button.jsx";
import {FaSearch} from "react-icons/fa";

const SearchFilters = ({ onSearch, onFilterChange, filters }) => {
    const [searchQuery, setSearchQuery] = useState("");

    const handleDropdownChange = (e) => {
        const { name, value } = e.target;
        const updatedFilters = { ...filters, [name]: value };

        onFilterChange(updatedFilters);
    };

    return (
        <section className={styles.search__wrapper}>
            <h6>What are you eating today?</h6>
            <div className={styles.search__bar}>
                <FaSearch className={styles.search__bar_icon}/>
                <input
                    type="search"
                    placeholder="Search for recipes..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className={styles.search__bar_find}
                />
                <Button onClick={() => onSearch(searchQuery)} variant={"btn_darkgreen"}>Find Now</Button>
            </div>

            <div className={styles.search__filters_options}>
                <select className={styles.search__filters_dropdown} name="cuisine" onChange={handleDropdownChange}>
                    <option value="">Select Cuisine</option>
                    <option value="italian">Italian</option>
                    <option value="greek">Greek</option>
                    <option value="asian">Asian</option>
                    <option value="mexican">Mexican</option>
                </select>

                <select className={styles.search__filters_dropdown} name="type" onChange={handleDropdownChange}>
                    <option value="">Select course type</option>
                    <option value="main course">Main Course</option>
                    <option value="breakfast">Breakfast</option>
                    <option value="appetizer">Appetizer</option>
                    <option value="soup">Soup</option>
                    <option value="fingerfood">Fingerfood</option>
                    <option value="side dish">Side Dish</option>
                    <option value="dessert">Dessert</option>
                    <option value="salad">Salad</option>
                    <option value="snack">Snack</option>
                </select>

                <select className={styles.search__filters_dropdown} name="diet" onChange={handleDropdownChange}>
                    <option value="">Select Diet</option>
                    <option value="vegetarian">Vegetarian</option>
                    <option value="vegan">Vegan</option>
                </select>

                <select className={styles.search__filters_dropdown} name="intolerances" onChange={handleDropdownChange}>
                    <option value="">Select Intolerance</option>
                    <option value="gluten">Gluten</option>
                    <option value="dairy">Dairy</option>
                </select>
            </div>
        </section>
    );
};

export default SearchFilters;
