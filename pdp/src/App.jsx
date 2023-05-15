import React from "react";
import ReactDOM from "react-dom";

import SafeComponent from "./SafeComponent";
import "./index.scss";
import Header from "home/Header";
import Footer from "home/Footer";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <SafeComponent>
      <Header />
    </SafeComponent>
    <main className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Welcome to my website!</h2>
      <p className="mb-4"> Page content </p>
    </main>
    <Footer />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
