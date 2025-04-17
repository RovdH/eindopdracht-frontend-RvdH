import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from "react-router-dom";
import {AuthProvider} from "./components/context/auth/AuthContext.jsx";
import {FavoritesProvider} from "./components/context/favorite-recipes/FavContext.jsx";

createRoot(document.getElementById('root')).render(
    <FavoritesProvider>
        <BrowserRouter>
            <AuthProvider>
               <App/>
            </AuthProvider>
        </BrowserRouter>
    </FavoritesProvider>
)
