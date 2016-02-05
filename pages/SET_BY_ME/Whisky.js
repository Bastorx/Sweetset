'use strict';

import React, {
  Component
} from 'react-native';

import IFrame from '../../components/IFrame';

class Whisky extends Component {
  render() {
    return (
        <IFrame
          ref="whisky"
          url={"https://www.sweetset.paris/blog"}
        />
    );
  }
}

export default Whisky;