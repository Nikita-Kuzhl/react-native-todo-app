import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";

import { RootStackParamList } from "../types/RootStackParams";
import { useNavigation } from "@react-navigation/native";

type homeScreenProp = StackNavigationProp<RootStackParamList, "Home">;

const Home = () => {
  const navigation = useNavigation<homeScreenProp>();
  return (
    <View>
      <Text>afmsklmfklamkl</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
