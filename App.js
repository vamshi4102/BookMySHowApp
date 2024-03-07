import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar style="auto" />
      <HomeScreen />
    </SafeAreaView>
  );
}
