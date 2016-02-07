'use strict';

import React, {
  Component,
  View,
  Text,
  TouchableHighlight
} from 'react-native';

class Title extends Component {
  render() {
    const bgColor = this.props.bgColor || "rgba(150, 120, 120, 0.6)";
    const fontColor = this.props.color || "white";
    return (
      <TouchableHighlight style={{borderBottomWidth: 2, backgroundColor: bgColor, width: 150, height: 47}} {...this.props}>
        <Text style={{color: fontColor, textAlign:"center", fontWeight: "500", fontSize: 14, marginTop: 12}}>{this.props.text}</Text>
      </TouchableHighlight>
    );
  }
}

export default Title;