import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Navbar,
  Footer,
  Home,
  About,
  Contact,
  Form,
} from "./components";

ReactDOM.render(
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/form" element={<Form />}>
      </Route>
    </Routes>
    <Footer />
  </Router>,
    

  document.getElementById("root")
);

serviceWorker.unregister();