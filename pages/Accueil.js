'use strict';

import React, {
  Component,
  View,
  Text
} from 'react-native';
import styles from '../css.js';


class Accueil extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Bienvenue sur sweetset</Text>
      </View>
    );
  }
}

export default Accueil;