import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Text, View} from 'react-native';

const CardKontak = ({id, kontakItem}) => {
  return (
    <View>
      <Text>{kontakItem.nama}</Text>
    </View>
  );
};

CardKontak.propTypes = {
  id: PropTypes.string,
  kontaks: PropTypes.string,
};

export default CardKontak;

const styles = StyleSheet.create({});
