'use strict';

import React, {
  Component,
  View,
  ScrollView,
  Text,
  Image,
  TouchableHighlight,
  Linking
} from 'react-native';

import Communications, {phonecall, email, web} from 'react-native-communications';

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
		<FooterButton src={require('../public/icons/telephone5.png')} onPress={() => phonecall('0954831892', true)} />
		<FooterButton src={require('../public/icons/instagram12.png')} onPress={() => web('https://www.instagram.com/sweetsetparis')} />
		<FooterButton src={require('../public/icons/facebook55.png')} onPress={() => web('https://www.facebook.com/sweetset.paris')}/>
		<FooterButton src={require('../public/icons/twitter1.png')} onPress={() => web('https://twitter.com/sweetsetparis')} />
      </ScrollView>
    );
  }
}

export default Footer;