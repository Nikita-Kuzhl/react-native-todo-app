import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { FC } from "react";
import { Controller, ErrorOption, ValidationRule } from "react-hook-form";
import config from "../../style/config";

type AuthInputProps = {
  control: any;
  nameInput: string;
  errors: ErrorOption | undefined;
  placeholder: string;
  rules?: ValidationRule<any>;
};

const AuthInput: FC<AuthInputProps> = ({
  control,
  nameInput,
  errors,
  placeholder,
  rules,
}) => {
  console.log(errors);
  return (
    <View>
      <Controller
        control={control}
        rules={{ required: true, minLength: 8 }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder={placeholder}
          />
        )}
        name={nameInput}
      />
      {errors && <Text style={styles.error}>Неверный {placeholder}</Text>}
    </View>
  );
};

export default AuthInput;

const styles = StyleSheet.create({
  input: {
    width: 250,
    height: 40,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: "white",
    paddingLeft: 15,
    borderRadius: 10,
  },
  error: {
    paddingLeft: 10,
    color: config.Color.red,
    fontFamily: config.FontsType.light,
    fontSize: 14,
  },
});
