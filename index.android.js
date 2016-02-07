'use strict';

import React, {
  Component,
  AppRegistry,
  Navigator,
  Image
} from 'react-native';

import styles from './css.js';

import {Router, Route, Schema, Animations, TabBar} from 'react-native-router-flux';

import Menu from './components/Menu';

import Footer from './components/Footer';

import Accueil from './pages/Accueil'

import Home from './pages/Home';
import Accueil from './pages/Accueil';
import Blog from './pages/Blog';
import Commande from './pages/Commande';

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

import Paiement from './pages/paiement';
import Login from './pages/login';
import Connexion from './pages/Connexion';

class Sweetset extends Component {
  constructor(props) {
      super(props);
      this.state = {
          user: {},
          command: [],
          product: require('./constants/products')
      };
  }
  render() {
    return (
      <Menu>
          <Router hideNavBar={true}>
            <Schema name="default"/>

            <Route name="accueil" component={Accueil}  />

            <Route name="blog" component={Blog} wrapRouter={true} hideNavBar={true}/>
            <Route name="commande" component={Commande} wrapRouter={true} hideNavBar={true}/>
            <Route name="paiement" component={Paiement} wrapRouter={true} hideNavBar={true}/>
            
            <Route name="login" component={Login} wrapRouter={true} hideNavBar={true} initial={true}/>
            <Route name="connexion" component={Connexion} wrapRouter={true} hideNavBar={true}/>

            <Route name="home" component={Home} title="Accueil" wrapRouter={true} hideNavBar={true} />

            <Route name="vins" component={Vins} title="Vins" />
            <Route name="champagnes" component={Champagnes} title="Champagnes" />
            <Route name="sweets" component={Sweets} title="Sweets" />
            
            <Route name="whisky" component={Whisky} title="Whisky" />

            <Route name="chillout" component={Chillout} title="Chillout" />
            <Route name="duLove" component={DuLove} title="DuLove" />
            <Route name="theOffice" component={TheOffice} title="TheOffice" />
            <Route name="thisIsLaFamilia" component={ThisIsLaFamilia} title="ThisIsLaFamilia" />

            <Route name="entreprises" component={Entreprises} title="Entreprises" />
            <Route name="ephemeres" component={Ephemeres} title="Ephemeres" />
          </Router>
        </Menu>
    );
  }
}

AppRegistry.registerComponent('Sweetset', () => Sweetset);

