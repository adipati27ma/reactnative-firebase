import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEdit, faTimes} from '@fortawesome/free-solid-svg-icons';

const CardKontak = ({id, kontakItem, navigation}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate('Detail Kontak', {id})}>
      <View>
        <Text style={styles.nama}>{kontakItem.nama}</Text>
        <Text style={styles.noHp}>No. HP : {kontakItem.nomorHp}</Text>
      </View>
      <View style={styles.icon}>
        <FontAwesomeIcon icon={faEdit} color="orange" size={25} />
        <FontAwesomeIcon icon={faTimes} color="red" size={25} />
      </View>
    </TouchableOpacity>
  );
};

CardKontak.propTypes = {
  id: PropTypes.string,
  kontakItem: PropTypes.object,
};

export default CardKontak;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 15,
    backgroundColor: 'white',
    borderRadius: 5,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  nama: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  noHp: {
    color: 'grey',
    fontSize: 12,
  },
  icon: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});
