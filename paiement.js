'use strict';

import React, {
  Component,
  View,
  Text
} from 'react-native';
import styles from '../css.js';


class Sweetset extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Payment
        </Text>
        <Text style={styles.instructions}>
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

export default Accueil;

