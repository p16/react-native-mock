import createMockComponent from './../components/createMockComponent';

const NavigationExperimental = {
  StateUtils: createMockComponent('NavigationStateUtils'),
  Reducer: createMockComponent('NavigationReducer'),
  AnimatedView: createMockComponent('NavigationAnimatedView'),
  Transitioner: createMockComponent('NavigationTransitioner'),
  Card: createMockComponent('NavigationCard'),
  CardStack: createMockComponent('NavigationCardStack'),
  Header: createMockComponent('NavigationHeader'),
  PropTypes: createMockComponent('NavigationPropTypes'),
};

module.exports = NavigationExperimental;
