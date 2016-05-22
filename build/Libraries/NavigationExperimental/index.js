var _createMockComponent=require('./../../components/createMockComponent');var _createMockComponent2=_interopRequireDefault(_createMockComponent);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj};}




var NavigationExperimental={
StateUtils:require('./NavigationStateUtils'),
PropTypes:require('./NavigationPropTypes'),
// Reducers is commented because of https://github.com/facebook/react-native/commit/3a8b50ad550b176bbce5713c5c74e1318c10f2a0
// Reducer: {},

AnimatedView:(0,_createMockComponent2['default'])('NavigationAnimatedView'),
Transitioner:(0,_createMockComponent2['default'])('NavigationTransitioner'),
Card:(0,_createMockComponent2['default'])('NavigationCard'),
CardStack:(0,_createMockComponent2['default'])('NavigationCardStack'),
Header:(0,_createMockComponent2['default'])('NavigationHeader')}; /**
 * @see  https://github.com/facebook/react-native/blob/master/Libraries/NavigationExperimental/NavigationExperimental.js
 */

module.exports=NavigationExperimental;