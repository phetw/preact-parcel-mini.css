import { h, render, Component } from 'preact';

import Router from 'preact-router';
import AsyncRoute from 'preact-async-route';

import Header from './component/Header';
import Spinner from './component/Spinner';

import Home from './feature/Home';

export default class App extends Component {
  render() {
    return (
      <main style="height:100vh;background-color:#fff;">
        <Header />
        <section class="container">
          <Router>
            <Home path="/" />
            <AsyncRoute
              path="/about"
              getComponent={() => import('./feature/About').then(module => module.default)}
              loading={() => <Spinner />}
            />
            <AsyncRoute
              path="/contact"
              getComponent={() => import('./feature/Contact').then(module => module.default)}
              loading={() => <Spinner />}
            />
          </Router>
        </section>
      </main>
    );
  }
}
