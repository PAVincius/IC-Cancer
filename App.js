import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { Platform, StatusBar, StyleSheet, View, ActivityIndicator } from 'react-native';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { styled } from 'styled-components';

//Screens
import SplashScreen from './src/screens/SplashScreen';
import LoginScreen from './src/screens/LoginScreen';
import Terms from './src/screens/Terms';
import Terms2 from './src/screens/Terms2';
import Reminder from './src/screens/Reminder';
import ReminderList from './src/screens/ReminderList';
import Contact from './components/forms/Contact';
import PersonalInformation from './components/forms/PersonalInformation'
import Home from './src/screens/Home'
import Noticias from './src/screens/Noticias'

import useCachedResources from './hooks/useCachedResources';
//import ThemeContext from './assets/context/ThemeContext';
//import DrawerNavigator from './navigation/DrawerNavigator';
import BottomTabNavigator from './navigation/BottomTabNavigator'
import { StoreProvider } from './src/store';
import { useStore } from './src/store';
import FirstAcess from './src/screens/FirstAcess';
import CardContacts from './components/CardContacts';
import CardMyData from './components/CardMyData';
import HomeScreen from './src/screens/HomeScreen';
import Profile from './src/screens/Profile';

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
    big: 16,
    giant: 30,
  },
  chatTime: {
    ...DefaultTheme.chatTime,
    medium: 12,
    big: 18,
    giant: 18,
  },
};

const Loading = () =>{
    styled(ActivityIndicator)`
      flex: 1;
      color: #43bc70;
    `
}

const Router = () => {
  const [store] = useStore();

  if(!store.rehydrated) {
      return <Loading/>
  }

  return store.auth ? <BottomTabNavigator/> : <LoginScreen/>
}

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
            <Stack.Navigator initialRouteName={Home}>
              <Stack.Screen options={{headerShown: false}} name="Bottomtab" component={BottomTabNavigator} />
              <Stack.Screen options={{headerShown: false}} name="Home" component={Home} />
              <Stack.Screen options={{headerShown: false}} name="Noticias" component={Noticias} />
              <Stack.Screen options={{headerShown: false}} name="Profile" component={Profile} />
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
  },
});
