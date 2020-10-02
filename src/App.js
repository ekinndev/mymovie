import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Landing from './components/layout/Landing';
import Layout from './components/layout/Layout';
import NotFound from './components/layout/NotFound';
import Films from './components/layout/Film/Films';
import Film from './components/layout/Film/Film';
import News from './components/layout/News/News';
import TheNews from './components/layout/News/TheNews';
import store from './store/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Layout>
          <Switch>
            <Route exact path='/films' component={Films} />
            <Route exact path='/film/:id' component={Film} />
            <Route exact path='/news/:id' component={TheNews} />
            <Route exact path='/news' component={News} />
            <Route exact path='/' component={Landing} />
            <Route exact path='*' component={NotFound} />
          </Switch>
        </Layout>
      </Router>
    </Provider>
  );
}

export default App;
