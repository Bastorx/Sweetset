'use strict';

import React, {
  Component,
  ScrollView,
  Text,
  Image,
  View
} from 'react-native';

import _ from 'lodash';


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
            </Text>
            <Text style={{height:100,width:100,fontSize:14}}>
             {"\n"}
             {"\t"}{this.state.num}
            </Text>
          </View>
      </ScrollView>
    );
  }
}

class Commande extends Component {
  componentWillReceiveProps(newProps) {

  }
  render() {
    return (
    	<ScrollView>
    		{_.map(_.uniq(this.props.getCommand()), function(c) {
    			return (<Product src={{uri: c.img}} key={c.name} p_name={c.name} desc={c.description} prix={c.prix + " €"}/>);
    		})}
        {_.isEmpty(this.props.getCommand()) ? <Text>Veuillez dans un premier temps sélectionner des produits</Text> : null}
    	</ScrollView>
    );
  }
}

export default Commande;