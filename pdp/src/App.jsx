import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import SafeComponent from "./SafeComponent";
import "remixicon/fonts/remixicon.css";
import "./index.scss";
import Header from "home/Header";
import Footer from "home/Footer";
import PDPContent from "./components/PDPContent";

const App = () => (
  <BrowserRouter>
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      <SafeComponent>
        <Header app={{ name: "Product" }} />
      </SafeComponent>
      <Routes>
        <Route path="/product/:id" element={<PDPContent />} />
      </Routes>
      <Footer />
    </div>
  </BrowserRouter>
);

ReactDOM.render(<App />, document.getElementById("app"));
