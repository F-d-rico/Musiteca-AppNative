
import { Text, View, Image, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

import IconFormat from "../../components/IconFormat/IconFormat";


const CardAlbum = ({ name, id, artist, cover, formats, year, gender, estilos}) => {
  
       return (
       <View style={estilos.card}>
          <Link href={{pathname: "/albums/[id]", params: { id: `${id}` }}} style={estilos.linkTapa}>
            <Image source={cover} alt={name} resizeMode='cover' style={estilos.imagen}/>
          </Link>
          <View style={{estilos}.info/* (cardArtista) */}>
            <View style={estilos.span}>
              <Text style={estilos.p}>Album:</Text>
              <Link href={{pathname: "/albums/[id]", params: { id: `${id}` }}}
                style={[{estilos}.hs/* (cardArtista) */, {fontSize:20}]}>{name}</Link>
            </View>
            <View style={estilos.span/* (cardArtista) */}>
              <Text style={estilos.p}>Artista:</Text>
              <Link href={{pathname: "/artists/[id]", params: { id: `${artist.id}` }}} style={[{estilos}.hs/* (cardArtista) */, {fontSize:18}]}>{artist.name}</Link>
            </View>
            <View style={[estilos.span, {justifyContent: 'space-between'}]}>
              <Text style={[estilos.hs, {fontSize:16}]}>{year}</Text>
              <IconFormat formats={formats} id={id} style={{estilos}.iconos/* (cardArtista) */}/>
              <Text style={{estilos}.gender/* (cardArtista) */}>
                <Image source={require(`../../assets/icons/music-note-list.png`)} style={estilos.genderImg}/>
                {gender}</Text>
            </View>
          </View>
        </View>
        );
};

/* const cardStyles = StyleSheet.create({

  card: {
      flexDirection: 'row',
      paddingVertical: 8,
      paddingHorizontal: 16,
      marginHorizontal: 16,
      borderRadius: 16,
      borderBottomWidth: 1,
      borderBottomColor: '#2C1C04',
      alignItems: 'center'
  },
  
  linkTapa: {
      justifyContent: 'center',
      alignItems: 'center',
      padding: 4,
  },
  
  imagen: {
      margin: 8,
      width: 128,
      height: 128,
      borderRadius: 8,
  },
  
  p: {
    fontSize: 16,
    fontFamily: 'Quicksand_400Regular',
    marginRight: 16,
  },

  hs: {
      marginVertical: 8,
      fontFamily: 'Quicksand_700Bold',
    },

  info: {
      width: 'auto',
      flexDirection: 'column',
      marginVertical: 16,
      marginLeft: 32,
      justifyContent: 'space-between',
      alignItems: 'baseline',
    },

    span: {
        flexDirection: 'row',
        alignItems: 'baseline',
        margin: 0,
        display: 'flex',
      },
    
    gender: {
      flexDirection: 'row',
      paddingVertical: 8,
      paddingHorizontal: 16,
      color: '#2C1C04',
      display: 'none',
      },

    genderImg: {
      marginHorizontal: 8,
  },

  iconos: {
      flexDirection: 'row',
      display: 'flex',
    }
}); */
  
  /* const cardArtista = StyleSheet.create({
    hs:  {
        marginVertical: 0,
        fontFamily: 'Quicksand_700Bold',
      },
    
    info:  {
      width: 'auto',
      flexDirection: 'row',
      marginVertical: 0,
      marginLeft: 0,
      justifyContent: 'space-between',
      alignItems: 'baseline',
      },

      span: {
        flexDirection: 'row',
        alignItems: 'baseline',
        margin: 0,
        display: 'none',
      },
    
    gender: {
      flexDirection: 'row',
      paddingVertical: 8,
      paddingHorizontal: 16,
      color: '#2C1C04',
      display: 'flex',
      },

  iconos: {
      flexDirection: 'row',
      display: 'none',
    } 
});
 */

 /* hs: (cardArtista) => {
    const margin = cardArtista ? 0 : 8;
  return {
      marginVertical: margin,
      fontFamily: Quicksand_700Bold,
    }
  },

info: (cardArtista) => {
    const marginV = cardArtista ? 0 : 16;
    const marginL = cardArtista ? 0 : 32;
    const flexDir = cardArtista ? 'row' : 'column';
  return {
      width: 'auto',
      flexDirection: 'row',
      marginVertical: 0,
      marginLeft: 0,
      justifyContent: space-between,
      alignItems: baseline,
    }
  },

span: (cardArtista) => {
  const display = cardArtista ? none : flex;
return {
    flexDirection: 'row',
    alignItems: baseline,
    margin: 0,
    display: 'none',
  }
},

gender: (cardArtista) => {
  const display = cardArtista ? none : flex;
return {
  flexDirection: 'row',
  paddingVertical: 8,
  paddingHorizontal: 16,
  color: '#2C1C04',
  display: display,
  }
},

genderImg: {
  marginHorizontal: 8,
},

iconos: (cardArtista) => {
  const display = cardArtista ? none : flex;
  return {
    flexDirection: 'row',
  display: display,
  }
}, */

export default CardAlbum;


