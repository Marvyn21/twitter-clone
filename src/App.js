import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import Feed from './components/Feed';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Login} />
        <Route path='/feed' component={Feed} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
