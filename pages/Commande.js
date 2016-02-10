'use strict';

import React, {
  Component,
  ScrollView,
  Text,
  Image,
  View,
  TouchableHighlight
} from 'react-native';

import _ from 'lodash';
import SquareButton from '../components/SquareButton';
import {Actions} from 'react-native-router-flux';

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 1
    }
  }
  render() {
    const name = this.props.p_name || "";
    const desc = this.props.desc || "";

    return (
      <ScrollView horizontal={true}>
        <Image source={this.props.src} style={{marginTop: 20, marginRight: 30, marginLeft: 10, width: 100, height: 100, borderRadius: 1000}}/>
          <View style={{marginTop:30,paddingLeft:10,paddingRight:10, width:150}}>
            <Text style={{fontWeight:"bold", width:100}}>
              {"\t"}{name}
              {"\n"}
            </Text>
            <Text>
            {"\t"}{this.props.prix}
            {"\n"}
            {"\n"}
            </Text>
            <ScrollView horizontal={true}>
            <TouchableHighlight onPress={() => this.state.num > 0 ? this.setState({num: this.state.num - 1 }) : _.noop}>
            <Image source={require("../public/icons/minus75.png")} style={{width: 25, height: 25}} />
            </TouchableHighlight>
            <Text style={{fontSize:14}}>
            {"\t"}{"     "}
             {this.state.num}
             {"\t"}{"     "}
            </Text>
            <TouchableHighlight onPress={() => this.setState({num: this.state.num + 1 })}>
            <Image source={require("../public/icons/add182.png")} style={{width: 25, height: 25}} />
            </TouchableHighlight>
            </ScrollView>
          </View>
      </ScrollView>
    );
  }
}

class Commande extends Component {
  render() {
    return (
    	<ScrollView>
    		{_.map(_.uniq(this.props.getCommand()), function(c) {
    			return (<Product src={{uri: c.img}} key={c.name} p_name={c.name} desc={c.description} prix={c.prix + " €"}/>);
    		})}
        {_.isEmpty(this.props.getCommand()) ? <Text>Veuillez dans un premier temps sélectionner des produits</Text> : null}
        <View style={{alignItems: "center", marginTop: 20}}>
        <SquareButton bgColor="rgba(142, 175, 120, 0.7)" text="Passer commande" onPress={() => Actions.paiement()} />
        </View>
    	</ScrollView>
    );
  }
}

export default Commande;