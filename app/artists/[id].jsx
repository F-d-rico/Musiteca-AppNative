import { ALBUMS_API } from 'react-native-dotenv';
import React, { useEffect, useState } from 'react';
import { Text, Image, ScrollView, View, StyleSheet, Link } from 'react-native';
import { useLocalSearchParams,  Stack } from 'expo-router';
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
      <Image src={artista.image} style={{width: '50%', resizeMode: 'contain'}} alt="imagen artista" />
      <Text style={styles.h3}>{artista.name}</Text>
      <Text style={styles.p}>Albums editados</Text>
      {artista.albums.map(({id, name, artist="", cover, formats = ["none"], year}) => 
      <Link href={`/albums/${album.id}`} key={album.id}>{album.name}</Link>
      )}
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

  h3: {
    fontSize: 20,
    fontFamily: 'Quicksand_700Bold',
    marginVertical: 24,
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
