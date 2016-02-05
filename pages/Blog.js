'use strict';

import React, {
  Component,
  View,
  Text
} from 'react-native';
import styles from '../css.js';

const WebView = require('react-native-webview-android');

class Blog extends Component {
  render() {
    return (
      <View>
        <Text>test</Text>
        <WebView
          ref="blog"
          style={{
            width: 100,
            height: 100,
            position: 'absolute',
            top: 0,
            left: 0
          }}
          javaScriptEnabled={true}
          geolocationEnabled={false}
          builtInZoomControls={false}
          url="https://www.google.com"
        />
      </View>
    );
  }
}

export default Blog;