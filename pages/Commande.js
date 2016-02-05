'use strict';

import React, {
  Component
} from 'react-native';

import IFrame from '../components/IFrame';

class Commande extends Component {
  render() {
    return (
        <IFrame
          ref="commande"
          url={"https://www.sweetset.paris/commande"}
        />
    );
  }
}

export default Commande;