import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Cart from "../../Screens/Cart/Cart";
import Settings from "../../Screens/Settings/Settings";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { colors } from "../../Constants/colors";
import HomeStack from "../../Screens/Home/HomeStack";

const Tab = createMaterialBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor={colors.white}
      inactiveColor={colors.grey}
      barStyle={{ backgroundColor: colors.bg }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="cart-outline" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="cog" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
