import { Stack } from 'expo-router';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ImageBackground, StyleSheet } from 'react-native';
import {
  useFonts,
  Quicksand_300Light,
  Quicksand_400Regular,
  Quicksand_500Medium,
  Quicksand_600SemiBold,
  Quicksand_700Bold,
} from '@expo-google-fonts/quicksand';
import { useCallback } from 'react';
import * as SplashScreen from 'expo-splash-screen';
SplashScreen.preventAutoHideAsync();

export default function HomeLayout() {
  let [fontsLoaded] = useFonts({
    Quicksand_300Light,
    Quicksand_400Regular,
    Quicksand_500Medium,
    Quicksand_600SemiBold,
    Quicksand_700Bold
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
/* import AppLoading from 'expo-app-loading';
export default function HomeLayout() {
  let [fontsLoaded] = useFonts({
    Quicksand_300Light,
    Quicksand_400Regular,
    Quicksand_500Medium,
    Quicksand_600SemiBold,
    Quicksand_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else { */
  return (
    <SafeAreaProvider style={styles.container}>
      <ImageBackground 
        source={require(`../assets/textura_madera.png`)}
        style={[styles.back, {width:'100%'}]} resizeMode="repeat">
          
        {/* <Header /> */}
        <Stack screenOptions={{ animation: 'slide_from_right' }}/>
        <Footer />
      </ImageBackground>
    </SafeAreaProvider>
  );
}/* } */;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 720
  },
  back: {
    flex: 1,
    justifyContent: 'center',
    height: 'auto'
  },
});
