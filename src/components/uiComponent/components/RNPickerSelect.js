import RNPickerSelect from 'react-native-picker-select';
import React, { Component } from "react";
import {
    StyleSheet, View, Platform,
  } from 'react-native';
export const RNCPickerSelect = (props) => {
  const {onValueChange}=props
    return (
        <View style={{
            fontSize: 16,
            paddingHorizontal: 10,
            paddingVertical: 8,
            borderWidth: 0.5,
            borderColor: 'purple',
            borderRadius: 8,
            // width:'25%',
            color: 'black',
            // paddingRight: 30, 
        } }>
          <RNPickerSelect
        // style={{width:20}}
            onValueChange={(value) => onValueChange(value)}
            items={[
                { label: 'black', value: 'black' },
                { label: 'green', value: 'green' },
                { label: 'yellow', value: 'yellow' },
                { label: 'blue', value: 'blue' },
                { label: 'clear', value: 'clear' },
            ]}
        />
        </View>
    );
};

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
      fontSize: 16,
      paddingVertical: 12,
      paddingHorizontal: 10,
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 4,
      color: 'black',
      paddingRight: 30, // to ensure the text is never behind the icon
    },
    inputAndroid: {
      fontSize: 16,
      paddingHorizontal: 10,
      paddingVertical: 8,
      borderWidth: 0.5,
      borderColor: 'purple',
      borderRadius: 8,
      width:30,
      color: 'black',
      paddingRight: 30, // to ensure the text is never behind the icon
    },
  });