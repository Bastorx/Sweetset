'use strict';

import React, {
  Component,
  View,
  Text
} from 'react-native';
import styles from '../css.js';

import SideMenu from 'react-native-side-menu';

class Menu extends Component {
  render() {
    const menu = (<Text>Ici le sidemenu</Text>);
    return (
      <SideMenu menu={menu} style={styles.sidebar}>
        {this.props.children}
      </SideMenu>
    );
  }
}

export default Menu;