'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

class Sweetset extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Payment
        </Text>
        <Text style={styles.welcome}>
          Name :
        </Text>
        <Text style={styles.instructions}>
          Card number :
        </Text>
        <Text style={styles.instructions}>
          date :
        </Text>
        <Text style={styles.instructions}>
          pictogramme :
        </Text>
      </View>
    );
  }
}

const styles = require('./css.js');

AppRegistry.registerComponent('Sweetset', () => Sweetset);
