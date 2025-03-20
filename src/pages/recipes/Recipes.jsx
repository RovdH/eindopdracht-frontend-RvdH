import styles from './Recipes.module.css';
import {useState} from "react";
import {Link} from "react-router-dom";

//
const Recipes = () => {
//     const [recipes, setRecipes] = useState([
//         {
//             id: 1,
//         },
//         { id: 2,}
//     ]);

    //Fetch request ipv een hardcoded array hierboven.
    //setRecipes(response.data)

    return (
        <div>
            <h1 className={styles.h1recipes}> Recipes </h1>
            {/*<ul>*/}
            {/*    {recipes.map((recipe) => {*/}
            {/*        return (*/}
            {/*            <li key={recipe.id}>*/}
            {/*                <Link to={`/recipes/${recipe.id}`}>Recipe ${recipe.id}</Link>*/}
            {/*            </li>*/}
            {/*        )*/}
            {/*    })*/}
            {/*    }*/}
            {/*</ul>*/}
        </div>
    )
}

export default Recipes