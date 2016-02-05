'use strict';

import React, {
  Component,
  View,
  Text
} from 'react-native';
import styles from '../css.js';


class Test_page extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Bouton oppérationnel</Text>
      </View>
    );
  }
}

export default Test_page;