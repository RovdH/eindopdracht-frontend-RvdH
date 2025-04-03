import './App.css'
import Navbar from "./components/sections/navbar/Navbar.jsx";
import Footer from "./components/sections/footer/Footer.jsx";
import {Route, Routes} from "react-router-dom";
import {routes} from "./routes/routes.jsx";
import {usePageTitle} from "./helpers/UsePageTitle.jsx";

function App() {
    usePageTitle();

    return (
      <>
 <Navbar/>
    <main>
        <Routes>
            {routes.map((route, index) => (
                <Route key={index} path={route.path} element={route.element} />
            ))}
        </Routes>
    </main>
          <footer><Footer/></footer>
      </>
  )
}

export default App
