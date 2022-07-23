import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export function Bookmarks() {
  return (
    <View style={styles.container}>
      <Text>Bookmarks!</Text>
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
