import { ALBUMS_API } from 'react-native-dotenv';
import React, { useEffect, useState } from 'react';
import { Text, ScrollView, View, FlatList, StyleSheet, Link } from 'react-native';
import { useLocalSearchParams, Stack } from 'expo-router';
import CardAlbum from "../../components/CardAlbum/CardAlbum";

const AlbumPage = () => {
  const { id } = useLocalSearchParams();       ////  cambiamos estos
  const [album, setAlbum] = useState({});

  useEffect(() => {
    /* fetch(`${ALBUMS_API}/albums/${id}`) */
    fetch(`https://albums-api.onrender.com/albums/${id}`)
      .then((res) => res.json(res))
      .then((data) => {
        setAlbum(data);
      })
      .catch(console.error);
  }, [id]);

  const {name, idAlbum, artist, cover, formats, year, gender} = album;

  
  return album
  ? 
  (
    <ScrollView>
              <Stack.Screen options={{ 
          title: album.name,
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
      <Link href={`/artists/${album.artist.id}`}>{album.artist.name}</Link>
      {/* <CardAlbum name={name} id={idAlbum} artist={artist} cover={cover} formats={formats} year={year} gender={gender} estilos={cardStyles} /> */}
      <Text style={styles.h3}>Listado de Temas</Text>
      <View style={styles.lista}>
      <FlatList
        data={[album.songs]}
        renderItem={({item}) => <View key={item.id}><Text style={styles.titulo}>{item.name}</Text><Text style={styles.duracion}>{item.duration}</Text></View>}
      />
      </View>
    </ScrollView>
  )
  : <div>Ups! se nos perdio el album solicitado</div>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 8,
  },

  h3: {
    fontSize: 20,
    fontFamily: 'Quicksand_700Bold',
    marginTop: 48,
  },
  
  lista: {
    /* textAlign: 'start', */
    marginRight: 32,
  },

  canciones: {
    flexDirection: 'row',
    paddingLeft: 8,
    marginVertical: 4,
    /* width: 110%, */
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

/* import React, { useEffect, useState } from 'react';
import { useLocalSearchParams, Link, Stack } from 'expo-router';
import { Text, View, Image } from 'react-native';

const AlbumScreen = () => {
  const { id } = useLocalSearchParams();
  const [album, setAlbum] = useState();

  useEffect(() => {
    fetch(`https://albums-api.onrender.com/albums/${id}`)
      .then((res) => res.json(res))
      .then((data) => {
        setAlbum(data);
      })
      .catch(console.error);
  }, [id]);

  return album ? (
    <View>
        <Stack.Screen options={{ title: album.name }} />
        <Text>AlbumScreen {id}</Text>
        <Text>{album.name}</Text>
        <Image src={album.cover} />
        <Link href={`/artists/${album.artist.id}`}>{album.artist.name}</Link>
        {album.songs.map((song) => <Text key={song.id}>{song.name}</Text>)}
      </View>
  )
    : <View><Text>No hay datos para mostrar</Text></View>;
};

export default AlbumScreen;
 */