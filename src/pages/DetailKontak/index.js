import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import FIREBASE from '../../config/FIREBASE';

const DetailKontak = ({route}) => {
  const {id} = route.params;
  const [state, setState] = useState({
    kontak: {},
  });
  const {kontak} = state;

  useEffect(() => {
    FIREBASE.database()
      .ref(`Kontak/${id}`)
      .once('value', (querySnapShot) => {
        let data = querySnapShot.val() ? querySnapShot.val() : {};
        let kontakItem = {...data};

        setState({
          kontak: kontakItem,
        });
      });
  }, []);

  return (
    <View style={styles.pages}>
      <Text>Nama :</Text>
      <Text style={styles.text}>{kontak.nama}</Text>
      <Text>Nomor HP :</Text>
      <Text style={styles.text}>{kontak.nomorHp}</Text>
      <Text>Alamat :</Text>
      <Text style={styles.text}>{kontak.alamat}</Text>
    </View>
  );
};

export default DetailKontak;

const styles = StyleSheet.create({
  pages: {
    margin: 30,
    padding: 20,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
