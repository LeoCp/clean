import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { TRoute } from '@routes/types/TRoute';

export function SignIn() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>sign-in!</Text>
      <Button
        title="Sign up"
        onPress={() => navigation.navigate(TRoute.SIGNUP)}
      />
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
