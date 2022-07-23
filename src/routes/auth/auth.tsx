import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { TRoute } from '@routes/types/TRoute';
import { SignIn } from '@domain/sign-in';
import { SignUp } from '@domain/sign-up';
import { Navigation } from '@constants/navigation';

const Stack = createNativeStackNavigator();

export function Auth() {
  return (
    <Stack.Navigator screenOptions={Navigation.SCREEN_OPTIONS}>
      <Stack.Screen name={TRoute.SIGNIN} component={SignIn} />
      <Stack.Screen name={TRoute.SIGNUP} component={SignUp} />
    </Stack.Navigator>
  );
}
