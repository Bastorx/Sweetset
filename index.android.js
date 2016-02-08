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

import ArticlePage from './pages/ArticlePage.js';

import Paiement from './pages/paiement';
import Login from './pages/login';
import Connexion from './pages/Connexion';

import _ from 'lodash';

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

            <Route name="accueil" component={Accueil} initial={true}/>

            <Route name="blog" component={Blog} hideNavBar={true}/>
            <Route name="commande" component={Commande} hideNavBar={true} getCommand={this.getCommand.bind(this)}/>
            <Route name="paiement" component={Paiement} hideNavBar={true}/>
            
            <Route name="login" component={Login} hideNavBar={true}/>
            <Route name="connexion" component={Connexion} hideNavBar={true}/>

            <Route name="home" component={Home} title="Accueil" hideNavBar={true} />
            {
              _.map(_.uniq(_.map(this.state.products, 'categorie')), function(cat) {
                return (
                  <Route name={cat} key={cat} component={ArticlePage} getProducts={this.getProducts.bind(this)} categorie={cat} title={ucfirst(cat)} addCommand={this.addCommand.bind(this)} removeCommand={this.removeCommand.bind(this)}/>
                );
              }.bind(this))
            }
          </Router>
        </Menu>
    );
  }
  addCommand(name) {
    this.setState({
      command: _.union(this.state.command, [_.find(this.state.products, {name: name})])
    })
  }
  removeCommand(name) {
    this.setState({
      command: _.difference(this.state.command, [_.find(this.state.products, {name: name})])
    })
  }
  getCommand() {
    return this.state.command;
  }
  getUser() {
    return this.state.user;
  }
  getProducts() {
    return this.state.products;
  }
}

AppRegistry.registerComponent('Sweetset', () => Sweetset);

