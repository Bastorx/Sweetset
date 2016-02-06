'use strict';

import React, {
  Component,
  View,
  TextInput,
  Image,
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
      <Image source={require('./public/img/image2.jpeg')} style={styles.background}>
        <View style={styles.container}>

          <Text style={{color: 'black', fontWeight: 'bold'}}>Payment{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}</Text>

          <Text style={{color: 'pink', fontWeight: 'bold'}}>Nom titulaire :</Text>

            <TextInput
              style={{height: 40, width: 170, borderColor: '#0000', borderWidth: 1}}
              onChangeText={(text) => this.setState({text})}
              value={this.state.nom}/>

          <Text style={{color: 'pink', fontWeight: 'bold'}}>Numéro de carte :</Text>

          <TextInput
              style={{height: 40, width: 230, borderColor: '#0000', borderWidth: 1}}
              onChangeText={(text) => this.setState({text})}
              value={this.state.numerocard}/>

          <Text style={{color: 'pink', fontWeight: 'bold'}}>Date Expiration :</Text>

          <TextInput
              style={{height: 40, width: 80, borderColor: '#0000', borderWidth: 1}}
              onChangeText={(text) => this.setState({text})}
              value={this.state.dateexpiration}/>

          <Text style={{color: 'pink', fontWeight: 'bold'}}>CGV :</Text>

          <TextInput
              style={{height: 40, width: 40, borderColor: '#0000', borderWidth: 1}}
              onChangeText={(text) => this.setState({text})}
              value={this.state.CGV}/>

          <Text style={{color: 'black', fontWeight: 'bold'}}>Agree to the Terms of Service.{"\n"}</Text>

          <Button
            style={{fontSize: 20, color: 'black'}}
            styleDisabled={{color: 'red'}}
            onPress={this._handlePress}
          >
            Commandez{"\n"}{"\n"}
          </Button>
          <Image style={styles.icon} source={require('./public/img/paypal_mc_visa_amex_disc_210x80.gif')} />
        </View> 
    </Image>
    );
  }
}

export default Paiement;

