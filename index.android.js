'use strict';
import React, {
  Component,
  AppRegistry
} from 'react-native';

import styles from './css.js';

import Menu from './components/Menu';

import Accueil from './pages/Accueil';
import Blog from './pages/Blog';
import Commande from './pages/Commande';
import Connexion from './pages/Connexion';

import Champagnes from './pages/SET_BY_ME/Champagnes';
import Sweets from './pages/SET_BY_ME/Sweets';
import Vins from './pages/SET_BY_ME/Vins';
import Whisky from './pages/SET_BY_ME/Whisky';

import Chillout from './pages/SET_BY_SET/Chillout';
import DuLove from './pages/SET_BY_SET/DuLove';
import TheOffice from './pages/SET_BY_SET/TheOffice';
import ThisIsLaFamilia from './pages/SET_BY_SET/ThisIsLaFamilia';

import Entreprises from './pages/SET_ONE_SHOT/Entreprises';
import Ephemeres from './pages/SET_ONE_SHOT/Ephemeres';


class Sweetset extends Component {
  constructor(props) {
      super(props);
      this.state = {
          page: "accueil"
      };
  }
  render() {
    return (
      <Menu changePage={this.changePage} state={this.state.page}>
        {this.renderPage()}
      </Menu>
    );
  }
  renderPage() {
    switch(this.state.page) {
      case "accueil": 
        return (<Accueil />);
      break;
      case "blog":
        return (<Blog />);
      break;
      case "champagnes":
        return (<Champagnes />);
      break;
      case "sweets":
        return (<Sweets />);
      break;
      case "vins":
        return (<Vins />);
      break;
      case "whisky":
        return (<Whisky />);
      break;
      case "chillout":
        return (<Chillout />);
      break;
      case "duLove":
        return (<DuLove />);
      break;
      case "theOffice":
        return (<TheOffice />);
      break;
      case "thisIsLaFamilia":
        return (<ThisIsLaFamilia />);
      break;
      case "entreprises":
        return (<Entreprises />);
      break;
      case "ephemeres":
        return (<Ephemeres />);
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

AppRegistry.registerComponent('Sweetset', () => Sweetset);
