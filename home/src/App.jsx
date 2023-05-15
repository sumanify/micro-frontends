import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <Header app={{ name: "Home" }} />
    <main className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Welcome to my website!</h2>
      <p className="mb-4"> Home Page content </p>
    </main>
    <Footer />
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
