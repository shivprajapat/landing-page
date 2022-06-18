import './App.css';
import { Header } from './components/Header'
import Home from './pages/Home';
import Footer from './components/Footer';
import { Div } from './UIKit';
function App() {
  return (
    <Div className="App">
      <Header />
      <Home />
      <Footer />
    </Div>
  );
}

export default App;
