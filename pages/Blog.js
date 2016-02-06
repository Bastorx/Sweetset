'use strict';

import React, {
  Component
} from 'react-native';

import IFrame from '../components/IFrame';

class Blog extends Component {
  render() {
    return (
        <IFrame
          ref="blog"
          url={"https://www.sweetset.paris/blog"}
        />
    );
  }
}

export default Blog;