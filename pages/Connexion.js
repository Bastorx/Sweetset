'use strict';

import React, {
  Component
} from 'react-native';

import IFrame from '../components/IFrame';

class Connexion extends Component {
  render() {
    return (
        <IFrame
          ref="connexion"
          url={"https://www.sweetset.paris/connexion"}
        />
    );
  }
}

export default Connexion;