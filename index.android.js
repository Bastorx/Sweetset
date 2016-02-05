'use strict';
import React, {
  Component,
  AppRegistry
} from 'react-native';

import Menu from './components/Menu';

import Accueil from './pages/Accueil';
import Test_page from './pages/Test_page';

class Sweetset extends Component {
  constructor(props) {
      super(props);
      this.state = {
          page: "accueil"
      };
  }
  render() {
    return (
      <Menu changePage={this.changePage}>
        {this.renderPage()}
      </Menu>
    );
  }
  renderPage() {
      switch(this.state.page) {
        case "accueil": 
          return (<Accueil />);
        break;
        case "Produit du moment":
          return (<Test_page />);
        break;
        default:
          return (<Accueil />);
        break;
      }
  }
  changePage = (page, e) => {
      this.setState({
      page: page
    });
  };
}

const styles = require('./css.js');

AppRegistry.registerComponent('Sweetset', () => Sweetset);
