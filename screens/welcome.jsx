import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Button } from '../components/button';
import { useNavigation } from '@react-navigation/native';
import { ROUTE } from '../navigation/routes';
import { theme } from '../configs/theme';

export const Welcome = () => {
  const navigation = useNavigation();

  const handlePress = () => navigation.navigate(ROUTE.LOGIN); // Navegar a Login al presionar

  return (
    <SafeAreaView style={styles.safeArea}>
      <Image source={require('../assets/Welcome/icon.png')} />
      <View style={styles.texts}>
        <Text style={styles.title}>Shoppyone</Text>
        <Text style={styles.text}>Tipea con gusto</Text>
      </View>
      <Button onPress={handlePress}>Ingresar</Button>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    alignItems: 'center',
    backgroundColor: theme.colors.white,
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  texts: {
    alignItems: 'center',
    marginBottom: 32,
  },
  title: {
    fontSize: 64,
    fontWeight: 'bold',
  },
  text: {
    color: theme.colors.woodsmoke[500],
    fontSize: 16,
  },
});

export default Welcome;
