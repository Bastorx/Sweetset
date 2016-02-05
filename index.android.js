'use strict';
// import Accueil from './accueil.js';

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
  changePage(page) {
    this.setState({
      page: page
    });
  }
}

<<<<<<< HEAD
const styles = require('./css.js');
=======
>>>>>>> 89cc10b7953e69239ab04ec79cb67f0e8ae2f9a0

AppRegistry.registerComponent('Sweetset', () => Sweetset);
