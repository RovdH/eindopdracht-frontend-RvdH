import {useParams} from "react-router-dom";
import styles from "../RecipePage.module.css";

function RecipePage() {
    // const { id } = useParams();
    // const response = await axios.get(`/api/recipes/${id}`);

    return (
        <h1 className={styles.h1singlerecipe}>Recipe Page</h1>
)
}

export default RecipePage;