/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

// import Menu from './menu';
// import sidr from './side';
import BasicExample from './menutest';
import Menu from './menutest';

class Sweetset extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Shake or press menu button for dev menu
        </Text>
        // <Menu />
        // <sidr />
        <BasicExample />
      </View>
    );
  }
}

const styles = require('./css.js');

AppRegistry.registerComponent('Sweetset', () => Sweetset);
