import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { Main } from '@routes/main';
import { Auth } from '@routes/auth';

export function Routes() {
  const isAuthenticated = true;
  return (
    <NavigationContainer>
      {isAuthenticated ? <Main /> : <Auth />}
    </NavigationContainer>
  );
}
