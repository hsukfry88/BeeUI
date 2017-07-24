import React, {
  Component,
} from 'react';
import {
  Text,
} from 'react-native';
import Flex from './index';

class FlexDemo extends Component {
  render() {
    return (
      <Flex flex="1 row-reverse wrap" style={{ backgroundColor: '#345' }}>
        <Flex style={{ backgroundColor: '#456' }}><Text>1</Text></Flex>
        <Flex style={{ backgroundColor: '#567' }}><Text>22</Text></Flex>
        <Flex style={{ backgroundColor: '#678' }}><Text>3</Text></Flex>
      </Flex>
    );
  }
}

export default FlexDemo;
