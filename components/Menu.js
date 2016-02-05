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

var ExampleComponent = React.createClass({
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
        <ExampleComponent changePage={this.props.changePage} link="Produit du moment">Produit du moment</ExampleComponent> 
        <ExampleComponent changePage={this.props.changePage} link="Set Shop">Set Shop</ExampleComponent>
        <ExampleComponent changePage={this.props.changePage} link="Set By Me">Set By Me</ExampleComponent>
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