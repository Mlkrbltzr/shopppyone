import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ROUTE } from './routes';
import { Login } from '../screens/login';
import { SignUp } from '../screens/signUp';
import { Welcome } from '../screens/welcome';

const { Navigator, Screen } = createNativeStackNavigator();

export const AuthStack = () => (
  <Navigator
    initialRouteName={ROUTE.WELCOME} // Iniciar en Welcome
    screenOptions={{
      headerBackVisible: false,
      headerShadowVisible: false,
      headerTitleStyle: { fontFamily: 'Unbounded-Bold' },
    }}
  >
    <Screen
      name={ROUTE.WELCOME}
      component={Welcome}
      options={{
        title: 'Shoppyone',
      }}
    />
    <Screen
      name={ROUTE.LOGIN}
      component={Login}
      options={{
        title: 'shoppyone',
      }}
    />
    <Screen
      name={ROUTE.SIGN_UP}
      component={SignUp}
      options={{
        title: 'Crear cuenta',
      }}
    />
  </Navigator>
);
