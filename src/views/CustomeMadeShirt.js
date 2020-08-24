import React, { Component } from "react";
import {
  View,
  Text,
  ImageBackground,
  Dimensions,
  Animated,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import ChoosingSizeBox from "../components/ChoosingSizeBox";
import { ShirtType } from "../lib/lib";
import WhatsappBadge from "react-whatsapp-badge";
import { TouchableOpacity } from "react-native-gesture-handler";
// import { Image } from "react-native-paper/lib/typescript/src/components/Avatar/Avatar";

const { width } = Dimensions.get("window");

class CustomeMadeShirt extends Component {
  state = {
    sizeBoxOpen: false,
    backgroundColorImage: require("../../assets/shirt/yellow1.jpeg"),
    price: "200",
    name: "YellowShirt",
  };

  componentDidMount() {
    console.log(this.state);
  }
  componentDidUpdate() {
    console.log(this.state, "dfscds");
  }

  componentWillMount() {
    this.colorBox = new Animated.Value(hp("100%"));
    // console.log(this.colorBox);
  }

  setBackgroundImnage = (img) => {};

  openColorBox = () => {
    this.setState(
      (prevState, props) => {
        return {
          sizeBoxOpen: !prevState.colorBoxOpen,
          // colorBoxOpen: !prevState.colorBoxOpen,
        };
      },
      () => {
        Animated.timing(this.colorBox, {
          toValue: hp("0%"),
          duration: 400,
        }).start();
      }
    );
  };

  closeBox = (image) => {
    console.log(image.imageUri, "***************");
    this.setState(
      {
        sizeBoxOpen: false,
        price: image.name,
        name: image.priceOne,
        backgroundColorImage: image.imageUri,
      },
      () => {
        Animated.timing(this.colorBox, {
          toValue: hp("100%"),
          duration: 400,
        }).start();
      }
    );
  };

  render() {
    const animatedColorBoxOpacity = this.colorBox.interpolate({
      inputRange: [hp("30%"), hp("65%")],
      outputRange: [1, 0],
      extrapolate: "clamp",
    });

    return (
      <View style={{ flex: 1 }}>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            margin: 5,
          }}
        >
          <View
            style={{
              flex: 1.2,
              justifyContent: "space-between",
              alignItems: "center",
              borderBottomWidth: 1,
              borderBottomColor: "gray",
              zIndex: 200,
              height: hp("80%"),
            }}
          >
            {ShirtType.map((item) => {
              return (
                <TouchableWithoutFeedback onPress={() => this.openColorBox()}>
                  <View
                    style={{
                      width: wp("25"),
                      flexDirection: "row",
                      borderWidth: 0.8,
                      borderColor: this.state.colorBorderColor,
                      borderRadius: 2,
                      padding: 5,
                    }}
                  >
                    <View
                      style={{
                        flex: 2,
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 16,
                          color: "gray",
                          textTransform: "capitalize",
                        }}
                      >
                        {item}
                      </Text>
                    </View>
                    <View
                      style={{
                        flex: 1,
                        alignItems: "flex-end",
                        paddingRight: 15,
                      }}
                    ></View>
                  </View>
                </TouchableWithoutFeedback>
              );
            })}
          </View>
          <View
            style={{
              flex: 3,
              height: hp(this.state.sizeBoxOpen ? "100%" : "80%"),
              backgroundColor: "red",
            }}
          >
            {console.log(`'${this.state.backgroundColorImage}'`)}
            <ImageBackground
              source={this.state.backgroundColorImage}
              style={{ flex: 1 }}
            >
              <ChoosingSizeBox
                label="Choosing a color"
                color={true}
                top={this.colorBox}
                opacity={animatedColorBoxOpacity}
                setBackgroundImnage={this.setBackgroundImnage}
                closeBox={this.closeBox}
              />
            </ImageBackground>
            <View
              style={{
                height: hp(this.state.sizeBoxOpen ? "20%" : "10%"),
                backgroundColor: "#f2f2f2",
              }}
            >
              <Text style={{ fontSize: 20 }}>Name:{this.state.name}</Text>
              <Text style={{ fontSize: 20 }}>price:{this.state.price}</Text>
            </View>
          </View>
        </View>
        {/* <View>
          {this.state.sizeBoxOpen ? null : (
            <TouchableOpacity
              style={{
                marginRight: 40,
                marginLeft: 40,
                marginTop: 10,
                paddingTop: 20,
                paddingBottom: 20,
                backgroundColor: "#1E6738",
                borderRadius: 10,
                borderWidth: 1,
                borderColor: "#fff",
              }}
              onPress={() => this.props.navigation.navigate("Checkout")}
              underlayColor="#fff"
            >
              <Text
                style={{
                  color: "#fff",
                  textAlign: "center",
                  paddingLeft: 10,
                  paddingRight: 10,
                }}
              >
                Buy Now
              </Text>
            </TouchableOpacity>
          )}
          <WhatsappBadge
            text="Hello there"
            phone="55123456789"
            image={require("../../assets/whatsapp.png")}
          />
          <TouchableOpacity
            onPress={() => {
              this.setBackgroundImnage("../../assets/whatsapp.png");
            }}
          ></TouchableOpacity>
        </View> */}

        <TouchableOpacity
          onPress={() => {
            this.setBackgroundImnage("../../assets/shirt/yellow2.jpeg");
          }}
        >
          <Text>fdscvjhbrfvhjb</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default CustomeMadeShirt;
