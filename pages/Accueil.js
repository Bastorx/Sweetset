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
import IFrame from '../components/IFrame';

class Accueil extends Component {
  render() {
    return (
      <Image source={require('../public/img/01.jpg')} style={styles.background}>
      <View style={styles.container}>
        <Image
        style={styles.logo}
        source={require('../public/img/logo_min.jpg')}
        />
      <Button onPress={this.props.changePage.bind(null,"home")}>
      <Text>Accéder à l'accueil.</Text>
      </Button>
        <Text style={styles.warning}>L'abus d'alcool est dangereux pour la santé, à consommer avec modération!</Text>
      </View>
      </Image>
    );
  }
}

export default Accueil;