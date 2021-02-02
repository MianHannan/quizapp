import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { Result } from './components/Result'
import { Quiz } from './components/Quiz'
import { Home } from './components/Home'

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/result' component={Result} />
        <Route path='/quiz' component={Quiz} />
        <Route path='/' component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
