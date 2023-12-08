import { Stack, useNavigation } from 'expo-router';
import React from 'react';
//import React, { useState } from "react";
import Boton from '../Boton/Boton';
import { StyleSheet, View, Image } from 'react-native';


const Header = () => {
  const navigation = useNavigation();
  
  const navigateHome = () => {
    navigation.navigate('/');
  };

  const navigateBack = () => {
    () => navigation.goBack()
    {/* el back no se si es asi seguro */}
  };

  return (
    <View style={styles.header}>
        <Image
        source={require(`../../assets/logo_musiteca.png`)}
        style={styles.logo}
        alt={'Logo Musiteca'}
        resizeMode={'contain'}
        />
        <View style={styles.container}>
          <Boton icono="arrow-left" handleOnClick={navigateBack}  /* style={styles.soloIcono} *//>
          {/* SI HAY back nav nativa sacar este*/}
          <Boton texto="Albums" icono="music-note-list" handleOnClick={navigateHome} />
          {/* No se si anda el navHome */}
        </View>
    </View>
  )
};

const styles = StyleSheet.create({
header: {
  /* flex: 1, */
  width: 720,
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
},

container: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  marginRight: 32,
},

logo: {
  height: 48,
  marginLeft: 64,
},

/* soloIcono: {
  marginLeft: 0,
} */
});

export default Header;