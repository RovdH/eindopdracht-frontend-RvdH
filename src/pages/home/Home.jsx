import React, { useState } from 'react';
import styles from './Home.module.css';
import Button from "../../components/buttons/Button.jsx";
import RecipeListAll from "../../components/sections/recipe-list/RecipeListAll.jsx";
import api from "../../helpers/api.js";
import RecipeCard from "../../components/cards/RecipeCard.jsx";
import {useAbortController} from "../../helpers/UseAbortController.jsx";

function Home() {
    const [lazy, setLazy] = useState('');
    const [maxReadyTime, setMaxReadyTime] = useState(30);
    const [party, setParty] = useState(2);
    const [recipe, setRecipe] = useState(null);
    const [loading, setLoading] = useState(false);
    const [activeButton, setActiveButton] = useState(null);
    const [cancelRequest, setCancelRequest] = useState(false);
    const abortController = useAbortController();

    const fetchRecipe = async () => {
        setLoading(true);
        setCancelRequest(false);
        let query = `&type=${lazy}&minServings=${party}&maxReadyTime=${maxReadyTime}`;

        const minimumLoadingTime = new Promise(resolve => setTimeout(resolve, 2000));

        try {
            const fetchData = await api.get(`/recipes/complexSearch?${query}&number=1`, {signal: abortController.signal});
            const [response] = await Promise.all([fetchData, minimumLoadingTime]);
            const data = response.data;

            if (data.results && data.results.length > 0) {
                setRecipe(data.results[0]);
            } else {
                setRecipe(null);
            }
            setLoading(false);
        } catch (error) {
            if (error.name === 'AbortError') {
                console.error("Request canceled");
            } else {
                console.error("Error fetching recipe:", error);
            }
            setLoading(false);
        }
    }
        const cancelFetchRecipe = () => {
            setCancelRequest(true);
            abortController.abort();
            setLoading(false);
            setRecipe(null);
        };
        return (
            <div className={styles.home__wrapper}>
                <header className={styles.home__header_wrapper}>
                    <blockquote className={styles.home__header_text}> Your recipes on the go</blockquote>
                    <h1 className={styles.home__header_text}> Cook Lazy Get Fatter</h1>
                </header>
                <main className={styles.home__main}>
                    <form className={styles.home__form_wrapper} onSubmit={(e) => e.preventDefault()}>
                        <h3 className={styles.home__form_title}>Recipe Generator</h3>
                        <label htmlFor={"mood"}  className={styles.home__form_label}>How's your mood?</label>
                        <select className={styles.home__form_select} id={"mood"} onChange={(e) => setLazy(e.target.value)}>
                            <option value="snack">Snacky timeeeeeee</option>
                            <option value="soup">Soupy de poopy</option>
                            <option value="main course">No NPC im a Main Course</option>
                            <option value="dessert">Sweet sweet dessert</option>
                        </select>

                        <label className={styles.home__form_label}>In a hurry?</label>
                        <fieldset className={styles.home__form_btnfields}>
                            <Button variant={activeButton === 20 ? "btn_darkgreen" : "btn_lightgray"} onClick={() => {
                                setMaxReadyTime(20);
                                setActiveButton(20);
                            }}>No time to waste</Button>
                            <Button variant={activeButton === 30 ? "btn_darkgreen" : "btn_lightgray"} onClick={() => {
                                setMaxReadyTime(30);
                                setActiveButton(30);
                            }}>Kind of a lot?!?</Button>
                            <Button variant={activeButton === 45 ? "btn_darkgreen" : "btn_lightgray"} onClick={() => {
                                setMaxReadyTime(45);
                                setActiveButton(45);
                            }}>Meh</Button>
                            <Button variant={activeButton === 60 ? "btn_darkgreen" : "btn_lightgray"} onClick={() => {
                                setMaxReadyTime(60);
                                setActiveButton(60);
                            }}>Relax</Button>
                        </fieldset>

                        <label htmlFor={"partysize"} className={styles.home__form_label}>How many people will be leeching off your
                            goodness:</label>
                        <input id={"partysize"} type="range" min="1" max="8" value={party} onChange={(e) => setParty(e.target.value)}/>
                        <span><p className={styles.home__form_label}>{party} Leechers 👨‍👩‍👧‍👦</p></span>

                        <Button variant={"btn_darkgray"} onClick={fetchRecipe}>Let's Cook...maybe</Button>
                        <section className={styles.home__form_result}>
                            {loading ? (
                                <article className={styles.home__form_loading}>
                                    <p>Searching for something tasty...</p>
                                    <img src="/banana-cheerer.gif" alt="Dancing Banana"
                                         className={styles.dancingBanana}/>
                                </article>
                            ) : recipe ? (
                                <RecipeCard recipe={recipe}/>
                            ) : (
                                <p>No recipe found. Try different settings!</p>
                            )}
                        </section>
                        {cancelRequest && <p>Request canceled.</p>}
                        {loading && (
                            <button onClick={cancelFetchRecipe} className={styles.cancelButton}>
                                Cancel Request
                            </button>
                        )}
                    </form>

                    <section className={styles.home__latest_recipelist}>
                        <h2>Latest Recipes</h2>
                        <p>Discover quick, delicious recipes tailored to your Lazyness. Because great meals
                            should be easy and enjoyable!</p>
                        <RecipeListAll number={3}/>
                    </section>
                </main>
            </div>
        );
}
    export default Home;
