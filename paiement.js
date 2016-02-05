'use strict';

import React, {
  Component,
  View,
  Text
} from 'react-native';
import Button from 'react-native-button';
import styles from './css.js';


class Paiement extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Payment</Text>
        <Text>Nom titulaire :</Text>
        <Text>Numéro de carte :</Text>
        <Text>CGV :</Text>
        <Button
          style={{fontSize: 20, color: 'black'}}
          styleDisabled={{color: 'red'}}
          onPress={this._handlePress}
        >
          Validez
        </Button>
      </View>
    );
  }
}

export default Paiement;

