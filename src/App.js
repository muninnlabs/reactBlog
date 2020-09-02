import React, { Component } from 'react';
import Routes from './routes';
import './style.scss';
import { Provider } from 'react-redux';

import Header from './components/header/header.component';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Header />
          <Routes />
        </div>
      </Provider>
    );
  }
}

export default App;
