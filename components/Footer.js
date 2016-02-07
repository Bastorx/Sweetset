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

import WebIntent from 'react-native-webintent';

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
  /*componentDidMount() {
	Linking.addEventListener('https://www.facebook.com/sweetset.paris', this._handleFacebook);
	Linking.addEventListener('https://twitter.com/sweetsetparis', this._handleFacebook);
	Linking.addEventListener('https://www.instagram.com/sweetsetparis', this._handleFacebook);
  }
  componentWillUnmount() {
	Linking.removeEventListener('https://www.facebook.com/sweetset.paris', this._handleFacebook);
	Linking.removeEventListener('https://twitter.com/sweetsetparis', this._handleFacebook);
	Linking.removeEventListener('https://www.instagram.com/sweetsetparis', this._handleFacebook);
  }*/
  render() {
    return (
      <ScrollView horizontal={true} style={{backgroundColor: "#000000"}}>
      	<View style={{marginLeft: 10}}/>
		<FooterButton src={require('../public/icons/email5.png')} onPress={() => email('hello@sweetset.paris', null, null, "", "")} />
		<FooterButton src={require('../public/icons/telephone5.png')} onPress={() => phoneCall('0954831892')} />
		<FooterButton src={require('../public/icons/instagram12.png')} onPress={this._handleInsta} />
		<FooterButton src={require('../public/icons/facebook55.png')} onPress={this._handleFacebook}/>
		<FooterButton src={require('../public/icons/twitter1.png')} onPress={this._handleTwitter} />
      </ScrollView>
    );
  }
  _handleInsta() {
  }
  _handleFacebook() {
  }
  _handleTwitter() {
  }
}

export default Footer;