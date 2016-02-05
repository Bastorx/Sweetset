'use strict';

import React, {
<<<<<<< HEAD
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
=======
  Component
} from 'react-native';

import IFrame from '../components/IFrame';

class Accueil  extends Component {
  render() {
    return (
        <IFrame
          ref="accueil"
          url={"https://www.sweetset.paris/"}
        />
>>>>>>> 58d051bfb9ec855c6cfafcbbe94d6553e734315d
    );
  }
  _handlePress() {
    this.props.changePage("main");
  }
}

export default Accueil;