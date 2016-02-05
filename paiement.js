'use strict';

import React, {
  Component,
  View,
  TextInput,
  Text
} from 'react-native';
import Button from 'react-native-button';
import styles from './css.js';


class Paiement extends Component {
  constructor(props) {
      super(props);
      this.state = {
          text: ""
      };
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Payment</Text>
        <Text>Nom titulaire :</Text>

          <TextInput
            style={{height: 40, width: 170, borderColor: 'gray', borderWidth: 1}}
            onChangeText={(text) => this.setState({text})}
            value={this.state.nom}/>

        <Text>Numéro de carte :</Text>

        <TextInput
            style={{height: 40, width: 230, borderColor: 'gray', borderWidth: 1}}
            onChangeText={(text) => this.setState({text})}
            value={this.state.numerocard}/>

        <Text>CGV :</Text>

        <TextInput
            style={{height: 40, width: 40, borderColor: 'gray', borderWidth: 1}}
            onChangeText={(text) => this.setState({text})}
            value={this.state.CGV}/>

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

