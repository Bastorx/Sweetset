'use strict';

import React, {
  Component
} from 'react-native';

import IFrame from '../../components/IFrame';

class Sweets extends Component {
  render() {
    return (
        <IFrame
          ref="sweets"
          url={"https://www.sweetset.paris/23-sweets"}
        />
    );
  }
}

export default Sweets;