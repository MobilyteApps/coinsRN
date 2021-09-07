import React from "react";
import { Text,View ,TouchableOpacity,Dimensions} from "react-native";
let { width, height } = Dimensions.get('window')
const TabBarComponent = props => {
    const {
        renderIcon,
        getLabelText,
        activeTintColor,
        inactiveTintColor,
        onTabPress,
        onTabLongPress,
        getAccessibilityLabel,
        navigation,
        
      } = props;
    
      const { routes, index: activeRouteIndex } = navigation.state;
  return (
    <View style={{backgroundColor:'white',flexDirection:'row' , justifyContent:'space-around', alignItems:'center',elevation:5,shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius:3,
    shadowOpacity: 1,borderTopWidth:0,borderColor:"#2d2e2d"}}>
      {routes.map((route, routeIndex) => {
      const isRouteActive = routeIndex === activeRouteIndex;
      const tintColor = isRouteActive ? activeTintColor : inactiveTintColor;
      
      return (
        <TouchableOpacity
                  key={routeIndex}
                  style={{alignItems:'center',backgroundColor:'white',width:76,height:height<896?65:85}}
                  onPress={() => {
                            onTabPress({ route });
                      }}
                  onLongPress={() => {
                            onTabLongPress({ route });
                      }}
                  accessibilityLabel={getAccessibilityLabel({ route })}>
         {renderIcon({ route, focused: isRouteActive, tintColor })}
          {getLabelText({ route })=='News'?<Text style={{color:'black',fontSize:12,marginTop:6,fontWeight:'600',}}>{getLabelText({ route })}</Text>:<Text style={{color:'black',fontSize:12,marginTop:6,fontWeight:'600',}}>{getLabelText({ route })}</Text>}
          
        </TouchableOpacity>
      );
    })}
  </View>
  );
};

export default TabBarComponent;