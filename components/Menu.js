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
          <SquareButton onPress={() => Actions.home} text="Accueil" /> 
          <SquareButton onPress={() => Actions.blog()} text="Blog" /> 
          <SquareButton onPress={() => Actions.champagne} text="Champagnes" /> 
          <SquareButton onPress={() => Actions.sweets} text="Sweets" /> 
          <SquareButton onPress={() => Actions.vins} text="Vins" /> 
          <SquareButton onPress={() => Actions.whisky} text="Whisky" /> 
          <SquareButton onPress={() => Actions.chillout} text="Chillout" /> 
          <SquareButton onPress={() => Actions.duLove} text="DuLove" /> 
          <SquareButton onPress={() => Actions.theOffice} text="TheOffice" /> 
          <SquareButton onPress={() => Actions.thisIsLaFamilia} text="ThisIsLaFamilia" /> 
          <SquareButton onPress={() => Actions.entreprises} text="Entreprises" /> 
          <SquareButton onPress={() => Actions.ephemeres} text="Ephemeres" /> 
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

