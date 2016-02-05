'use strict';

import React, {
  Component,
  View,
  Text
} from 'react-native';
import styles from '../css.js';


class paiement extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Payment</Text>
      </View>
      <View style={styles.container}>
        <Text>Nom titulaire :</Text>
      </View>
      <View style={styles.container}>
        <Text>Numéro de la carte :</Text>
      </View>
      <View style={styles.container}>
        <Text>GCV :</Text>
      </View>
    );
  }
}

export default paiement;

