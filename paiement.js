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
        <TextInput
          style={{
            aligneItems: "center",
            alignSelf: "center",
            justifyContent: "center",
            top: -10, height: 50, width: 300, padding: 60,
            borderWidth: 1, borderColor: "#fff", color: "#fff",
            backgroundColor: "transparent"
          }}
          placeholder="Password"
          placeholderTextColor="blue"
          onChangeText={(text) => this.setState({c: text})}/>
          
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

