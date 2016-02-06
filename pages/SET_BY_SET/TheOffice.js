'use strict';

import React, {
  Component
} from 'react-native';

import IFrame from '../../components/IFrame';

class TheOffice extends Component {
  render() {
    return (
        <IFrame
          ref="theOffice"
          url={"https://www.sweetset.paris/18-the-office"}
        />
    );
  }
}

export default TheOffice;