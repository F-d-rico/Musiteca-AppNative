import { StyleSheet, View, Image } from 'react-native';
import {disc} from '../../assets/icons/disc.png';
import {cassette} from '../../assets/icons/cassette.png';
import {vinyl} from '../../assets/icons/vinyl.png';

const iconos = {
  cd: disc,
  cassette: cassette,
  vinyl: vinyl,
};

const IconFormat = ({ formats, id }) => {
  return (
    <View style={styles.container}>
      {formats.map((formato) => (
        <Image
          key={`${id}${formato}`}
          style={styles.icons}
          /* source={iconos[formato]} */ 
          /* source={require(`../../assets/icons/${iconos[formato]}.png`)} */
          /* NO SE PORQUE NO LEVANTAN */
          source={require(`../../assets/icons/cassette.png`)}
          ></Image>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  icons: {
    marginVertical: 0,
    marginHorizontal: 8,
    height:16,
    width: 16,
  },
});

export default IconFormat;
