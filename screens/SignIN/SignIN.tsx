import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../types/RootStackParams";
import { AuthButton, AuthInput } from "../../components";
import { useForm, SubmitHandler } from "react-hook-form";
import config from "../../style/config";
import { LinearGradient } from "expo-linear-gradient";

type singINScreenProp = StackNavigationProp<RootStackParamList, "SignIN">;

type FormData = {
  login: string;
  password: string;
};

const SignIN = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => console.log(data);
  return (
    <LinearGradient
      colors={["#c6caff", "#e1e1ff", "#fbfeff"]}
      style={styles.container}
    >
      <Text style={styles.title}>Авторизация</Text>
      <AuthInput
        control={control}
        errors={errors.login}
        placeholder="Логин"
        nameInput="login"
        rules={{ minLenght: 8 }}
      />
      <AuthInput
        control={control}
        errors={errors.password}
        placeholder="Пароль"
        nameInput="password"
      />
      <AuthButton
        styleNew={styles.button}
        title="Авторизоваться"
        onPress={handleSubmit(onSubmit)}
      />
    </LinearGradient>
  );
};

export default SignIN;

const styles = StyleSheet.create({
  container: {
    paddingTop: "auto",
    paddingBottom: "auto",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  title: {
    fontFamily: config.FontsType.medium,
    fontSize: 24,
    marginBottom: 10,
  },
  button: {
    marginTop: 20,
  },
});
