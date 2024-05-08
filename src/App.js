import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import IdCoctail from "./components/IdCoctail/IdCoctail";
import Ingredient from "./components/Ingredient/Ingredient";
import BigImage from "./components/BigImage/BigImage";
import BigIngridImage from "./components/BigIngridImage/BigIngridImage";
import SearchByName from "./components/SearchByName/SearchByName";
import NoteFound from "./components/NoteFoutnd/NoteFound";
import ByName from "./components/ByName/ByName";
import Api from "./components/API/Api";
import Missing from "./components/Missing/Missing";
import About from "./components/About/About";
import Fag from "./components/Fag/Fag";
import Contact from "./components/Contact/Contact";
function App() {
  return (
    <div className="App wrapper">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/idCoctail/:id" element={<IdCoctail />} />
          <Route path="/ingredient/:text" element={<Ingredient />} />
          <Route path="/search/:text" element={<SearchByName />} />
          <Route path="/byname/:item" element={<ByName />} />
          <Route path="*" element={<NoteFound />} />
        </Route>
        <Route path="/bigImage/:id" element={<BigImage />} />
        <Route path="/bigIngrid/:text" element={<BigIngridImage />} />
        <Route path="/api" element={<Api />} />
        <Route path="/missing" element={<Missing />} />
        <Route path="/about" element={<About />} />
        <Route path="/fag" element={<Fag />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
