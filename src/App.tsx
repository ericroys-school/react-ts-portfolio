import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from './pages/home';
import { NotFound } from './pages/notfound';
import { AboutPage } from "./pages/about";
import { Contact } from './pages/contact'
import { NavHeader } from './components/header';


const App = () => {

  return (
    <BrowserRouter>
    <NavHeader />
    <Routes>
        <Route path="/" element={<AboutPage />} />
        <Route path="/notfound" element={<NotFound />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
