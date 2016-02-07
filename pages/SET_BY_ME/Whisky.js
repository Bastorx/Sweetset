'use strict';

import React, {
  Component,
  ScrollView,
  View,
  Image,
} from 'react-native';

import IFrame from '../../components/IFrame';
import Article from '../../components/Article';
import Title from '../../components/Title'
import styles from '../../css';



class Whisky extends Component {
  render() {
    return (
    <View>
    <Title bgColor="rgba(175, 100, 15, 0.7)">Whisky</Title>
	  <ScrollView style={styles.view}>
	  	<Article 
	  	src={{uri:"https://www.sweetset.paris/276-home_default/whisky-japonais-nikka-.jpg"}}
	  	p_name="Nikka 10 ans"
	  	prix="42,00€"
	  	desc="Whisky Japonais"
	  	/>
	  	<Article
	  	src={{uri:"https://www.sweetset.paris/376-home_default/glenffidich-12-ans.jpg"}}
	  	p_name="Glenfiddich 12 ans"
	  	prix="36,00€"
	  	desc="Whisky Ecossais"
	  	/>
	  	<Article
	  	src={{uri:"https://www.sweetset.paris/377-home_default/jack-daniels.jpg"}}
	  	p_name="Jack Daniels"
	  	prix="27,00€"
	  	desc="Whisky Américain; Bourbon"
	  	/>
	  	<Article
	  	src={{uri:"https://www.sweetset.paris/370-home_default/armorik-classic.jpg"}}
	  	p_name="Armorik Classic"
	  	prix="32,00€"
	  	desc="Whisky Breton"
	  	/>
      </ScrollView>
      </View>
    );
  }
}

export default Whisky;