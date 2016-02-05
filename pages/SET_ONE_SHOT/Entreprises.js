'use strict';

import React, {
  Component
} from 'react-native';

import IFrame from '../../components/IFrame';

class Entreprises extends Component {
  render() {
    return (
        <IFrame
          ref="entreprises"
          url={"https://www.sweetset.paris/blog"}
        />
    );
  }
}

export default Entreprises;