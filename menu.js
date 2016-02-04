'use strict';
const SideMenu = require('react-native-side-menu');
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text
} from 'react-native';

class Menu extends Component {
  render() {
    return (
      <SideMenu>
        // {this.renderSidebar}
        <Text>Test</Text>
      </SideMenu>
    );
  }
  // renderSidebar() {
  //   return (

  //   )
  // }
}

module.exports = Menu;