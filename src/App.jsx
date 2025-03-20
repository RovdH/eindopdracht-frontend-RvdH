import './App.css'
import Navbar from "./components/navbar/Navbar.jsx";
import Footer from "./components/footer/Footer.jsx";
import {Route, Routes} from "react-router-dom";
import {routes} from "./routes/routes.jsx";

function App() {

  return (
      <>
      <Navbar/>
    <main>
        <Routes>
            {routes.map((route, index) => (
                <Route
                    key={index}
                    path={route.path}
                    element={route.element}
                />
            ))}

        </Routes>
    </main>
    <Footer/>
      </>
  )
}

export default App
