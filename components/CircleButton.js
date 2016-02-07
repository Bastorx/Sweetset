'use strict';

import React, {
  Component,
  View,
  Text,
  TouchableHighlight
} from 'react-native';

class Title extends Component {
  render() {
    const bgColor = this.props.bgColor || "rgba(128, 128, 128, 0.8)";
    const fontColor = this.props.color || "white";
    return (
      <TouchableHighlight style={{marginTop: 20, marginRight: 15, width: 100, height: 100, borderRadius: 1000, backgroundColor: bgColor}} {...this.props}>
        <Text style={{color: fontColor, marginTop: 40, textAlign:"center", fontWeight: "500", fontSize: 14}}>{this.props.text}</Text>
      </TouchableHighlight>
    );
  }
}

export default Title;