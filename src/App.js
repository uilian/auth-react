import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyB30rUv0P2yxKj358sl-Scn8pAozlQ5VJA',
      authDomain: 'auth-react-77e1a.firebaseapp.com',
      databaseURL: 'https://auth-react-77e1a.firebaseio.com',
      projectId: 'auth-react-77e1a',
      storageBucket: 'auth-react-77e1a.appspot.com',
      messagingSenderId: '536366310093'
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <View>
        <Header headerText="This is a header" />
        <Text>
          Some text from App!
        </Text>
      </View>
    );
  }
}

export default App;
