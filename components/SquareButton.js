'use strict';

import React, {
  Component,
  View,
  Text
} from 'react-native';

class Title extends Component {
  render() {
    const bgColor = this.props.bgColor || "rgba(0, 0, 0, 0.6)";
    const fontColor = this.props.color || "white";
    return (
      <View style={{borderBottomWidth: 2, backgroundColor: bgColor, width: 150, height: 47}}>
        <Text style={{color: fontColor, textAlign:"center", fontWeight: "500", fontSize: 14}}>{this.props.text}</Text>
      </View>
    );
  }
}

export default Title;