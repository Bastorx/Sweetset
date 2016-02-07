'use strict';

import React, {
  Component,
  ScrollView,
  View,
  Image,
  Text,
} from 'react-native';

import IFrame from '../../components/IFrame';
import Article from '../../components/Article';
import Title from '../../components/Title'
import styles from '../../css';

class Entreprises extends Component {
  render() {
    return (
    	<Image source={require("../../public/img/5.jpg")} style={styles.background}>
    <Title bgColor="rgba(44, 165, 156, 0.7)">Set One Shot Entreprises</Title>
        <View style={{backgroundColor:"rgba(255, 255, 255, 0.7)",padding:15, flex:1, height:null, width:null}}>
        <Text style={{color:"black"}}>
        {"\t"}Sweetset permet aux entreprises d'offrir des sets originaux aux collaborateurs lors d'événements importants (Noël, challenge remporté, ...). Vous pourrez ainsi faire du sur-mesure pour offrir un moment de plaisir aux personnes de votre entreprise mais également surprendre vos clients VIP, amateurs de vin, champagne ou whisky en les livrant le jour même à l'adresse que vous aurez choisi.
Nous vous proposons ce service afin de vous soulager des divers contraintes, nous sommes à votre service et vous pourrez compter sur nous ainsi que sur la qualité de nos produits et de notre service de livraison express.
Pour toute demande d'informations ou de devis, n'hésitez plus, contactez-nous : headoffice@sweetset.paris{"\n"} 
{"\t"}A bientôt,{"\n"}
{"\t"}L'équipe Sweetset.
        </Text>
        </View>
        </Image>
    );
  }
}

export default Entreprises;