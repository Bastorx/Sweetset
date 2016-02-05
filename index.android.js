'use strict';
import React, {
  Component,
  AppRegistry
} from 'react-native';

import styles from './css.js';

import Menu from './components/Menu';

import Accueil from './pages/Accueil';

class Sweetset extends Component {
  constructor(props) {
      super(props);
      this.state = {
          page: "accueil"
      };
  }
  render() {
    return (
      <Menu>
        {this.renderPage()}
      </Menu>
    );
  }
  renderPage() {
    switch(this.state.page) {
      case "accueil": 
        return (<Accueil />);
      break;
      default:
        return (<Accueil />);
      break;
    }
  }
  changePage = (e, page) => {
    this.setState({
      page: page
    });
  }
}


AppRegistry.registerComponent('Sweetset', () => Sweetset);
