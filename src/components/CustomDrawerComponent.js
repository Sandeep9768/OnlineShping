import React, { Component } from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import Icon from "@expo/vector-icons/Ionicons";

class CustomDrawerComponent extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
        }}
      >
        <View style={{ flex: 0.5 }}></View>
        {/* <ImageBackground
          source={require("../../assets/drawer_bg.jpg")}
          style={{
            flex: 1,
            width: "100%",
            height: "100%",
            resizeMode: "contain"
          }}
        > */}
        <View style={{ flex: 5, flexDirection: "row" }}>
          <View style={{ flex: 2,backgroundColor:'gray' }}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor:'gray'
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: 20,
                  fontWeight: "bold",
                }}
              >
                Menu
              </Text>
              <Icon
                onPress={() => this.props.navigation.closeDrawer()}
                name="ios-close"
                color="white"
                size={50}
              />
            </View>
            <View
              style={{
                flex: 2,
                justifyContent: "space-around",
                marginVertical: 20,
                padding: 5,
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.closeDrawer();
                  this.props.navigation.navigate("Home");
                }}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  paddingVertical: 5,
                }}
              >
                <Icon name="ios-home" color="white" size={40} />
                <Text
                  style={{
                    color: "white",
                    fontSize: 25,
                    fontWeight: "400",
                    marginLeft: wp("4.5%"),
                  }}
                >
                  home
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.closeDrawer();
                  this.props.navigation.navigate("Home");
                }}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  paddingVertical: 5,
                }}
              >
                <Icon name="ios-search" color="white" size={40} />
                <Text
                  style={{
                    color: "white",
                    fontSize: 25,
                    fontWeight: "400",
                    marginLeft: wp("4.5%"),
                  }}
                >
                  Login
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.closeDrawer();
                  this.props.navigation.navigate("Home");
                }}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  paddingVertical: 5,
                }}
              >
                <Icon name="ios-list-box" color="white" size={40} />
                <Text
                  style={{
                    color: "white",
                    fontSize: 25,
                    fontWeight: "400",
                    marginLeft: wp("4.5%"),
                  }}
                >
                  Registration
                </Text>
              </TouchableOpacity>
              </View>
          </View>
          <View style={{ flex: 1 }}></View>
        </View>
        {/* </ImageBackground> */}
      </View>
    );
  }
}

export default CustomDrawerComponent;

{
  /* <Text> CustomDrawerComponent </Text>
        <Button
          title="go to Basket"
          onPress={() => this.props.navigation.navigate("Basket")}
        /> */
}
