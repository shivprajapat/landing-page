import React, { Fragment, useState, useEffect } from "react";
import { Header, Footer, Preloader } from './components'
import Home from './pages/Home';
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  let [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3000);
    AOS.init({ duration: 1000 });
    AOS.refresh();
  }, []);
  return (
    <Fragment>
      {loading ?
        <Preloader />
        : <Fragment>
          <Header />
          <Home />
          <Footer />
        </Fragment>
      }
    </Fragment>
  );
}

export default App;
