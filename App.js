
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
 import React, { Component } from 'react';
 import { Provider } from 'react-redux';
 import configureStore from './store/ConfigureStore';

 import Gallery from './components/Gallery';

 const store = configureStore();

class App extends Component {
  render() {
    return(
      <Provider store={store}>
          <Gallery />
      </Provider>
    );
  }
}
export default App;
