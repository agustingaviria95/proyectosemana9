import './App.css';
import Header from './components/Header';
import Homepage from './views/Homepage';
import {BrowserRouter as Router,Switch,Route,} from "react-router-dom";
import Contact from './views/Contact';
import MovieDetail from './views/Movie-Detail';

export default function App() {
  return (
    <div className="App">
      <Router>
      <Header contact="Contáctenos" />
      <Switch>
          <Route path="/Movie-Detail/:id">
            <MovieDetail />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
          <Homepage/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}