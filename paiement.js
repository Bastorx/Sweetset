'use strict';

import React, {
  Component,
  View,
  Text
} from 'react-native';
import styles from './css.js';


class Paiement extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Payment</Text>
        <Text>Nom titulaire :</Text>
        <Text>Numéro de carte :</Text>
        <Text>GCV :</Text>
        <View style={styles.button}>
          <Text>Validez</Text>
        </View>
      </View>
    );
  }
}

export default Paiement;

