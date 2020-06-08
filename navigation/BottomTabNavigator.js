import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../src/screens/HomeScreen';
import ReminderList from '../src/screens/ReminderList';
import ChatScreen from '../src/screens/ChatScreen';
import InfoPessoais from '../components/forms/InfoPessoais';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

export default function BottomTabNavigator({ navigation, route }) {
  
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name="Meus Dados"
        component={InfoPessoais}
        options={{
          title: 'Meus Dados',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-person" />,
        }}
      />
      <BottomTab.Screen
        name="Lembretes"
        component={ReminderList}
        options={{
          title: 'Lembretes',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-mail-unread" />,
        }}
      />
      <BottomTab.Screen
        name="M. de Saúde"
        component={HomeScreen}
        options={{
          title: 'M. de Saúde',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-pulse" />,
        }}
      />
      <BottomTab.Screen
        name="Canal Aberto"
        component={ChatScreen}
        options={{
          title: 'Canal Aberto',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="ios-chatboxes" />,
        }}
      />
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Home':
      return 'How to get started';
    case 'Links':
      return 'Links to learn more';
    case 'ReminderList':
      return 'Lembretes';
    case 'Canal Aberto':
      return 'Canal Aberto';
  }
}
