'use strict';

import React, {
  Component
} from 'react-native';

import IFrame from '../../components/IFrame';

class DuLove extends Component {
  render() {
    return (
        <IFrame
          ref="duLove"
          url={"https://www.sweetset.paris/15-love"}
        />
    );
  }
}

export default DuLove;