import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './portfolio/About';
import Home from './portfolio/Home';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
