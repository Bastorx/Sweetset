'use strict';

import React, {
  Component,
  View,
  ScrollView,
  Text,
  Image
} from 'react-native';
import styles from '../css.js';

import SideMenu from 'react-native-side-menu';
import SquareButton from './SquareButton';

import {Actions} from 'react-native-router-flux';

class Menu extends Component {
  render() {
    const menu = (
      <View>
        <ScrollView>
          <SquareButton onPress={() => Actions.home()} text="Accueil" /> 
          <SquareButton onPress={() => Actions.login()} text="Login" />
          <SquareButton onPress={() => Actions.paiement()} text="Paiement" />
          <SquareButton onPress={() => Actions.blog()} text="Blog" />
          <SquareButton onPress={() => Actions.commande()} text="Commande" /> 
        </ScrollView>
      </View>
      );
    return (
      <Image source={require('../public/img/01.jpg')} style={styles.background}>
        <SideMenu menu={menu} openMenuOffset={150} scrollsToTop={true}>
            {this.props.children}
        </SideMenu>
      </Image>
    );
  }
}

export default Menu;

