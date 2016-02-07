'use strict';

import React, {
  Component
} from 'react-native';

import _ from 'lodash';

import IFrame from '../components/IFrame';

class Commande extends Component {
  render() {
    return (
    	<ScrollView>
    		{_.map(_.uniq(this.props.commande), function(c) {
    			<Product />
    		})}
    	</ScrollView>
    );
  }
}

export default Commande;