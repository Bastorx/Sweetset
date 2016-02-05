'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  TouchableNativeFeedback,
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

    renderButton: function() {
      return (
        <TouchableNativeFeedback
            onPress={this._onPressButton}
            background={TouchableNativeFeedback.SelectableBackground()}>
          <View style={{width: 150, height: 100, backgroundColor: 'red'}}>
            <Text style={{margin: 30}}>Button</Text>
          </View>
        </TouchableNativeFeedback>
      );
    },
  }
}

const styles = require('./css.js');

AppRegistry.registerComponent('Sweetset', () => Sweetset);
