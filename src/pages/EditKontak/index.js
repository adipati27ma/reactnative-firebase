import React, {useState, useEffect} from 'react';
import {View, StyleSheet, TouchableOpacity, Text, Alert} from 'react-native';

import {InputData} from '../../components';

import FIREBASE from '../../config/FIREBASE';

const EditKontak = ({navigation, route}) => {
  const {id} = route.params;

  const [state, setState] = useState({
    nama: '',
    nomorHp: '',
    alamat: '',
  });

  const handleOnChangeText = (stateName, value) => {
    setState({
      ...state,
      [stateName]: value,
    });
  };

  const handleOnSubmit = () => {
    if (state.nama && state.nomorHp && state.alamat) {
      const kontakReferensi = FIREBASE.database().ref(`Kontak/${id}`);
      const kontak = {
        nama: state.nama,
        nomorHp: state.nomorHp,
        alamat: state.alamat,
      };

      kontakReferensi
        .update(kontak)
        .then((data) => {
          Alert.alert('Sukses', 'Kontak telah diperbarui!');
          navigation.replace('Home');
          // console.log(data);
        })
        .catch((error) => {
          console.log(`Error : ${error}`);
        });
    } else {
      Alert.alert('Error', 'Nama, Nomor HP, dan Alamat wajib diisi!');
    }
  };

  useEffect(() => {
    FIREBASE.database()
      .ref(`Kontak/${id}`)
      .once('value', (querySnapShot) => {
        let data = querySnapShot.val() ? querySnapShot.val() : {};
        let kontakItem = {...data};

        setState({
          nama: kontakItem.nama,
          nomorHp: kontakItem.nomorHp,
          alamat: kontakItem.alamat,
        });
      });
  }, []);

  return (
    <View style={styles.pages}>
      <InputData
        label="Nama"
        placeholder="Masukkan Nama"
        stateName="nama"
        value={state.nama}
        onChangeText={handleOnChangeText}
      />
      <InputData
        label="No. HP"
        placeholder="Masukkan No. HP"
        keyboardType="number-pad"
        stateName="nomorHp"
        value={state.nomorHp}
        onChangeText={handleOnChangeText}
      />
      <InputData
        label="Alamat"
        placeholder="Masukkan Alamat"
        isTextArea={true}
        stateName="alamat"
        value={state.alamat}
        onChangeText={handleOnChangeText}
      />
      <TouchableOpacity style={styles.tombolSubmit} onPress={handleOnSubmit}>
        <Text style={styles.submitText}>SUBMIT</Text>
      </TouchableOpacity>
    </View>
  );
};

export default EditKontak;

const styles = StyleSheet.create({
  pages: {
    flex: 1,
    padding: 30,
  },
  tombolSubmit: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  submitText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
