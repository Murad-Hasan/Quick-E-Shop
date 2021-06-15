import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserLogIn from './components/pages/UserLogIn/UserLogIn';
import { createContext, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/pages/Home/Home';
import Dashboard from './components/Dashboard/Dashboard';

export const UserContext = createContext();

function App() {
   const [loggedInUser, setLoggedInUser] = useState({});
  return (
   <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Router>
           <Header/>
           <Switch>
              <Route exact path='/'>
                  <Home/>
              </Route>
              <Route path='/login'>
                  <UserLogIn/>
              </Route>
              <Route path='/dashboard'>
                  <Dashboard/>
              </Route>
           </Switch>
        </Router>
     </UserContext.Provider>
  );
}

export default App;
