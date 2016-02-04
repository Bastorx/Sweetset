'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  createClass,
  View
} from 'react-native';

var BasicExample = createClass({  
  getInitialState(fragmentId) {
    return ({ route: 'firstpage' });
  },

  updateFrontView() {
    switch (this.state.route) {
      case 'firstpage':
        return <FirstPage />;
      case 'secondpage':
        return <SecondPage />;
    }
  },

  routeFrontView(fragmentId) {
    this.setState({ route: fragmentId });
  },

  render() {
    var fragment = this.updateFrontView();
    return (
      <View style={styles.container}>
        <SlideMenu frontView={fragment} routeFrontView={this.routeFrontView}
          menu={<Menu />}/>
      </View>
    );
  }
});

module.exports = BasicExample;