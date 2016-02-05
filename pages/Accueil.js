'use strict';

import React, {
  Component,
  Platform,
  Image,
  View,
  Text,
} from 'react-native';
import Button from 'react-native-button';
import styles from '../css.js';

class Accueil extends Component {
  render() {
    return (
      <Image source={require('../public/img/01.jpg')} style={styles.background}>
      <View style={styles.container}>
        <Image
        style={styles.logo}
        source={require('../public/img/logo_min.jpg')}
        />
      <Button onPress={this._handlePress}>
      <Text>Click me !</Text>
      </Button>
        <Text style={styles.warning}>L'abus d'alcool est dangereux pour la santé, à consommer avec modération!</Text>
      </View>
      </Image>
    );
  }
  _handlePress() {
    this.props.changePage("main");
  }
}

export default Accueil;