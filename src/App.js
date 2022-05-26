import './App.css';
import React from 'react';
import Main from './Main';
import Review from './Review';
import { Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Route path = "/" exact>
        <Main/>
      </Route>
      <Route path="/review/:week_day" exact>
        <Review />
      </Route>
    </div>
  );
}

export default App;
