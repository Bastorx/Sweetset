'use strict';
// import Accueil from './accueil.js';

import React, {
  Component,
  AppRegistry
} from 'react-native';
import styles from './css.js';

import Menu from './components/Menu';

import Accueil from './pages/Accueil';

import Payment from './paiement';

class Sweetset extends Component {
  constructor(props) {
      super(props);
      this.state = {
          page: "accueil"
      };
  }
  render() {
    return (
<paiement/>
    );
  }
  renderPage() {
      switch(this.state.page) {
        case "accueil": 
          return (<paiement />);
        break;
        default:
          return (<paiement />);
        break;
      }
  }
  changePage(page) {
    this.setState({
      page: page
    });
  }
}

AppRegistry.registerComponent('Sweetset', () => Sweetset);