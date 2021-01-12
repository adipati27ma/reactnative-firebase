import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import {InputData} from '../../components';

const TambahKontak = () => {
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
    console.log('Kirim data ke Firebase!');
    console.log(state);
  };

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

export default TambahKontak;

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
