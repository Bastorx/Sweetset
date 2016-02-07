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

class Entreprises extends Component {
  render() {
    return (
        <View>
        <Text>
        {"\t"}Sweetset permet aux entreprises d'offrir des sets originaux aux collaborateurs lors d'événements importants (Noël, challenge remporté, ...). Vous pourrez ainsi faire du sur-mesure pour offrir un moment de plaisir aux personnes de votre entreprise mais également surprendre vos clients VIP, amateurs de vin, champagne ou whisky en les livrant le jour même à l'adresse que vous aurez choisi.
Nous vous proposons ce service afin de vous soulager des divers contraintes, nous sommes à votre service et vous pourrez compter sur nous ainsi que sur la qualité de nos produits et de notre service de livraison express.
Pour toute demande d'informations ou de devis, n'hésitez plus, contactez-nous : headoffice@sweetset.paris{"\n"} 
A bientôt,{"\n"}
L'équipe Sweetset.
        </Text>
        </View>
    );
  }
}

export default Entreprises;