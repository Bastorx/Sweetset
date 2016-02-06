'use strict';

import React, {
  Component,
  View,
  ScrollView,
  Text,
  Image,
  TouchableHighlight
} from 'react-native';

import Communications, {phoneCall, email} from 'react-native-communications';

class FooterButton extends Component {
	render() {
		return (
			<TouchableHighlight {...this.props}>
				<View style={{backgroundColor: "#333333", borderRadius: 1000, borderColor: "#B08239", borderWidth: 1, marginRight: 10, marginTop: 10, marginBottom: 10}} onPress={this.props.onPress}>
					<Image source={this.props.src} style={{flex: 1, width: 25, height: 25, margin: 15}} />
				</View>
			</TouchableHighlight>
		);
	}
}

class Footer extends Component {
  render() {
    return (
      <ScrollView horizontal={true} style={{backgroundColor: "#000000"}}>
      	<View style={{marginLeft: 10}}/>
		<FooterButton src={require('../public/icons/email5.png')} onPress={() => email('hello@sweetset.paris', null, null, "", "")} />
		<FooterButton src={require('../public/icons/telephone5.png')} onPress={() => phoneCall('0954831892')} />
		<FooterButton src={require('../public/icons/instagram12.png')} />
		<FooterButton src={require('../public/icons/facebook55.png')} />
		<FooterButton src={require('../public/icons/twitter1.png')} />
      </ScrollView>
    );
  }
}

export default Footer;