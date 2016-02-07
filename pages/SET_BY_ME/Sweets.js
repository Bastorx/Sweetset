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

class Sweets extends Component {
  render() {
    return (
    <ScrollView style={styles.view}>
    <Title bgColor="rgba(194, 99, 130, 0.7)">Sucré</Title>
	  	<Article 
	  	src={{uri:"https://www.sweetset.paris/227-home_default/la-vie-en-rose-.jpg"}}
	  	p_name="Meringues Framboise"
	  	prix="8,00€"
	  	desc="Etui de 80g"
	  	/>
	  	<Article 
	  	src={{uri:"https://www.sweetset.paris/228-home_default/les-biscuits-roses.jpg"}}
	  	p_name="Les Biscuits Roses"
	  	prix="6,00€"
	  	desc="Etui de 100g"
	  	/>
    <Title bgColor="rgba(101, 162, 158, 0.7)">Salé</Title>
	  	<Article 
	  	src={{uri:"https://www.sweetset.paris/333-home_default/grillez-moi.jpg"}}
	  	p_name="Salé de Reims"
	  	prix="6,00€"
	  	desc="Etui de 100g"
	  	/>
    <Title bgColor="rgba(150, 43, 43, 0.7)">Beauté</Title>
	  	<Article 
	  	src={{uri:"https://www.sweetset.paris/329-home_default/vernis-essie.jpg"}}
	  	p_name="Vernis Essie"
	  	prix="10,00€"
	  	desc="Take it outside"
	  	/>
	  	<Article 
	  	src={{uri:"https://www.sweetset.paris/328-home_default/vernis-essie.jpg"}}
	  	p_name="Vernis Essie"
	  	prix="10,00€"
	  	desc="Truth or flare"
	  	/>
	  	<Article 
	  	src={{uri:"https://www.sweetset.paris/330-home_default/vernis-essie.jpg"}}
	  	p_name="Vernis Essie"
	  	prix="10,00€"
	  	desc="Vernis magnétique"
	  	/>
	  	<Article 
	  	src={{uri:"https://www.sweetset.paris/331-home_default/vernis-essie.jpg"}}
	  	p_name="Vernis Essie"
	  	prix="10,00€"
	  	desc="Vernis magnétique"
	  	/>
	  	<Article 
	  	src={{uri:"https://www.sweetset.paris/332-home_default/vernis-essie.jpg"}}
	  	p_name="Vernis Essie"
	  	prix="10,00€"
	  	desc="Vernis magnétique"
	  	/>
      </ScrollView>
    );
  }
}

export default Sweets;