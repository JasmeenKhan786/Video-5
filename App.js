import React from "react";
import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";
import Login from "./screens/Login";
import MyStack from "./navigations/navigate";

import { NavigationContainer } from "@react-navigation/native";
//Components
// Functional and Class

//JSON - Format
// {key:value, key:value, key:value}

//Props - Pass values from one component to another
//States - Store values inside a class/component

//Component Lifecycle
//Mounting
//Updating
//Unmounting

//Navigations
//Stack Navigator
//Bottom Tab Navigator
//Material Bottom Tab Navigator
//Material Top Tab Navigator
//Drawer Navigator

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({});
