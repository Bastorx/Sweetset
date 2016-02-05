'use strict';

import React, {
  Component,
  Platform,
  Image,
  View,
  Text,
} from 'react-native';
import styles from '../css.js';

class Accueil extends Component {
  render() {
    return (
      <Image source={require('../public/img/01.jpg')} style={styles.background}>
      <View style={styles.container}>
        <Image
        style={styles.logo}
        source={require('../public/img/logo.jpg')}
        />
        <Text style={styles.warning}>L'abus d'alcool est dangereux pour la santé, à consommer avec modération!</Text>
      </View>
      </Image>
    );
  }
  renderImages() {
    <View>
      <Image
        style={styles.logo}
        source={require('../public/img/01.jpg')}
      />
    </View>
  }
}

export default Accueil;