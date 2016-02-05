'use strict';

import React, {
  Component
} from 'react-native';

import IFrame from '../../components/IFrame';

class Champagnes extends Component {
  render() {
    return (
        <IFrame
          ref="champagnes"
          url={"https://www.sweetset.paris/champagnes"}
        />
    );
  }
}

export default Champagnes;