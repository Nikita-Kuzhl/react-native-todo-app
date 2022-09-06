import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../types/RootStackParams";

type singINScreenProp = StackNavigationProp<RootStackParamList, "SignUP">;

const SignUP = () => {
  return (
    <View>
      <Text>SignUP</Text>
    </View>
  );
};

export default SignUP;

const styles = StyleSheet.create({});
