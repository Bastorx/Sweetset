'use strict';

import React, {
  Component,
  View,
  Image,
  ScrollView,
  Text
} from 'react-native';

import styles from '../css';

class Article extends Component {
  render() {
    const name = this.props.p_name || "";
    const desc = this.props.desc || "";

    return (
      <ScrollView horizontal={true}>
        <Image source={this.props.src} style={{marginTop: 20, marginRight: 30, marginLeft: 10, width: 100, height: 100, borderRadius: 1000}}/>
          <Text style={{color:"#666",marginTop:30,paddingLeft:10,paddingRight:10, width:150}}>
            <Text style={{fontWeight:"bold", width:100}}>
              {"\t"}{name}
              {"\n"}
            </Text>
            {"\t"}{this.props.prix}
            {"\n"}
            <Text style={{height:100,width:100, fontStyle:"italic",fontSize:10}}>
             {"\n"}
             {"\t"}{desc}
            </Text>
          </Text>
          <Image source={require("../public/img/cart.png")} style={{marginTop:35}}/>
      </ScrollView>
    );
  }
}

export default Article;