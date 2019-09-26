import React from 'react';
import './App.css';

//Router
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

//Components imports
import Header from './components/header/header';
import Footer from './components/footer/footer';

//Views imports
import Error404 from './views/error404/error404';
import Presentation from './views/presentation/presentation';
import Random from './views/random/random';
import Collections from './views/collections/Collections'

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
      
        <Switch>
          <Route path="/" exact component={Presentation}/>
          <Route path="/random" exact component={Random}/>
          <Route path="/collections" exact component={Collections}/>
          <Route path="*" component={Error404}/>
        </Switch>

        <Footer/>
      </div>
    </Router>
  );
}

export default App;
