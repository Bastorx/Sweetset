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
import _ from 'lodash';

class Menu extends Component {
  render() {
    const menu = (
      <View>
        <ScrollView>
          <SquareButton onPress={() => Actions.home()} text="Accueil" />
          { _.isEmpty(this.props.user) ? <SquareButton onPress={() => Actions.login()} text="Connexion" /> : null }
          { _.isEmpty(this.props.user) ? <SquareButton onPress={() => Actions.register()} text="Inscription" /> : <SquareButton onPress={() => this.props.clearUser()} text="Déconnexion" /> }
          <SquareButton onPress={() => Actions.blog()} text="Blog" />
          <SquareButton onPress={() => Actions.paiement()} text="Paiement" />
          {_.isEmpty(this.props.command) ? null : <SquareButton onPress={() => Actions.commande()} text="Commande" />}
          {_.isEmpty(this.props.user) ? null : <SquareButton onPress={() => Actions.admin()} text="Admin" />}
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

