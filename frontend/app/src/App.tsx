import type { FC } from "react";
import { View, StyleSheet } from "react-native";
import { AuthProvider } from "./context/Auth";
import SettingsBar from "./components/SettingsBar";
import HomeScreen from "./screens/HomeScreen";

const App: FC = () => {
  return (
    <AuthProvider>
      <View style={styles.root}>
        <SettingsBar />
        <HomeScreen />
      </View>
    </AuthProvider>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    height: "100%",
    margin: 0,
    padding: 0,
    backgroundColor: "#cfcfcf"
  }
});

export default App;
