'use strict';

import React, {
  Component,
  AppRegistry,
  Navigator,
  Image,
  Text
} from 'react-native';

import styles from './css.js';

import {Router, Route, Schema, Animations, TabBar} from 'react-native-router-flux';

import Menu from './components/Menu';

import Home from './pages/Home';
import Accueil from './pages/Accueil';
import Blog from './pages/Blog';
import Commande from './pages/Commande';
import Connexion from './pages/Connexion';

import ArticlePage from './pages/ArticlePage.js';

import Paiement from './pages/paiement';

function ucfirst(str) {
    var firstLetter = str.slice(0,1);
    return firstLetter.toUpperCase() + str.substring(1);
}

class Sweetset extends Component {
  constructor(props) {
      super(props);
      this.state = {
          user: {},
          command: [],
          products: require('./constants/products')
      };
  }
  render() {
    return (
      <Menu>
          <Router hideNavBar={true}>
            <Schema name="default"/>

            <Route name="accueil" component={Accueil} initial={true} />

            <Route name="blog" component={Blog} wrapRouter={true} hideNavBar={true}/>
            <Route name="commande" component={Commande} wrapRouter={true} hideNavBar={true}/>
            <Route name="paiement" component={Paiement} wrapRouter={true} hideNavBar={true}/>

            <Route name="home" component={Home} title="Accueil" wrapRouter={true} hideNavBar={true} />
            {
              _.map(_.uniq(_.map(this.state.products, 'categorie')), function(cat) {
                return (
                  <Route name={cat} component={ArticlePage} products={this.state.products} categorie={ucfirst(cat)} title={ucfirst(cat)} />
                );
              }.bind(this))
            }
          </Router>
        </Menu>
    );
  }
}

AppRegistry.registerComponent('Sweetset', () => Sweetset);

