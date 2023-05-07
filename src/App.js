import './App.css';
import Navigation from './Navigation';
import Footer from './Footer';
import Home from './Home';
import About from './About';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <div className="App">
        <Navigation />
        <article>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
          </Routes>
        </article>
        <Footer />
      </div>
    </>
  );
}

export default App;
