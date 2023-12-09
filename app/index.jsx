import { ALBUMS_API } from 'react-native-dotenv';
import React, { useEffect, useState } from 'react';
import { Text, TextInput, View, ScrollView, StyleSheet, Image, ImageBackground} from 'react-native';
import { Link, Stack } from 'expo-router';
import CardAlbum from "../components/CardAlbum/CardAlbum";

function LogoM() {
  return (
    <Image
      source={require(`../assets/logo_musiteca.png`)}
      style={{ height: 48 }}
      alt={'Logo Musiteca'}
      resizeMode={'contain'}
      />
  );
}

const HomeScreen = () => {

  const [search, setSearch] = useState('');
  const [albumesFiltrados, setAlbumesFiltrados] = useState();
  const [albumes, setAlbumes] = useState([]);

  useEffect(() => {
    fetch(`${ALBUMS_API}/albums`)
      .then((res) => res.json(res))
      .then((data) => {
        setAlbumesFiltrados(data);
        setAlbumes(data);
      })
      .catch(console.error);
  });


  const searchFilter = (text) => {
    if (text) {
      const busqueda = albumes.filter(  album => {
        if (album.name.toLowerCase().includes(text.toLowerCase())) {
            return album;
        }});
      /* const busqueda = albumes.filter( album => {
        const itemData = album.name
          ? album.name.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      }); */
      setAlbumesFiltrados(busqueda);
      setSearch(text);
    } else {
      setAlbumesFiltrados(albumes);
      setSearch(text);
    }
  };

  return albumes.length
    ? (
      <ScrollView style={styles.container}>
        <Stack.Screen options={{ 
          title: 'Albums',
          headerStyle: { backgroundColor: '#2C1C04', borderBottomColor: 'none' },
          headerTintColor: '#F9EEDE',
          headerTitleStyle: {
            fontFamily: 'Quicksand_700Bold',
            color: '#F9EEDE',
          },
          headerShown: true,
          headerTitle: props => <LogoM {...props} />,
        }}
      />
        <ImageBackground 
          source={require(`../assets/textura_madera.png`)}
          style={[styles.back, {width:'100%'}]} resizeMode="repeat"> 
           <TextInput
          style={styles.input}
          onChangeText={(text) => searchFilter(text)}
          value={search}
          underlineColorAndroid="transparent"
          placeholder="Busque un album"
          clearButtonMode="always"
          />
          <View style={styles.listado}>
          {albumesFiltrados.map(({name, id, artist, cover, formats, year }) => (
            <View key={id}>
              <CardAlbum name={name} id={id} artist={artist} cover={cover} formats={formats} year={year} estilos={cardStyles}/>
            </View>
          ))}
          </View>
        </ImageBackground>
      </ScrollView>
    )
    : <View><Text>No hay álbumes para mostrar</Text></View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  back: {
    flex: 1,
    height: 'auto',
    justifyContent: 'center',
    alignItems: 'center'
  },

  input: {
    width: "90%",
    height: 32,
    backgroundColor: '#F9EEDE',
    borderRadius: 16,
    marginTop: 32,
    paddingHorizontal: 16,
  },

  listado: {
    width: '90%',
    flex: 1,
    margin: 32,
    paddingHorizontal: 16,
    paddingVertical: 32,
    backgroundColor: '#F9EEDE',
    borderRadius: 16,
    gap: 16,
  },
});

const cardStyles = StyleSheet.create({

  card: {
      flexDirection: 'row',
      paddingVertical: 8,
      paddingHorizontal: 16,
      marginHorizontal: 16,
      borderRadius: 16,
      borderBottomWidth: 1,
      borderBottomColor: '#2C1C04',
      alignItems: 'center',
      flex:1,
      backgroundColor: '#F9EEDE',
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
      width: '100%',
      flexDirection: 'column',
      marginVertical: 16,
      marginLeft: 32,
      justifyContent: 'space-between',
      alignItems: 'baseline',
    },

    span: {
        flexDirection: 'row',
        alignItems: 'baseline',
        marginVertical: 8,
        display: 'flex',
        flex: 1,
        width: 720 /*  */
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
});

export default HomeScreen;

