'use strict';

import React, {
  Component,
  View,
  Text
} from 'react-native';
import styles from '../css.js';

import SideMenu from 'react-native-side-menu';
var Button = require('react-native-button');
// import Test_page from './pages/Test_page';

var ExampleComponent = React.createClass({
  render() {
    return (
      <Button
        style={{fontSize: 16, color: 'green', textAlign:'center'}}
        styleDisabled={{color: 'red'}}
        onPress={this._handlePress}
      >
      {this.props.children}
      </Button>
    );
  },

  _handlePress(event) {
    // return (<Test_page />);
  },
});

class Menu extends Component {
  render() {
    const menu = (
      <View>
        <ExampleComponent>Produit du moment</ExampleComponent> 
        <ExampleComponent>Set Shop</ExampleComponent>
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