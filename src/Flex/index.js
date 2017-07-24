import React, {
  PropTypes,
  ViewPropTypes,
  Component,
} from 'react';
import {
  View,
} from 'react-native';

// why not Object, See Here http://t.cn/RKQqS4n
// !! justifyContent alignItems alignSelf 一定要照这个顺序来!,且前面的不能省略
const FLEX_REGEXP = [
  { key: 'flex', regexp: /\d/ },
  { key: 'flexDirection', regexp: /(row(?!-)|row-reverse|column(?!-)|column-reverse)/ },
  { key: 'flexWrap', regexp: /(wrap|nowrap)/ },
  { key: 'justifyContent', regexp: /(flex-start|flex-end|center|space-between|space-around)/ },
  { key: 'alignItems', regexp: /(flex-start|flex-end|center|stretch)/ },
  { key: 'alignSelf', regexp: /(auto|flex-start|flex-end|center|stretch)/ },
];

const getFlexStyle = (flexStr) => {
  const style = {
    flex: {},
  };
  for (let i = 0; i < FLEX_REGEXP.length; i++) {
    const prop = FLEX_REGEXP[i];
    if (prop.regexp.test(flexStr)) {
      flexStr = flexStr.replace(prop.regexp, (match) => {
        style.flex[prop.key] = prop.key === 'flex' ? +match : match;
      });
    }
  }
  return style;
};

class Flex extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
    flex: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    style: ViewPropTypes || View.propTypes.style,
  }
  static defaultProps = {
    children: null,
    flex: '1 row',
    style: null,
  }

  render() {
    const {
      children,
      flex,
      style,
    } = this.props;
    const flexStyle = getFlexStyle(flex);
    return (
      <View style={[flexStyle.flex, style]}>
        {children}
      </View>
    );
  }
}

export default Flex;
