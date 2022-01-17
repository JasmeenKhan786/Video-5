import React from "react";
import {
  StyleSheet, 
  Text,
  View,
  Image,
  ImageBackground,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

//main axis - justifyContent
//cross axis - alignItems

//alignSelf, justifyContent, alignItems, margin and padding
export default class ForgotPassword extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView>
            <Text>ForgotPassword Screen</Text>
        </ScrollView>
      </View>
    );
  }
}
