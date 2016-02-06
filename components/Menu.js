'use strict';

import React, {
  Component,
  View,
  Text
} from 'react-native';
import styles from '../css.js';

import SideMenu from 'react-native-side-menu';
import Button from 'apsl-react-native-button';
import CircleButton from '../components/CircleButton';

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
        <CircleButton changePage={this.props.changePage} link="Home" text="Accueil" /> 
      
        
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

