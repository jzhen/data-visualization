import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import 'bootstrap';
import Header from './Components/Header/header';
import Homepage from './Components/Home/home';
import Footer from './Components/Footer/footer';

function App() {
  return (
    <Router history={createBrowserHistory()}>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={Homepage} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
