'use strict';

import React, {
  Component
} from 'react-native';

import IFrame from '../components/IFrame';

class Accueil  extends Component {
  render() {
    return (
        <IFrame
          ref="accueil"
          url={"https://www.sweetset.paris/"}
        />
    );
  }
}

export default Accueil;