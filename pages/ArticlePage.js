'use strict';

import React, {
  Component,
  ScrollView,
  View,
  Image,
} from 'react-native';

import Article from '../components/Article';
import Title from '../components/Title'
import styles from '../css';
import _ from 'lodash';

class Whisky extends Component {
  render() {
    return (
	<ScrollView style={styles.view}>
		<Title bgColor="rgba(175, 100, 15, 0.7)">{this.props.categorie}</Title>
		{/*
			_.map(_.filters(this.props.products, {categorie: this.props.categorie}), (article) => {
				return (<Article  src={{uri: article.img}} p_name={article.name} desc={article.description} prix={article.prix + " €"}/>);
			})*/
		}
	</ScrollView>
    );
  }
}

export default Whisky;