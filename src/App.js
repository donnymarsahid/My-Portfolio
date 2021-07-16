import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './portfolio/About';
import Home from './portfolio/Home';
import Navbar from './components/Navbar';
import Portfolio from './portfolio/Portfolio';
import Contact from './portfolio/Contact';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
