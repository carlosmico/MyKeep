import React from 'react';
import './App.css';

//Router
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

//Components imports
import Header from './components/header/header';

//Views imports
import Error404 from './views/error404/error404';
import Presentation from './views/presentation/presentation';

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
      </div>

      <Switch>
        <Route path="/" exact component={Presentation}/>
        <Route path="*" component={Error404}/>
      </Switch>
    </Router>
  );
}

export default App;
