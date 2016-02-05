'use strict';
import React, {
  Component,
  AppRegistry
} from 'react-native';

import styles from './css.js';

import Menu from './components/Menu';

import Accueil from './pages/Accueil';
import Blog from './pages/Blog';

import Champagnes from './pages/SET_BY_ME/Champagnes';
import Sweets from './pages/SET_BY_ME/Sweets';
import vins from './pages/SET_BY_ME/Vins';
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
          page: "blog"
      };
  }
  render() {
    return this.renderPage();
  }
  renderPage() {
    switch(this.state.page) {
      case "accueil": 
        return (<Accueil />);
      break;
      case "blog":
        return (<Blog />);
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

AppRegistry.registerComponent('Sweetset', () => Sweetset);
