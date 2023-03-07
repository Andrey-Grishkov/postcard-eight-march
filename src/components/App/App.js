import React from "react";
import './App.css';
import Main from "../Main/Main"
import { Route, Routes } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function App() {
  return (
    <div className="page">
      <div className="area">
        <Header/>
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <Routes>
          <Route exact path="/" element={<Main />}></Route>
          <Route exact path="/about-team" element={<p>Sluga </p>}></Route>
        </Routes>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
