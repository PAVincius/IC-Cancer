import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

//Screens
import SplashScreen from './src/screens/SplashScreen';
import LoginScreen from './src/screens/LoginScreen';
import Terms from './src/screens/Terms';
import Reminder from './src/screens/Reminder';
import ReminderList from './src/screens/ReminderList';

import BottomTab from './navigation/BottomTabNavigator';
import FormsNavigator from './navigation/FormsNavigator';
import useCachedResources from './hooks/useCachedResources';
//import ThemeContext from './assets/context/ThemeContext';
import DrawerNavigator from './navigation/DrawerNavigator';
import { StoreProvider } from './src/store';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#3498db',
    accent: '#595cff',
  },
  fontSize: {
    ...DefaultTheme.fontSize,
    medium: 12,
    big: 12,
    giant: 30,
  },
  chatTime: {
    ...DefaultTheme.chatTime,
    medium: 12,
    big: 18,
    giant: 18,
  },
};

const Stack = createStackNavigator();

export default function App() {
  const isLoadingComplete = useCachedResources();
  //const themeHook = useState("light");

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <StoreProvider>
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="dark-content" />}
        <PaperProvider theme={theme}>
          <NavigationContainer>
            <Stack.Navigator initialRouteName={SplashScreen}>
              <Stack.Screen options={{headerShown: false}} name="SplashScreen" component={SplashScreen}/>
              <Stack.Screen options={{headerShown: false}} name="Terms" component={Terms}/>
              <Stack.Screen options={{headerShown: false}} name="Login" component={LoginScreen} />
              <Stack.Screen options={{headerShown: false}} name="Root" component={BottomTab} />
              <Stack.Screen options={{headerShown: false}} name="FormsRoot" component={FormsNavigator} />
              <Stack.Screen options={{headerShown: false}} name="Reminder" component={Reminder} />
              <Stack.Screen options={{headerShown: false}} name="ReminderList" component={ReminderList} />
              <Stack.Screen options={{headerShown: false}} name="DrawerRoot" component={DrawerNavigator} />
            </Stack.Navigator>
          </NavigationContainer>
        </PaperProvider>
      </View>
      </StoreProvider>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
