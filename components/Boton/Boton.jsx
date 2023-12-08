import React from "react";
import { useFonts, Quicksand_700Bold } from '@expo-google-fonts/quicksand';
import { StyleSheet, View, Image, Text, TouchableHighlight } from 'react-native';

const Boton = ({ texto="" , icono, handleOnClick }) => {
    return (
    <TouchableHighlight style={styles.boton}
        activeOpacity={0.7}
        underlayColor='#f6dfcc'
        onPress={handleOnClick}>
        <View style={styles.botonInt}>
          <Text style={styles.texto}>{texto}</Text>
          <Image
            style={styles.botonIcono}
            /* source={require(`../../assets/icons/${icono}.png`)} */
            source={require(`../../assets/icons/music-note-list.png`)}
          />
        </View>
      </TouchableHighlight>
    );
     {/* NO SE SI HAY Q ENGLOBAR ESTO EN: <Link href="/other" asChild></Link>  */}
     /* porque despues usamos navigate para el back */
};

    const styles = StyleSheet.create({
        boton: {
            backgroundColor: '#F9EEDE',
            borderWidth: 3,
            borderColor: '#2C1C04',
            borderRadius: 32,
            overflow: 'hidden',
            paddingVertical: 8,
            paddingHorizontal: 16,
            marginTop: 8,
            shadowColor: '#2C1C04',
            shadowOffset: {width: 2, height: 3},
            shadowRadius: 2,
            /* background-image: linear-gradient(to left, rgba(249, 238, 222, .1), rgba(255, 255, 255, .2)); */
        },

        botonInt: {
            flexDirection: 'row',
            justifyContent: "center",
            alignItems: 'center',
          },

        texto: {
            fontSize: 16,
            fontFamily: 'Quicksand_700Bold',
            color: '#2C1C04',
        },
        
        botonIcono: {
            marginLeft: 8,
        },
    });

export default Boton;