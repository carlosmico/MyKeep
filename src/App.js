import React from 'react';
import './App.css';

//Router
import { HashRouter, Route, Link, Switch } from "react-router-dom";

//Components imports
import Header from './components/header/header';
import Footer from './components/footer/footer';

//Views imports
import Error404 from './views/error404/error404';
import Presentation from './views/presentation/presentation';
import Photo from './views/photo/photo';
import Collections from './views/collections/Collections'
import Collection from './components/collection/collection'
import Home from './views/home/home';

function App() {
  return (
    <HashRouter basename="/">
      <div className="App">
        <Header/>
      
        <Switch>
          <Route path="/" exact component={Home}/>
          {/* <Route path="/home" exact component={Home}/> */}
          <Route path="/photo/:action" exact component={Photo}/>
          <Route path="/collections" exact component={Collections}/>
          <Route path="/collection/:id" exact component={Collection}/>
          <Route path="*" component={Error404}/>
        </Switch>

        <Footer/>
      </div>
    </HashRouter>
  );
}

export default App;
