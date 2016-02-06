'use strict';

import React, {
  Component,
  View,
  Image,
  Text
} from 'react-native';

class Article extends Component {
  render() {
    const name = this.props.p_name || "";
    const desc = this.props.desc || "";
    const imageDef = this.props.src || require("../public/img/image3.jpg");

    return (
      <View>
        <Image src={{imageDef}} style={{marginTop: 20, marginRight: 30, width: 100, height: 100, borderRadius: 1000}}/>
          <Text style={{color:"#666",marginTop:30,paddingLeft:10,paddingRight:10,width:200}}>
            {"\t"}{name}
            {"\n"}
            {"\t"}{this.props.prix}
            {"\n"}
            <Text style={{width:200, height:100,fontStyle:"italic",fontSize:10}}>
             {"\n"}
             {"\t"}{desc}            
            </Text>
          </Text>
      </View>
    );
  }
}

export default Article;