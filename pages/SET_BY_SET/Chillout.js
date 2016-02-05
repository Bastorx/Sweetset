'use strict';

import React, {
  Component
} from 'react-native';

import IFrame from '../../components/IFrame';

class Chillout extends Component {
  render() {
    return (
        <IFrame
          ref="chillout"
          url={"https://www.sweetset.paris/17-good-times"}
        />
    );
  }
}

export default Chillout;