import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Landing from './components/layout/Landing';
import Layout from './components/layout/Layout';
import NotFound from './components/layout/NotFound';
import Filmler from './components/layout/Film/Films';
import Haberler from './components/layout/News/News';

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path='/filmler' component={Filmler} />
          <Route exact path='/haberler' component={Haberler} />
          <Route exact path='/' component={Landing} />
          <Route exact path='*' component={NotFound} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
