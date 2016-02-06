'use strict';

import React, {
  Component,
  View,
  ScrollView,
  Text,
  Image
} from 'react-native';

import styles from '../css';
import Title from '../components/Title';
import CircleButton from '../components/CircleButton';
class AccueilImage extends Component {
  render() {
    return (
      <Image source={this.props.src} style={{flex: 1, width: null, height: 150}}>
        {this.props.children}
      </Image>
    );
  }
}

class Bottles extends Component {
  render() {
    return (
      <View>
        <Title bgColor="#9955B3">Bouteilles</Title>
        <AccueilImage src={require('../public/img/bouteilles.jpg')}>
          <ScrollView horizontal={true} style={{marginLeft: 15}}>
            <CircleButton bgColor="rgba(142, 175, 120, 0.7)" text="VINS"/>
            <CircleButton bgColor="rgba(200, 100, 60, 0.7)" text="CHAMPAGNES"/>
            <CircleButton bgColor="rgba(175, 100, 15, 0.7)" text="WHISKY"/>
            <CircleButton bgColor="rgba(200, 125, 150, 0.7)" text="SWEETS"/>
          </ScrollView>
        </AccueilImage>
      </View>
    );
  }
}

class Sets extends Component {
  render() {
    return (
      <View>
        <Title bgColor="#5F5FD3">Découvrez nots Sets fait pour vous</Title>
        <AccueilImage src={require('../public/img/image3.jpg')}>
          <ScrollView horizontal={true} style={{marginLeft: 15}}>
            <CircleButton bgColor="rgba(200, 40, 70, 0.7)" text="DU LOVE"/>
            <CircleButton bgColor="rgba(70, 190, 180, 0.7)" text="CHILLOUT"/>
            <CircleButton bgColor="rgba(125, 45, 125, 0.7)" text="LA FAMILIA !"/>
            <CircleButton bgColor="rgba(140, 130, 75, 0.7)" text="THE OFFICE"/>
          </ScrollView>
        </AccueilImage>
      </View>
    );
  }
}

class OneShots extends Component {
  render() {
    return (
      <View>
        <Title bgColor="#A9CBFE">Des bouteilles pour tous les goûts</Title>
        <AccueilImage src={require('../public/img/3.jpg')}>
          <ScrollView horizontal={true} style={{marginLeft: 15}}>
            <CircleButton bgColor="rgba(195, 90, 55, 0.7)" text="ÉPHÉMÈRES"/>
            <CircleButton bgColor="rgba(40, 160, 150, 0.7)" text="ENTREPRISES"/>
          </ScrollView>
        </AccueilImage>
      </View>
    );
  }
}

class Accueil  extends Component {
  render() {
    return (
      <ScrollView style={styles.view}>
        <Bottles />
        <Sets />
        <OneShots />
      </ScrollView>
    );
  }
}

export default Accueil;