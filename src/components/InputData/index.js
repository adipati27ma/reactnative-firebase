import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Text, TextInput} from 'react-native';

export default function InputData({
  label,
  placeholder,
  keyboardType,
  isTextArea,
  stateName,
  value,
  onChangeText,
}) {
  if (isTextArea) {
    return (
      <>
        <Text style={styles.label}>{label} :</Text>
        <TextInput
          multiline={true}
          numberOfLines={4}
          placeholder={placeholder}
          style={styles.textInputArea}
          keyboardType={keyboardType}
          value={value}
          onChangeText={(text) => onChangeText(stateName, text)}
        />
      </>
    );
  }

  return (
    <>
      <Text style={styles.label}>{label} :</Text>
      <TextInput
        placeholder={placeholder}
        style={styles.textInput}
        keyboardType={keyboardType}
        value={value}
        onChangeText={(e) => onChangeText(stateName, e)}
      />
    </>
  );
}

InputData.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  keyboardType: PropTypes.string,
  isTextArea: PropTypes.bool,
  stateName: PropTypes.string,
  value: PropTypes.string,
  onChangeText: PropTypes.func,
};

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cac6cf',
    borderRadius: 5,
    padding: 10,
  },
  textInputArea: {
    textAlignVertical: 'top',
    borderWidth: 1,
    borderColor: '#cac6cf',
    borderRadius: 5,
    padding: 10,
  },
});
