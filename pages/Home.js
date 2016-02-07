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
import Footer from '../components/Footer';

import {Actions} from 'react-native-router-flux';

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
            <CircleButton bgColor="rgba(142, 175, 120, 0.7)" text="VINS" onPress={Actions.vins} />
            <CircleButton bgColor="rgba(200, 100, 60, 0.7)" text="CHAMPAGNES" onPress={Actions.champagnes} />
            <CircleButton bgColor="rgba(175, 100, 15, 0.7)" text="WHISKY" onPress={Actions.whisky} />
            <CircleButton bgColor="rgba(200, 125, 150, 0.7)" text="SWEETS" onPress={Actions.sweets} />
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
            <CircleButton bgColor="rgba(200, 40, 70, 0.7)" text="DU LOVE" onPress={Actions.duLove}/>
            <CircleButton bgColor="rgba(70, 190, 180, 0.7)" text="CHILLOUT" onPress={Actions.chillout}/>
            <CircleButton bgColor="rgba(125, 45, 125, 0.7)" text="LA FAMILIA !" onPress={Actions.thisIsTheFamilia} />
            <CircleButton bgColor="rgba(140, 130, 75, 0.7)" text="THE OFFICE" onPress={Actions.theOffice}/>
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
            <CircleButton bgColor="rgba(195, 90, 55, 0.7)" text="ÉPHÉMÈRES" onPress={Actions.ephemeres} />
            <CircleButton bgColor="rgba(40, 160, 150, 0.7)" text="ENTREPRISES" onPress={Actions.entreprises}/>
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
        <Footer />
      </ScrollView>
    );
  }
}

export default Accueil;