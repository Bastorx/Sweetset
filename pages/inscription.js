'use strict';

import React, {
  Component,
  View,
  TextInput,
  Image,
  Text
} from 'react-native';
import Button from 'react-native-button';
import styles from '../css.js';
import CheckBox from 'react-native-checkbox';

class inscription extends Component {
  constructor(props) {
      super(props);
      this.state = {
          text: ""
      };
  }
  render() {
    return (
      <Image source={require('../public/img/2.jpg')} style={styles.background}>
        <View style={styles.containerlogin}>
        <View style={{borderBottomWidth: 1, borderBottomColor: 'darkgrey', width: 200, justifyContent:"center", alignItems:"center"}}>
          <Text style={{fontSize: 20, color: 'white', fontWeight: 'bold'}}>S'inscrire</Text>
        </View>
          <View style={{marginTop: 30}}/>          
          <TextInput
              style={{height: 40, width: 150, borderColor: '#FFFFFF', borderWidth: 1, backgroundColor: 'rgba(250, 250, 250, 0.2)'}}
              placeholder={"Nom d'Utilisateur"}
              placeholderTextColor={'rgba(250, 250, 250, 0.3)'}
              onChangeText={(text) => this.setState({text})}
              value={this.state.Identifiant} 
              />
        <View style={{marginTop: 20}}/>          
          <TextInput
              style={{height: 40, width: 150, borderColor: '#FFFFFF', borderWidth: 1, backgroundColor: 'rgba(250, 250, 250, 0.2)'}}
              placeholder={"Mot de passe"}
              placeholderTextColor={'rgba(250, 250, 250, 0.3)'}
              secureTextEntry={true}
              onChangeText={(text) => this.setState({text})}
              value={this.state.motdepasse}
              />
        <View style={{marginTop: 30, width: 200, justifyContent:"center", alignItems:"center"}}/>          
        <View style={{borderBottomWidth: 1, borderBottomColor: 'darkgrey', borderTopWidth: 1, borderTopColor: 'darkgrey', flex: 1}}>
        <CheckBox
          label="J'accepte les conditions d'utilisation"
          labelStyle={{fontSize: 14, color: 'black', fontWeight: 'bold'}}
          checked={false}
          onChange={(checked) => console.log('I am checked', checked)}
        />
        </View>
        <View style={{marginTop: 20}}/>          
          <Button
            style={{fontSize: 20, color: 'black'}}
            styleDisabled={{color: 'red'}}
            onPress={this._handlePress}
          >
            Inscription
          </Button>
        </View>        
    </Image>
    );
  }
}

export default inscription;