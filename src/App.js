import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import UserDetails from './UserDetails/UserDetails';

function App() {
  return (
    <div className="App">
           <Router>
                <Switch>
                     <Route path = '/' exact component = {Home} />
                     <Route path = '/home' exact component = {Home} />
                     <Route path = '/user/:userId' exact component = {UserDetails} />
                     <Route path = '*' exact component = {NotFound} />
                </Switch>
           </Router>
    </div>
  );
}

export default App;
