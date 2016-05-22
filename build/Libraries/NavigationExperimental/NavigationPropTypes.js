var action=PropTypes.shape({
type:PropTypes.string.isRequired});


/* NavigationAnimatedValue  */
var animatedValue=PropTypes.instanceOf(Animated.Value);

var navigationState=function(){function navigationState(){}return navigationState;}();
var navigationParentState=function(){function navigationParentState(){}return navigationParentState;}();
var layout=function(){function layout(){}return layout;}();
var scene=function(){function scene(){}return scene;}();

/* NavigationSceneRendererProps */
var SceneRendererProps={
layout:layout.isRequired,
navigationState:navigationParentState.isRequired,
onNavigate:PropTypes.func.isRequired,
position:animatedValue.isRequired,
scene:scene.isRequired,
scenes:PropTypes.arrayOf(scene).isRequired};


var SceneRenderer=PropTypes.shape(SceneRendererProps);

/* NavigationPanPanHandlers */
var panHandlers=PropTypes.shape({
onMoveShouldSetResponder:PropTypes.func.isRequired,
onMoveShouldSetResponderCapture:PropTypes.func.isRequired,
onResponderEnd:PropTypes.func.isRequired,
onResponderGrant:PropTypes.func.isRequired,
onResponderMove:PropTypes.func.isRequired,
onResponderReject:PropTypes.func.isRequired,
onResponderRelease:PropTypes.func.isRequired,
onResponderStart:PropTypes.func.isRequired,
onResponderTerminate:PropTypes.func.isRequired,
onResponderTerminationRequest:PropTypes.func.isRequired,
onStartShouldSetResponder:PropTypes.func.isRequired,
onStartShouldSetResponderCapture:PropTypes.func.isRequired});


/**
 * Helper function that extracts the props needed for scene renderer.
 */
function extractSceneRendererProps(props){
return {
layout:props.layout,
navigationState:props.navigationState,
onNavigate:props.onNavigate,
position:props.position,
scene:props.scene,
scenes:props.scenes};}



module.exports={
// helpers
extractSceneRendererProps:extractSceneRendererProps,

// Bundled propTypes.
SceneRendererProps:SceneRendererProps,

// propTypes
action:action,
navigationParentState:navigationParentState,
navigationState:navigationState,
panHandlers:panHandlers,
SceneRenderer:SceneRenderer};