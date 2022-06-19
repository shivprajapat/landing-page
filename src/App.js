import React, { Fragment, useState, useEffect } from "react";

import { Header } from './components/Header'
import Home from './pages/Home';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
function App() {
  let [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3000);

  }, []);
  return (
    <Fragment>
      {loading ?
        <Preloader />
        : <Fragment>
          <Header />
          <Home />
          <Footer />
        </Fragment>}
      <Header />
      <Home />
      <Footer />
    </Fragment>
  );
}

export default App;
