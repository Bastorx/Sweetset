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


class login extends Component {
  constructor(props) {
      super(props);
      this.state = {
          text: ""
      };
  }
  render() {
    return (
      <Image source={require('./public/img/image1.jpeg')} style={styles.background}>
        <View style={styles.container}>

          <Text style={{color: 'black', fontWeight: 'bold'}}>Sign in{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}</Text>

            <TextInput
              style={{height: 40, width: 150, borderColor: '#0000', borderWidth: 1}}
              onChangeText={(text) => this.setState({text})}
              value={this.state.Identifiant}/>

            <TextInput
              style={{height: 40, width: 150, borderColor: '#0000', borderWidth: 1}}
              onChangeText={(text) => this.setState({text})}
              value={this.state.motdepasse}/>

          <Text style={{color: 'black', fontWeight: 'bold'}}>Agree to the Terms of Service.{"\n"}</Text>

          <Button
            style={{fontSize: 20, color: 'black'}}
            styleDisabled={{color: 'red'}}
            onPress={this._handlePress}
          >
            Connection{"\n"}{"\n"}
          </Button>
        </View> 
    </Image>
    );
  }
}

export default login;