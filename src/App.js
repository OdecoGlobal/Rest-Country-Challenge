import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";

import Navbar from "./components/Navbar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Search from "./pages/Search/Search";

// const data = async () => {
//   const res = await fetch(
//     `https://restcountries.com/v3.1/name/${encodeURIComponent(
//       "Northern Mariana Islands"
//     )} `
//   );
//   const json = await res.json();
//   console.log(json);
// };
// data();

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<About />} path="/about/:id" />
          <Route element={<Search />} path="/search" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
