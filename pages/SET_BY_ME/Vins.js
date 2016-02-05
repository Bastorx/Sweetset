'use strict';

import React, {
  Component
} from 'react-native';

import IFrame from '../../components/IFrame';

class Vins extends Component {
  render() {
    return (
        <IFrame
          ref="vins"
          url={"https://www.sweetset.paris/blog"}
        />
    );
  }
}

export default Vins;