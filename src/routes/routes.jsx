import Home from "../pages/home/Home.jsx";
import Recipes from "../pages/recipes/Recipes.jsx";
import WhatsInTheFridge from "../pages/whats-in-the-fridge/Whats-in-the-fridge.jsx";
import Contact from "../pages/contact/Contact.jsx";
import SignIn from "../pages/sign-in/Sign-in.jsx";
import SignUp from "../pages/sign-up/Sign-up.jsx";
import PageNotFound from "../pages/page-not-found/Page-not-found.jsx";
import PrivacyStatement from "../pages/privacy-statement/Privacy-statement.jsx";
import RecipePage from "../pages/recipes/singlerecipe/RecipePage.jsx";

export const routes = [
    { path:'/', label: 'Home', element: <Home/> },
    { path: '/recipes', label: 'Recipes', element: <Recipes/> },
    { path: '/whats-in-the-fridge', label: 'Whats In The Fridge', element: <WhatsInTheFridge/> },
    { path: '/contact', label: 'Contact', element: <Contact/> },
    { path: '/sign-in', label: 'Sign In', element: <SignIn/> },
    { path: '/sign-up', label: 'Sign Up', element: <SignUp/> },
    { path: '*', label: 'PageNotFound', element: <PageNotFound/> },
    { path: 'privacy-statement', label: 'Privacy Statement', element: <PrivacyStatement/> },
    { path: '/recipes/:HIERSPOONACULAR API', label: 'RecipePage ', element: <RecipePage/> },
    ];

/*<{ path: '/profile" element={isAuth ? <ProfilePage ', component:  : <Navigate to ="/sign-in" ', component: }', component: */
/*<{ path: '/profile" element={auth ? <ProfilePage ', component:  : <Navigate to="/login"', component: }', component: */
/*Voorbeeld van private path bijv. als iemand naar profile wil dan verzet die hem naar login als die persoon niet ingelogd is.*/
/*Om dit te doen maak je een een usestate aan in de app (bijv. const [isAuth, toggleIsAuth] = useState(initial FALSE); vervolgens plaats je deze params in de () van de Sign In pagina daar zet je dus wat usestate in in dit voorbeeld
   enaamd isAuth, toggleAuth. Met een button onClick={() => toggleIsAuth((prev)=> !prev)}>{isAuth ? "SignOut" : "SignIn" }<button>*/

