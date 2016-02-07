'use strict';

import React, {
  Component,
  View,
  Text
} from 'react-native';

class Title extends Component {
  render() {
    const fontColor = this.props.color || "white";
    return (
      <View style={{"backgroundColor": this.props.bgColor}}>
        <Text style={{marginLeft: 15, marginTop: 5, marginBottom: 5,color: fontColor, fontSize: 20, fontFamily: "JOURNAL", textAlign: "center"}}>
          {this.props.children}
        </Text>
      </View>
    );
  }
}

export default Title;