'use strict';

import React, {
  Component,
  WebView
} from 'react-native';

class IFrame extends Component {
  render() {
    return (
        <WebView
          ref="blog"
          style={{
            width: null,
            height: null,
            flex: 1
          }}
          url={this.props.url}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          decelerationRate="normal"
          startInLoadingState={true}
          {...this.props}
        />
    );
  }
}

export default IFrame;