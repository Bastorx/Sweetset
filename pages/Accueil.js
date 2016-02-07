'use strict';

import React, {
  Component,
  Platform,
  Image,
  View,
  Text,
  TouchableHighlight
} from 'react-native';
import Button from 'react-native-button';
import styles from '../css.js';
import IFrame from '../components/IFrame';

import {Actions} from 'react-native-router-flux';

class Accueil extends Component {
  render() {
    return (
      <Image source={require('../public/img/01.jpg')} style={styles.background}>
      <View style={styles.container}>
        <Image
        style={styles.logo}
        source={require('../public/img/logo_min.jpg')}
        />
      <TouchableHighlight onPress={Actions.home}>
        <View style={{backgroundColor: "rgba(220, 150, 150, 0.6)"}}>
          <Text style={{margin: 5, fontSize: 15, fontWeight: "400"}}>Accéder à l'accueil.</Text>
        </View>
      </TouchableHighlight>
        <Text style={styles.warning}>L'abus d'alcool est dangereux pour la santé, à consommer avec modération!</Text>
      </View>
      </Image>
    );
  }
}

export default Accueil;