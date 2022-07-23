import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export function SignUp() {
  return (
    <View style={styles.container}>
      <Text>sign-up!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
