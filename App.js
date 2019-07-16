
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
 import { createStackNavigator, createAppContainer } from 'react-navigation';
 import { View, Image, Button } from 'react-native';

 import Gallery from './components/Gallery';

 const store = configureStore();

 class HomeScreen extends Component {
   render() {
     return (
       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
         <Image
            source={require('./public/home.jpeg')}
            style={{width: 350, height: 300, margin: 10}}
          />
         <Button
           title="Go to Gallery"
           onPress={() => this.props.navigation.navigate('toGallery')}
         />
       </View>
     );
   }
 }

 class MyGallery extends Component {
   render() {
     return(
       <Provider store={store}>
           <Gallery />
       </Provider>
     );
   }
}

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    toGallery: MyGallery,
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(RootStack);

class App extends Component {
  render() {
    return <AppContainer />;
  }
}
export default App;
