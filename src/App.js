import "./styles/App.scss";
import "./styles/Header.scss";
import "./styles/Home.scss";
import "./styles/Footer.scss";
import "./styles/Contact.scss";
import "./styles/mediaquery.scss";

import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home"; // Import your Home component
import Contact from "./components/Contact"; // Import your Contact component
import Footer from "./components/Footer"; // Import your Contact component
import Services from "./components/Services"; // Import your Contact component

export default function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Services" element={<Services />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}
