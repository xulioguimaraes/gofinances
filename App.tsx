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
import { NativeBaseProvider } from 'native-base';
import { Routes } from './src/routes';
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
    <NativeBaseProvider>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </NativeBaseProvider>
  );
}

