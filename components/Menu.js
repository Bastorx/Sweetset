'use strict';

import React, {
  Component,
  View,
  Text
} from 'react-native';
import styles from '../css.js';

import SideMenu from 'react-native-side-menu';
// var Button = require('react-native-button');
import Button from 'apsl-react-native-button';
// import Test_page from './pages/Test_page';

var ButtonMenu = React.createClass({
  render() {
    return (
      <Button
        style={{fontSize: 16, color: 'red', textAlign:'center'}}
        styleDisabled={{color: 'red'}}
        onPress={this.props.changePage.bind(null, this.props.link || "")}
      >
      {this.props.children}
      </Button>
    );
  }
});

class Menu extends Component {
  render() {
    const menu = (
      <View>
        <ButtonMenu changePage={this.props.changePage} link="accueil">Accueil</ButtonMenu> 
        <ButtonMenu changePage={this.props.changePage} link="blog">Blog</ButtonMenu>
        <ButtonMenu changePage={this.props.changePage} link="champagnes">Champagnes</ButtonMenu>
        <ButtonMenu changePage={this.props.changePage} link="sweets">Sweets</ButtonMenu>
        <ButtonMenu changePage={this.props.changePage} link="vins">Vins</ButtonMenu>
        <ButtonMenu changePage={this.props.changePage} link="whisky">Whisky</ButtonMenu>
        <ButtonMenu changePage={this.props.changePage} link="chillout">Chillout</ButtonMenu>
        <ButtonMenu changePage={this.props.changePage} link="duLove">DuLove</ButtonMenu>
        <ButtonMenu changePage={this.props.changePage} link="theOffice">TheOffice</ButtonMenu>
        <ButtonMenu changePage={this.props.changePage} link="thisIsLaFamilia">ThisIsLaFamilia</ButtonMenu>
        <ButtonMenu changePage={this.props.changePage} link="entreprises">SweetSet Company</ButtonMenu>
        <ButtonMenu changePage={this.props.changePage} link="ephemeres">Ephemeres</ButtonMenu>
      </View>
      );
    return (
      <SideMenu menu={menu} style={styles.sidebar} openMenuOffset={150}>
        {this.props.children}
      </SideMenu>
    );
  }
}

export default Menu;