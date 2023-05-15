import React, { Suspense } from "react";
import ReactDOM from "react-dom";

import "./index.scss";
const Header = React.lazy(() => import("home/Header"));
import Footer from "home/Footer";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <Suspense fallback={<div>Loading...</div>}>
      <Header />
    </Suspense>
    <main class="container mx-auto px-4 py-8">
      <h2 class="text-2xl font-bold mb-4">Welcome to my website!</h2>
      <p class="mb-4"> Page content </p>
    </main>
    <Footer />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
