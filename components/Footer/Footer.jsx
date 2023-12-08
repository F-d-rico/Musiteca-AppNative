/* import React from 'react'; */
import { StyleSheet, View, Text, Image } from 'react-native';
import { useFonts, Quicksand_300Light} from '@expo-google-fonts/quicksand';

const Footer = () => {
    return (
      <View style={styles.container}>
         <Image
            style={styles.icono}
            source={require(`../../assets/icons/c-circle.png`)}
          />
        {/* este no existe y fill asi o en rgb */}
        <Text style={styles.texto}>Todos los derechos reservados</Text>
      </View>
    )
  };

  const styles = StyleSheet.create({
      container: {
      flexDirection: 'row',
      height: 48,
      gap: 8,
      /* flex: 1, */
      alignItems: 'center',
      justifyContent: 'center',
    },

    icono: {
      marginLeft: 8
    },

    texto: {
      fontSize: 14,
      color: '#F9EEDE',
      fontFamily: 'Quicksand_300Light'
    }
  });
  
  export default Footer;