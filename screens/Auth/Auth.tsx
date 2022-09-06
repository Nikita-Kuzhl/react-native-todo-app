import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../types/RootStackParams";
import { LinearGradient } from "expo-linear-gradient";
import conf from "./../../style/config";
import { AuthButton } from "../../components";
import config from "./../../style/config";

type authScreenProp = StackNavigationProp<RootStackParamList, "Auth">;

const Auth = () => {
  const navigation = useNavigation<authScreenProp>();
  return (
    <LinearGradient
      colors={["#c6caff", "#e1e1ff", "#fbfeff"]}
      style={styles.container}
    >
      <Image
        source={require("./images/todo.png")}
        style={{
          marginTop: 40,
          width: 250,
          height: 250,
          marginLeft: "auto",
          marginRight: "auto",
          opacity: 0.5,
          transform: [{ rotate: "-25deg" }],
        }}
      />
      <View style={styles.text__container}>
        <Text style={styles.title}>Приветсвуем в</Text>
        <Text style={styles.subtitle}>Todo</Text>
        <AuthButton
          title="Авторизироваться"
          onPress={() => navigation.navigate("SignIN")}
        />
        <View style={styles.desciption}>
          <Text style={styles.description__text}>
            Если у вас нету аккаунта -{" "}
          </Text>
          <Pressable onPress={() => navigation.navigate("SignUP")}>
            <Text style={styles.link__text}>Авторизироваться</Text>
          </Pressable>
        </View>
      </View>
    </LinearGradient>
  );
};

export default Auth;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    paddingTop: 60,
  },
  text__container: {
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    marginTop: "auto",
    marginBottom: 120,
  },
  title: {
    fontFamily: conf.FontsType.standart,
    fontSize: 18,
  },
  subtitle: {
    fontFamily: conf.FontsType.bold,
    fontSize: 38,
    marginBottom: 20,
  },
  desciption: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    flexDirection: "row",
  },
  description__text: {
    fontFamily: config.FontsType.light,
    fontSize: 12,
  },
  link__text: {
    fontFamily: config.FontsType.standart,
    color: config.Color.purple,
    fontSize: 14,
  },
});
