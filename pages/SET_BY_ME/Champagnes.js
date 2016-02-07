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

class Champagnes extends Component {
  render() {
    return (
	<View>
    <Title bgColor="rgba(175, 100, 15, 0.7)">Champagnes</Title>
	  <ScrollView style={styles.view}>
	  	<Article 
	  	src={{uri:"https://www.sweetset.paris/285-home_default/nicolas-feuillatte.jpg"}}
	  	p_name="Nicolas Feuillatte"
	  	prix="30,00€"
	  	desc="Champagne brut réserve"
	  	/>
	  	<Article
	  	src={{uri:"https://www.sweetset.paris/340-home_default/ayala.jpg"}}
	  	p_name="Ayala"
	  	prix="35,00€"
	  	desc="Champagne brut réserve"
	  	/>
	  	<Article
	  	src={{uri:"https://www.sweetset.paris/374-home_default/moet-et-chandon.jpg"}}
	  	p_name="Moët et Chandon"
	  	prix="42,00€"
	  	desc="Champagne brut"
	  	/>
	  	<Article
	  	src={{uri:"https://www.sweetset.paris/383-home_default/pommery.jpg"}}
	  	p_name="Pommery Springtime"
	  	prix="41,00€"
	  	desc="Champagne rosé"
	  	/>
	  	<Article
	  	src={{uri:"https://www.sweetset.paris/288-home_default/laurent-perrier-brut.jpg"}}
	  	p_name="Pommery Brut Silver"
	  	prix="46,00€"
	  	desc="Champagne brut"
	  	/>
	  	<Article
	  	src={{uri:"https://www.sweetset.paris/286-home_default/gosset.jpg"}}
	  	p_name="Nicolas Feuillatte Grand Cru 2006"
	  	prix="41,00€"
	  	desc="Champagne blanc de noirs"
	  	/>
	  	<Article
	  	src={{uri:"https://www.sweetset.paris/386-home_default/ruinart.jpg"}}
	  	p_name="Ruinart"
	  	prix="44,00€"
	  	desc="Champagne brut"
	  	/>
      </ScrollView>
      </View>
    );
  }
}

export default Champagnes;