'use strict';

import React, {
  Component
} from 'react-native';

import IFrame from '../../components/IFrame';

class ThisIsFamilia extends Component {
  render() {
    return (
        <IFrame
          ref="thisIsFamilia"
          url={"https://www.sweetset.paris/16-friends-family"}
        />
    );
  }
}

export default ThisIsFamilia;