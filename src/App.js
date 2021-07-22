import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './portfolio/About';
import Home from './portfolio/Home';
import Navbar from './components/Navbar';
import Portfolio from './portfolio/Portfolio';
import Contact from './portfolio/Contact';
import Boola from './content/Boola';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer';
import Movies from './content/Movies';
import NoMatch from './404/NoMatch';
import Donstore from './content/Donstore';

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/contact" component={Contact} />
          {/* Content */}
          <Route path="/post/boola" component={Boola} />
          <Route path="/post/movies" component={Movies} />
          <Route path="/post/donstore" component={Donstore} />
          {/* 404 */}
          <Route path="/*" component={NoMatch} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
