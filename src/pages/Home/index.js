import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  return (
    <View style={styles.page}>
      <Text>Halaman Home</Text>
      <View style={styles.wrapperButton}>
        <TouchableOpacity style={styles.btnTambah}>
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
  wrapperButton: {
    // flex: 1,
    position: 'absolute',
    bottom: 0,
    right: 0,
    margin: 30,
  },
  btnTambah: {
    padding: 20,
    backgroundColor: 'skyblue',
    borderRadius: 30,
  },
});
