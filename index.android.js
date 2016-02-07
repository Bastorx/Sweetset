'use strict';

import React, {
  Component,
  AppRegistry
} from 'react-native';

import styles from './css.js';

import Menu from './components/Menu';

import Accueil from './pages/Accueil'

import Home from './pages/Home';
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
          page: "vins"
      };
  }
  render() {
    return this.renderPage();
  }
  renderPage() {
    switch(this.state.page) {
      case "accueil": 
        return (<Accueil changePage={this.changePage.bind(this)}/>);
      break;
      case "home": 
        return (<Menu changePage={this.changePage} state={this.state.page}><Home changePage={this.changePage}/></Menu>);
      break;
      case "blog":
        return (<Menu changePage={this.changePage} state={this.state.page}><Blog /></Menu>);
      break;
      case "champagnes":
        return (<Menu changePage={this.changePage} state={this.state.page}><Champagnes /></Menu>);
      break;
      case "sweets":
        return (<Menu changePage={this.changePage} state={this.state.page}><Sweets /></Menu>);
      break;
      case "vins":
        return (<Menu changePage={this.changePage} state={this.state.page}><Vins /></Menu>);
      break;
      case "whisky":
        return (<Menu changePage={this.changePage} state={this.state.page}><Whisky /></Menu>);
      break;
      case "chillout":
        return (<Menu changePage={this.changePage} state={this.state.page}><Chillout /></Menu>);
      break;
      case "duLove":
        return (<Menu changePage={this.changePage} state={this.state.page}><DuLove /></Menu>);
      break;
      case "theOffice":
        return (<Menu changePage={this.changePage} state={this.state.page}><TheOffice /></Menu>);
      break;
      case "thisIsLaFamilia":
        return (<Menu changePage={this.changePage} state={this.state.page}><ThisIsLaFamilia /></Menu>);
      break;
      case "entreprises":
        return (<Menu changePage={this.changePage} state={this.state.page}><Entreprises /></Menu>);
      break;
      case "ephemeres":
        return (<Menu changePage={this.changePage} state={this.state.page}><Ephemeres /></Menu>);
      break;
      default:
        return (<Accueil changePage={this.changePage}/>);
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
