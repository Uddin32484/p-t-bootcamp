import React from 'react';
import {
  BrowserRouter,

  Route,
  Switch
} from "react-router-dom";
import './App.css';
import Header from './Components/Header';
import Jsonvalue from './Components/Jsonvalue';
import Main from './Components/Main';


function App() {
  
  return (
    < BrowserRouter>
      <div>
          <Header/>
        <Switch>
          <Route  exact={true} path="/">
            <Main/>
          </Route>
           <Route  path="/jasonvalue/:num">
            <Jsonvalue/>
          </Route>
            <Route  path="/jasonvalue/:num">
            <Jsonvalue/>
          </Route>
           <Route  path="/jasonvalue/:num/:num1">
            <Jsonvalue/>
          </Route>
        </Switch>
      </div>
    </ BrowserRouter>
   
  );
}

export default App;
