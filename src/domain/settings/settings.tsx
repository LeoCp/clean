import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export function Settings() {
  return (
    <View style={styles.container}>
      <Text>Settings!</Text>
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
