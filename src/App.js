import React from 'react';
import './App.css';

//Router
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

//Components imports
import Header from './components/header/header';
import Random from './views/random/random';

//Views imports
import Error404 from './views/error404/error404';
import Presentation from './views/presentation/presentation';

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
      
        <Switch>
        <Route path="/" exact component={Presentation}/>
        <Route path="/random" exact component={Random}/>
        <Route path="*" component={Error404}/>
      </Switch>
      </div>
    </Router>
  );
}

export default App;
