import React from 'react';
import styles from './Home.module.css';
import Button from "../../components/buttons/Button.jsx";
import RecipeListAll from "../../components/cards/recipe-list/RecipeListAll.jsx";
import {useNavigate} from "react-router-dom";
import Recipes from "../recipes/Recipes.jsx";


function Home() {
    const [hurry, setHurry] = React.useState('');
    const [party, setParty] = React.useState('');
    return (
        <div className={styles.home__wrapper}>
            <header className={styles.home__header_wrapper}>
                <blockquote className={styles.home__header_text}> Your recipes on the go </blockquote>
                <h1 className={styles.home__header_text}> Cook Lazy Get Fatter</h1>
            </header>
            <main className={styles.home__main}>
                <form className={styles.home__form_wrapper}>
                    <h3 className={styles.home__form_title}>Recipe Generator</h3>
                    <label className={styles.home__form_label}>How's your Lazyness level?</label>
                    <select className={styles.home__form_select}>
                    <option>Snack-Size</option>
                    <option>Slow-Cooked</option>
                    <option>All you can ea(t)sy</option>
                    <option>Deep Fried Quantum</option>
                    </select>

                    <label className={styles.home__form_label}>In a hurry? Yes...{hurry}</label>
                    <fieldset className={styles.home__form_btnfields}>
                    <Button variant={"btn_lightgray"} onClick={() => setHurry('No Time to Waste')}>No time to waste</Button>
                    <Button variant={"btn_lightgray"} onClick={() => setHurry('Kinda')}>Kinda?!?</Button>
                    <Button variant={"btn_lightgray"} onClick={() => setHurry('Relax')}>Relax</Button>
                    </fieldset>

                    <label className={styles.home__form_label}>How many people will be leeching of your goodness:</label>
                    <input type="range" id="slider" min="1" max="10" value={party} onChange={(e) => setParty(e.target.value)}/>
                    <span><p className={styles.home__form_label}>{party || 5} Leechers 👨‍👩‍👧‍👦</p></span>

                    <Button variant={"btn_darkgray"}>Let's Cook...maybe</Button>
                </form>
                <section className={styles.home__form_result}>result</section>
                <section className={styles.home__latest_recipelist}>
                    <h2>Latest Recipes</h2>
                    <p>Discover quick, delicious recipes tailored to your taste and lifestyle Because great meals should be easy and enjoyable!</p>
                    <RecipeListAll />
                </section>
            </main>
            </div>
            )
            }
            export default Home