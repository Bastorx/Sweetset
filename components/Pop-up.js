'use strict';

import React, {
  Component,
  View,
  ScrollView,
  Text,
  Image
} from 'react-native';
import styles from '../css.js';
import Popup from 'react-native-popup';

class Pop extends Component {
    onPressHandle() {
        this.popup.alert(1);
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome} onPress={this.onPressHandle}>click me !</Text>
                <Popup ref={(popup) => { this.popup = popup }}/>
            </View>
        );
    }
};

export default Pop;
