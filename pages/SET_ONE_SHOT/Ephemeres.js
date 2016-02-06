'use strict';

import React, {
  Component
} from 'react-native';

import IFrame from '../../components/IFrame';

class Ephemeres extends Component {
  render() {
    return (
        <IFrame
          ref="ephemeres"
          url={"https://www.sweetset.paris/blog"}
        />
    );
  }
}

export default Ephemeres;