import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons';
import FIREBASE from '../../config/FIREBASE';

import {CardKontak} from '../../components';

export default function Home({navigation}) {
  const [state, setState] = useState({
    kontaks: {},
    kontaksKey: [],
  });
  const [isRemoved, setIsRemoved] = useState(false);

  const {kontaks, kontaksKey} = state;

  useEffect(() => {
    FIREBASE.database()
      .ref('Kontak')
      .once('value', (querySnapShot) => {
        let data = querySnapShot.val() ? querySnapShot.val() : {};
        let kontakItem = {...data};

        setState({
          kontaks: kontakItem,
          kontaksKey: Object.keys(kontakItem),
        });
      });

    setIsRemoved(false);
  }, [isRemoved]);

  const removeData = (id) => {
    Alert.alert(
      'Info',
      'Anda yakin ingin menghapus data kontak?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => {
            FIREBASE.database().ref(`Kontak/${id}`).remove();

            Alert.alert('Hapus', 'Sukses hapus data!');
            setIsRemoved(true);
          },
        },
      ],
      {cancelable: false},
    );
  };

  return (
    <View style={styles.page}>
      <View style={styles.header}>
        <Text style={styles.title}>Daftar Kontak</Text>
        <View style={styles.garis} />
      </View>

      <View style={styles.listKontak}>
        {kontaksKey.length > 0 ? (
          kontaksKey.map((key) => (
            <CardKontak
              key={key}
              id={key}
              kontakItem={kontaks[key]}
              navigation={navigation}
              removeData={removeData}
            />
          ))
        ) : (
          <Text>Daftar Kosong</Text>
        )}
      </View>

      <View style={styles.wrapperButton}>
        <TouchableOpacity
          style={styles.btnTambah}
          onPress={() => navigation.navigate('Tambah Kontak')}>
          <FontAwesomeIcon icon={faPlus} size={20} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 30,
    paddingTop: 30,
  },
  garis: {
    borderWidth: 1,
    marginTop: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    // textAlign: 'center',
  },
  listKontak: {
    marginTop: 20,
    paddingHorizontal: 30,
  },
  wrapperButton: {
    // flex: 1,
    position: 'absolute',
    bottom: 0,
    right: 0,
    margin: 30,
  },
  btnTambah: {
    padding: 20,
    backgroundColor: 'red',
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});
