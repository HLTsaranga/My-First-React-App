import React from 'react';
import {BrowserRouter, Switch, Route, NavLink} from 'react-router-dom';

import Home from './Home';
import Dashboard from './Dashboard';
import Login from './Login';
//import Register from './Register';

function App(){
    return (
      <div className="App">
        <BrowserRouter>
          <div className="header">
            <NavLink exact activeClassName="active" to="/">Home</NavLink>
            <NavLink activeClassName="active" to="/Login">Login</NavLink>
            <NavLink activeClassName="active" to="/Dashboard">Dashboard</NavLink>
           
          </div>
          <div className="content">
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/Login" component={Login}/>
              <Route path="/Dashboard" component={Dashboard}/>

               
            </Switch>
          </div>     
            
        </BrowserRouter>
      </div>
        
  )

  }

//<small>Aceess without token only</small>
//<small>Aceess with token only</small>
 
export default App;
