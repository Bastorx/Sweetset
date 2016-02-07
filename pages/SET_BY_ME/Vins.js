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


class Vins extends Component {
  render() {
    return (
    <ScrollView style={styles.view}>
    <Title bgColor="rgba(142, 175, 120, 0.7)">Vins Blancs</Title>
	  	<Article 
	  	src={{uri:"https://www.sweetset.paris/371-home_default/jurancon.jpg"}}
	  	p_name="Chardonnay"
	  	prix="8,00€"
	  	desc="Comte de Grignan, Année 2014"
	  	/>
	  	<Article 
	  	src={{uri:"https://www.sweetset.paris/384-home_default/pouilly-fume.jpg"}}
	  	p_name="Pouilly Fumé"
	  	prix="17,00€"
	  	desc="Le Grand Plateau, Année 2013"
	  	/>
	  	<Article 
	  	src={{uri:"https://www.sweetset.paris/382-home_default/pinot-gris-sec.jpg"}}
	  	p_name="Pinot gris"
	  	prix="10,00€"
	  	desc="Jux, Année 2013"
	  	/>
    <Title bgColor="rgba(55, 13, 21, 1)">Vins Rouges</Title>
	  	<Article 
	  	src={{uri:"https://www.sweetset.paris/235-home_default/saumur-champigny.jpg"}}
	  	p_name="Saumur Champigny"
	  	prix="9,00€"
	  	desc="Domaine Mollay, Année 2013"
	  	/>
	  	<Article 
	  	src={{uri:"https://www.sweetset.paris/372-home_default/mont-redon-chateauneuf-du-pape.jpg"}}
	  	p_name="Châteauneuf du Pape"
	  	prix="39,00€"
	  	desc="Année 2013"
	  	/>
	  	<Article 
	  	src={{uri:"https://www.sweetset.paris/380-home_default/mouton-cadet.jpg"}}
	  	p_name="Mouton Cadet"
	  	prix="24,00€"
	  	desc="Bordeaux, Année 2012"
	  	/>
      </ScrollView>
    );
  }
}

export default Vins;