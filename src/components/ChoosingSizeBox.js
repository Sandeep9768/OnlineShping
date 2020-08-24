import React, { Component, useState, useEffect } from "react";
import { View, Text, Animated, TouchableOpacity } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import ItemList from "./ItemList";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import Icon from "@expo/vector-icons/Ionicons";
// import { RNCPickerSelect } from "./uiComponent/components/RNPickerSelect";
import { loadBlogs, addBlog } from "../store/actions";
import { useDispatch } from 'react-redux';
import {DRESSES} from '../lib/lib'


export default function ChoosingSizeBox(props) {
  const [shirtColor, setstate] = useState(null);
  const [SHIRT, setShirt] = useState(DRESSES);
  const [SHIRT_HOME, setShirtHome] = useState(null);
  const { top, opacity, closeBox } = props;
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(loadBlogs(DRESSES))
    if (shirtColor) {
      if (shirtColor == "clear") {
        setShirt(DRESSES);
      } else {
        console.log("*******");
        let data = DRESSES.filter(function (item, key) {
          return item.color.includes(shirtColor);
        });
        console.log(data);
        setShirt(data);
      }
    }
  }, [shirtColor]);

  const onValueChange = (value) => {
    setstate(value);
    console.log(value);
  };

  const selectShirtColor = (shirt) => {
    setShirtHome(shirt)
  };
  const renderItemList_Dress = () => {
    return SHIRT.map((item, i) => {
      return (
        <ItemList key={item.id} imageUri={item.imageUri} name={item.name} priceOne={item.priceOne} onPress={selectShirtColor} />
      );
    });
  };

  return (
    <Animated.View
      style={[
        {
          height: hp("100%"),
          backgroundColor: "rgba(255,255,255,0.7)",
          position: "absolute",
          top: top, // props
          left: 0,
          right: 0,
          zIndex: 100,
          paddingHorizontal: 15,
          opacity: opacity, // props
        },
      ]}
    >
      {/* <View > */}
      <TouchableOpacity
        style={{
          position: "absolute",
          right: -8,
          borderRadius: 50,
          top: -10,
        }}
        onPress={() => {
          const defaultImage=  {
            id: 6,
            imageUri: require("../../assets/shirt/yellow1.jpeg"),
            name: "Marie-Anne short",
            priceOne: 180,
            priceTwo: null,
            color: "yellow",
          }
          closeBox(SHIRT_HOME ? SHIRT_HOME : defaultImage);
        }}
      >
        <Icon name="md-close" size={30} />
      </TouchableOpacity>

      <View style={{ margin: 10, flexDirection: "row" }}>
        {/* <RNCPickerSelect
          style={{ width: 30 }}
          onValueChange={onValueChange}
        ></RNCPickerSelect> */}
      </View>

      <ScrollView
        contentContainerStyle={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {renderItemList_Dress()}
      </ScrollView>

    </Animated.View>
  );
}
