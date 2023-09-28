import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Login from './Screens/Login/Login';
import SignUp from './Screens/Signup/Signup';
import { StatusBar } from 'react-native';
import BottomTabs from './Components/BottomTabs/BottomTabs';
import { Provider } from 'react-redux';
import store from './redux/store';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <Provider store={store}>
      <NavigationContainer>
      <StatusBar hidden/>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='SignUp' component={SignUp} />
        <Stack.Screen name='Main' component={BottomTabs}/>
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}
