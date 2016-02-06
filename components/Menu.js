'use strict';

import React, {
  Component,
  View,
  ScrollView,
  Text
} from 'react-native';
import styles from '../css.js';

import SideMenu from 'react-native-side-menu';
import Button from 'apsl-react-native-button';
import SquareButton from '../components/SquareButton';

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

class MenuBack extends Component {
  render() {
    return (
      <Image source={this.props.src} style={{flex: 1, width: null}}>
        {this.props.children}
      </Image>
    );
  }
}

class Menu extends Component {
  render() {
    const menu = (
      <View>
        <ScrollView>
        <SquareButton changePage={this.props.changePage} link="home" text="Accueil" /> 
        <SquareButton changePage={this.props.changePage} link="blog" text="Blog" /> 
        <SquareButton changePage={this.props.changePage} link="champagne" text="Champagnes" /> 
        <SquareButton changePage={this.props.changePage} link="sweets" text="Sweets" /> 
        <SquareButton changePage={this.props.changePage} link="vins" text="Vins" /> 
        <SquareButton changePage={this.props.changePage} link="whisky" text="Whisky" /> 
        <SquareButton changePage={this.props.changePage} link="chillout" text="Chillout" /> 
        <SquareButton changePage={this.props.changePage} link="duLove" text="DuLove" /> 
        <SquareButton changePage={this.props.changePage} link="theOffice" text="TheOffice" /> 
        <SquareButton changePage={this.props.changePage} link="thisIsLaFamilia" text="ThisIsLaFamilia" /> 
        <SquareButton changePage={this.props.changePage} link="entreprises" text="Entreprises" /> 
        <SquareButton changePage={this.props.changePage} link="ephemeres" text="Ephemeres" /> 
        </ScrollView>
      </View>
      );
    return (
      <SideMenu menu={menu} openMenuOffset={150} scrollsToTop={true}>
          {this.props.children}
      </SideMenu>
    );
  }
}

export default Menu;

