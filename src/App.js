import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './portfolio/About';
import Home from './portfolio/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Portfolio from './portfolio/Portfolio';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/portfolio" component={Portfolio} />
        </Switch>
      </Router>
      <Footer />
    </>
  );
}

export default App;
