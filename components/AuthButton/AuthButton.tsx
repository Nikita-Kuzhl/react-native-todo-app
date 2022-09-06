import React, { FC } from "react";
import {
  Text,
  StyleSheet,
  Pressable,
  GestureResponderEvent,
  PressableProps,
  StyleProp,
  ViewStyle,
} from "react-native";
import config from "../../style/config";

type MyButtonProps = PressableProps & {
  onPress?: (event: GestureResponderEvent) => void;
  title: string;
  width?: string;
  styleNew?: StyleProp<ViewStyle>;
};

const AuthButton: FC<MyButtonProps> = ({
  onPress,
  title = "Save",
  styleNew,
}) => {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        styleNew,
        { transform: [{ scale: pressed ? 0.98 : 1 }] },
        { shadowColor: pressed ? "white" : config.Color.purple },
      ]}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  button: {
    width: "60%",
    height: 50,
    backgroundColor: "white",
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "black",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "white",
    shadowOpacity: 0.5,
    shadowRadius: 50,
  },
  text: {
    fontSize: 16,
    fontFamily: config.FontsType.medium,
  },
});

export default AuthButton;
