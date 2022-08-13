import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './src/global/styles/theme';
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold

} from "@expo-google-fonts/poppins"
import { Vermes } from './src/screens/Vermes/Vermes';
import { NativeBaseProvider, StatusBar } from 'native-base';
import { Routes } from './src/routes';
import { LinearGradient } from 'expo-linear-gradient';
const config = {
  dependencies: {
    'linear-gradient': LinearGradient
  }
};

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  })
  if (!fontsLoaded) {
    return null
  }
  return (
    <NativeBaseProvider config={config}>
      <ThemeProvider theme={theme}>
        <StatusBar />
        <Routes />
      </ThemeProvider>
    </NativeBaseProvider>
  );
}

