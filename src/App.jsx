import './App.css'
import {Routes, Route } from 'react-router-dom';
import Home from "./pages/home/Home.jsx";
import WhatsInTheFridge from "./pages/whats-in-the-fridge/Whats-in-the-fridge.jsx";
import Contact from "./pages/contact/Contact.jsx";
import PageNotFound from "./pages/page-not-found/Page-Not-Found.jsx";
import SignIn from "./pages/sign-in/Sign-in.jsx";
import SignUp from "./pages/sign-up/Sign-up.jsx";
import Recipes from "./pages/recipes/Recipes.jsx";
import PrivacyStatement from "./pages/privacy-statement/Privacy-statement.jsx";
import Navbar from "./components/navbar/Navbar.jsx";
import Footer from "./components/footer/Footer.jsx";

function App() {

  return (
    <>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/recipes" element={<Recipes/>}/>
            <Route path="/whats-in-the-fridge" element={<WhatsInTheFridge/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/sign-in" element={<SignIn/>}/>
            <Route path="/sign-up" element={<SignUp/>}/>
            <Route path="*" element={<PageNotFound/>}/>
            <Route path="privacy-statement" element={<PrivacyStatement/>}/>
        </Routes>
        <Footer/>
    </>
  )
}

export default App
