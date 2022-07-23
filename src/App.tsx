import React, { Fragment } from 'react';
import { StatusBar } from 'react-native';

import { Routes } from '@routes/index';

export function App() {
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <Routes />
    </Fragment>
  );
}
