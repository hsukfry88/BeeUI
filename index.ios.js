/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {
  Component,
} from 'react';
import {
  AppRegistry,
  View,
} from 'react-native';
import FlexDemo from './src/Flex/demo';

export default class BeeUI extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <FlexDemo />
      </View>
    );
  }
}

AppRegistry.registerComponent('BeeUI', () => BeeUI);
