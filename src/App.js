import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Brewery from './components/Brewery'
import Events from './components/Events'
import Contact from './components/Contact'

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="container">
        <Home />
        <About />
        <Brewery />
        <Events />
        <Contact />
      </main>
    </div>
  );
}

export default App;
