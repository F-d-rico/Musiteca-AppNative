import { ALBUMS_API } from 'react-native-dotenv';
import React, { useEffect, useState } from 'react';
import { Text, Image, ScrollView, View, StyleSheet, ImageBackground } from 'react-native';
import { useLocalSearchParams, Link, Stack } from 'expo-router';
import CardAlbum from "../../components/CardAlbum/CardAlbum";

const ArtistPage = () => {
  const { id } = useLocalSearchParams();
  const [artista, setArtista] = useState();

  useEffect(() => {
    fetch(`${ALBUMS_API}/artists/${id}`)
      .then((res) => res.json(res))
      .then((data) => {
        setArtista(data);
      })
      .catch(console.error);
  }, [id]);

  return artista
    ? (
    <ScrollView >
      <Stack.Screen options={{ 
          title: artista.name,
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
          <Image source={artista.image} alt={artista.name} resizeMode='contain' style={styles.imagen}/>
          <Text style={styles.h3}>{artista.name}</Text>
          <Text style={styles.p}>Albums editados</Text>
          {artista.albums.map((album/* {id, name, artist="", cover, formats = ["none"], year} */) => 
          <Link href={`/albums/${album.id}`} key={album.id}>{album.name}</Link>
          )}
      </View>
      </ImageBackground>
      {/* <View key={id}>
        <CardAlbum name={name} id={id} artist={artist} cover={cover} formats={formats} year={year} cardArtista={true}/>
      </View> */}
    </ScrollView>
  )
  : <div>No hay datos para mostrar</div>;
};

const styles = StyleSheet.create({
  container: {
      flex: 1,
      marginVertical: 8,
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
    paddingBottom: 64,
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

  imagen: {
    margin: 8,
    width: 256,
    height: 128,
    borderRadius: 8,
    marginTop: 64,
},

  p: {
    fontSize: 16,
    fontFamily: 'Quicksand_400Regular',
    marginVertical: 24,
  },
  
});

export default ArtistPage;

/* .ArtistPage h2 {
    margin-top: 2em;
} */

/* import React, { useEffect, useState } from 'react';
import { useLocalSearchParams, Link, Stack } from 'expo-router';
import { Text, View } from 'react-native';

const ArtistScreen = () => {
  const { id } = useLocalSearchParams();
  const [artista, setArtista] = useState();

  useEffect(() => {
    fetch(`https://albums-api.onrender.com/artists/${id}`)
      .then((res) => res.json(res))
      .then((data) => {
        setArtista(data);
      })
      .catch(console.error);
  }, [id]);

  return artista
    ? (
    <View>
      <Stack.Screen options={{ title: artista.name }} />
      <Text>ArtistPage {id}</Text>
      <Text>{artista.name}</Text>
      {artista.albums.map((album) => <Link href={`/albums/${album.id}`} key={album.id}>{album.name}</Link>)}
    </View>
  )
  : <Text>No hay datos para mostrar</Text>;
};

export default ArtistScreen; */
