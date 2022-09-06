import * as React from "react";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import { Auth, Home, SignIN, SignUP } from "./screens";

const Stack = createNativeStackNavigator();

const loadApplication = async () => {
  await Font.loadAsync({
    rubik: require("./assets/fonts/Rubik.ttf"),
    "rubik-light": require("./assets/fonts/Rubiklight.ttf"),
    "rubik-medium": require("./assets/fonts/Rubikmedium.ttf"),
    "rubik-bold": require("./assets/fonts/Rubikbold.ttf"),
  });
};

export default function App() {
  const [isReady, setIsReady] = React.useState(false);

  React.useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();
        await loadApplication();
      } catch (e) {
        console.warn(e);
      } finally {
        setIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = React.useCallback(async () => {
    if (isReady) {
      await SplashScreen.hideAsync();
    }
  }, [isReady]);

  if (!isReady) {
    return null;
  }

  return (
    <NavigationContainer onReady={onLayoutRootView}>
      <Stack.Navigator
        initialRouteName="Auth"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Auth" component={Auth} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="SignUP" component={SignUP} />
        <Stack.Screen name="SignIN" component={SignIN} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
