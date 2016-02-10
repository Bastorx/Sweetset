'use strict';

import React, {
  Component,
  View,
  TextInput,
  Image,
  Text,
  ScrollView
} from 'react-native';
import Button from 'react-native-button';
import styles from '../css.js';
import CheckBox from 'react-native-checkbox';

import _ from 'lodash';

class inscription extends Component {
  constructor(props) {
      super(props);
      this.state = {
          name: "",
          prix: "",
          description: "",
          categorie: "",
          ss_cat: "",
          img: ""
      };
  }
  render() {
    if (_.isEmpty(this.props.getUser())) return null;
    return (
      <Image source={require('../public/img/2.jpg')} style={styles.background}>
      <ScrollView>
        <View style={styles.containerlogin}>
        <View style={{borderBottomWidth: 1, borderBottomColor: 'darkgrey', width: 200, justifyContent:"center", alignItems:"center"}}>
          <Text style={{fontSize: 20, color: 'white', fontWeight: 'bold'}}>Ajouter un produit</Text>
        </View>
          <View style={{marginTop: 30}}/>          
          <TextInput
              style={{height: 40, width: 150, borderColor: '#FFFFFF', borderWidth: 1, backgroundColor: 'rgba(250, 250, 250, 0.5)'}}
              placeholder={"Nom du produit"}
              placeholderTextColor={'rgba(250, 250, 250, 0.8)'}
              onChangeText={(name) => this.setState({name})}
              value={this.state.name} 
              />
        <View style={{marginTop: 20}}/>          
          <TextInput
              style={{height: 40, width: 150, borderColor: '#FFFFFF', borderWidth: 1, backgroundColor: 'rgba(250, 250, 250, 0.5)'}}
              placeholder={"Prix"}
              placeholderTextColor={'rgba(250, 250, 250, 0.8)'}
              onChangeText={(prix) => this.setState({prix})}
              value={this.state.prix}
              />
        <View style={{marginTop: 20}}/>          
          <TextInput
              style={{height: 40, width: 150, borderColor: '#FFFFFF', borderWidth: 1, backgroundColor: 'rgba(250, 250, 250, 0.5)'}}
              placeholder={"Description"}
              placeholderTextColor={'rgba(250, 250, 250, 0.8)'}
              onChangeText={(description) => this.setState({description})}
              value={this.state.description}
              />
        <View style={{marginTop: 20}}/>          
          <TextInput
              style={{height: 40, width: 150, borderColor: '#FFFFFF', borderWidth: 1, backgroundColor: 'rgba(250, 250, 250, 0.5)'}}
              placeholder={"Catégorie"}
              placeholderTextColor={'rgba(250, 250, 250, 0.8)'}
              onChangeText={(categorie) => this.setState({categorie})}
              value={this.state.categorie}
              />
        <View style={{marginTop: 20}}/>          
          <TextInput
              style={{height: 40, width: 150, borderColor: '#FFFFFF', borderWidth: 1, backgroundColor: 'rgba(250, 250, 250, 0.5)'}}
              placeholder={"Sous Catégorie"}
              placeholderTextColor={'rgba(250, 250, 250, 0.8)'}
              onChangeText={(ss_cat) => this.setState({ss_cat})}
              value={this.state.ss_cat}
              />
        <View style={{marginTop: 20}}/>          
          <TextInput
              style={{height: 40, width: 150, borderColor: '#FFFFFF', borderWidth: 1, backgroundColor: 'rgba(250, 250, 250, 0.5)'}}
              placeholder={"URL Image"}
              placeholderTextColor={'rgba(250, 250, 250, 0.8)'}
              onChangeText={(img) => this.setState({img})}
              value={this.state.img}
              />
        <View style={{marginTop: 30, width: 200, justifyContent:"center", alignItems:"center"}}/>
        <View style={{marginTop: 20}}/>          
          <Button
            style={{fontSize: 20, color: 'black'}}
            styleDisabled={{color: 'red'}}
            onPress={() => this._handlePress()}
          >
            Ajouter le produit
          </Button>
        </View>
        </ScrollView>        
    </Image>
    );
  }
  _handlePress() {
    this.props.addProduct({
      name: this.state.name,
      categorie: this.state.categorie,
      prix: parseFloat(this.state.prix),
      description: this.state.description,
      ss_cat: this.state.ss_cat,
      img: this.state.img
    });
  }
}

export default inscription;