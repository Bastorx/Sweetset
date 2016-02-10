'use strict';

import React, {
  Component,
  AppRegistry,
  Navigator,
  Image,
  Text
} from 'react-native';

import styles from './css.js';

import {Router, Route, Schema, Animations, TabBar, Actions} from 'react-native-router-flux';

import Menu from './components/Menu';

import Home from './pages/Home';
import Accueil from './pages/Accueil';
import Blog from './pages/Blog';
import Commande from './pages/Commande';
import AdminPage from './pages/AdminPage';

import ArticlePage from './pages/ArticlePage.js';

import Paiement from './pages/Paiement';
import Login from './pages/Login';
import Inscription from './pages/Inscription';

import Entreprises from './pages/Entreprises';

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
      <Menu user={this.state.user} command={this.state.command} clearUser={this.clearUser.bind(this)}>
          <Router hideNavBar={true}>
            <Schema name="default"/>

            <Route name="accueil" component={Accueil} initial={true}/>
            <Route name="admin" component={AdminPage} hideNavBar={true} addProduct={this.addProduct.bind(this)} getUser={this.getUser.bind(this)}/>
            <Route name="blog" component={Blog} hideNavBar={true}/>
            <Route name="commande" component={Commande} hideNavBar={true} getCommand={this.getCommand.bind(this)}/>
            <Route name="paiement" component={Paiement} hideNavBar={true}/>
            
            <Route name="login" component={Login} hideNavBar={true} setUser={this.setUser.bind(this)}/>
            <Route name="register" component={Inscription} hideNavBar={true} setUser={this.setUser.bind(this)}/>

            <Route name="home" component={Home} title="Accueil" hideNavBar={true} />
            {
              _.map(_.uniq(_.map(this.state.products, 'categorie')), function(cat) {
                return (
                  <Route name={cat} key={cat} component={ArticlePage}
                  getProducts={this.getProducts.bind(this)} removeProduct={this.removeProduct.bind(this)}
                  categorie={cat} title={ucfirst(cat)} addCommand={this.addCommand.bind(this)}
                  removeCommand={this.removeCommand.bind(this)}
                  getUser={this.getUser.bind(this)}
                  />
                );
              }.bind(this))
            }
            <Route name="entreprises" component={Entreprises} title="Entreprises" />
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
  setUser(u) {
    this.setState({
      user: u
    })
    Actions.home();
  }
  clearUser() {
    this.setState({user: {}})
    Actions.home();
  }
  getUser() {
    return this.state.user;
  }
  getProducts() {
    return this.state.products;
  }
  addProduct(p) {
    this.setState({products: _.union(this.state.products, [p])})
  }
  removeProduct(name) {
    this.setState({
      products: _.difference(this.state.products, [_.find(this.state.products, {name: name})])
    })
  }
}

AppRegistry.registerComponent('Sweetset', () => Sweetset);

