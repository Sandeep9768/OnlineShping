import React from "react";
import { Dimensions } from "react-native";
// import {
//   createStackNavigator,
//   createSwitchNavigator,
//   createAppContainer,
//   createDrawerNavigator,
//   createMaterialTopTabNavigator
// } from "react-navigation";

import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator,createMaterialTopTabNavigator } from "react-navigation-tabs";
import { createDrawerNavigator } from 'react-navigation-drawer';
import Icon from "@expo/vector-icons/Ionicons";
import Login from "./Login";
import Register from "./Register";
import Address from "./Address";
import Shipping from "./Shipping";
import Payment from "./Payment";
import CreditCard from "./CreditCard";
import CustomDrawerComponent from "../components/CustomDrawerComponent";
import CustomeMadeShirt from "./CustomeMadeShirt";


const paymentStackNavigator = createStackNavigator(
  {
    Payment: {
      screen: Payment
    },
    CreditCard: {
      screen: CreditCard
    }
  },
  {
    defaultNavigationOptions: {
      header: null
    }
  }
);

const CheckoutTabNavigator = createMaterialTopTabNavigator(
  {
    Address: {
      screen: Address
    },
    Shipping: {
      screen: Shipping
    },
    Payment: {
      screen: paymentStackNavigator
    }
  },
  {
    swipeEnabled: false,
    tabBarOptions: {
      activeTintColor: "#F08C4F",
      style: {
        backgroundColor: "#63CBA7"
      },
      indicatorStyle: {
        backgroundColor: "#F08C4F"
      }
    }
  }
);

const HomeStackNavigator = createStackNavigator({
  Home: {
    screen: CustomeMadeShirt,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: "Dress",
        headerTitleStyle: {
          color: "white"
        },
        headerStyle: {
          borderBottomColor:0
        },
        headerLeft: (
          <Icon
            onPress={() => navigation.openDrawer()}
            name="md-menu"
            color="black"
            size={30}
            style={{
              paddingLeft: 10
            }}
          />
        ),
      };
    }
  },
  
  Checkout: {
    screen: CheckoutTabNavigator,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitleStyle: {
          color: "white"
        },
        headerStyle: {
          backgroundColor: "#5BBC9D"
        },
        headerTitle: "Checkout",
        headerLeft: (
          <Icon
            onPress={() => navigation.openDrawer()}
            name="md-menu"
            size={30}
            style={{
              paddingLeft: 10
            }}
          />
        )
      };
    }

  },
 
});

const HomeDrawNavigator = createDrawerNavigator(
  {
    Home: {
      screen: HomeStackNavigator
    }
  },
  {
    drawerWidth: Dimensions.get("window").width,
  drawerBackgroundColor: "transparent ",
    contentComponent: CustomDrawerComponent,
    
  }
);

const AppSwitchNavigator = createSwitchNavigator({
  Login: {
    screen: Login
  },
  Register: {
    screen: Register
  },
  // Home: {
  //   screen: CheckoutTabNavigator
  // }
});

export default createAppContainer(HomeDrawNavigator);

