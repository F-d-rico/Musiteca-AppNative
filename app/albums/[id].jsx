import { ALBUMS_API } from 'react-native-dotenv';
import React, { useEffect, useState } from 'react';
import { Image, Text, ScrollView, View, FlatList, StyleSheet, ImageBackground } from 'react-native';
import { useLocalSearchParams, Stack, Link } from 'expo-router';
import CardAlbum from "../../components/CardAlbum/CardAlbum";

const AlbumPage = () => {
  const { id } = useLocalSearchParams();
  const [album, setAlbum] = useState();

  useEffect(() => {
    fetch(`${ALBUMS_API}/albums/${id}`)
      .then((res) => res.json(res))
      .then((data) => {
        setAlbum(data);
      })
      .catch(console.error);
  }, [id]);

  /* const {name, idAlbum, artist, cover, formats, year, gender} = album; */

  
  return album
  ? 
  (
    <ScrollView style={styles.container}>
      <Stack.Screen options={{ 
          title: `${album.name} - ${album.artist.name}`,
          headerStyle: { backgroundColor: '#2C1C04', borderBottomColor: 'none' },
          headerTintColor: '#F9EEDE',
          headerTitleStyle: {
            fontFamily: 'Quicksand_700Bold',
            color: '#F9EEDE',
          },
          headerShown: true,
        }}
      />
      <ImageBackground 
          source={require(`../../assets/textura_madera.png`)}
          style={[styles.back, {width:'100%', height:'100%'}]} resizeMode="repeat"> 
          <View style={styles.listado}>
            <Image source={album.cover} alt={album.name} resizeMode='cover' style={styles.imagen}/>
            <Link href={`/artists/${album.artist.id}`} style={styles.h3}>{album.artist.name}</Link>
            {/* <CardAlbum name={name} id={idAlbum} artist={artist} cover={cover} formats={formats} year={year} gender={gender} estilos={cardStyles} /> */}
            <Text style={styles.h4}>Listado de Temas</Text>
            <View style={styles.lista}>
            {/* <FlatList
              data={[album.songs]}
              renderItem={({item}) => <View key={item.id}><Text style={styles.titulo}>{item.name}</Text><Text style={styles.duracion}>{item.duration}</Text></View>}
            /> */}
            {album.songs.map((song) => <View key={song.id} style={styles.canciones}><Text style={styles.titulo}>{song.name}</Text><Text style={styles.duracion}>{song.duration}</Text></View>)}
            </View>
          </View>
      </ImageBackground>
    </ScrollView>
  )
  : <div>Ups! se nos perdio el album solicitado</div>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%'
  },

  back: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },

  listado: {
    width: '90%',
    height: '100%',
    flex: 1,
    margin: 32,
    paddingHorizontal: 16,
    backgroundColor: '#F9EEDE',
    borderRadius: 16,
    gap: 16,
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  h3: {
    fontSize: 20,
    fontFamily: 'Quicksand_700Bold',
    marginTop: 16,
    /* color: '#F9EEDE', */
    textAlign: 'center',
  },

  h4: {
    fontSize: 18,
    fontFamily: 'Quicksand_500Medium',
    marginTop: 16,
    /* color: '#F9EEDE', */
    textAlign: 'center',
  },

  imagen: {
      margin: 8,
      width: 128,
      height: 128,
      borderRadius: 8,
      marginTop: 32,
  },

  lista: {
    justifyContent: 'space-between',
    width: '60%',
    marginRight: 32,
    marginVertical: 32,
  },

  canciones: {
    flexDirection: 'row',
    paddingLeft: 8,
    marginVertical: 4,
    justifyContent: 'space-between',
    alignItems: 'baseline',
  },

  titulo: {
    fontSiza:18,
    fontFamily: 'Quicksand_700Bold',
  },

  duracion: {
    fontSiza:16,
    fontFamily: 'Quicksand_400Regular',
  }
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
});

export default AlbumPage;