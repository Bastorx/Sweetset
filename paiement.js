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
           style={{height: 40, borderColor: 'gray', borderWidth: 1}}
           placeholder="Password"
           placeholdertextcolor="blue"
           onChangeText={(text) => this.setState({text})}
           value={this.state.text}
        />
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

