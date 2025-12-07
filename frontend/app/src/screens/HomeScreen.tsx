import { View, Text, StyleSheet } from "react-native";

const HomeScreen = () => {
  return (
    <View style={styles.root}>
      <View style={styles.main}>
        <Text style={styles.text}>This is a template of the frontend vite proejct.</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  main: {
    flex: 1,
    padding: 16,
    backgroundColor: "#cfcfcf;",
    borderRadius: 0
  },
  text: {
    color: "#050505ff",
    fontSize: 14
  }
});

export default HomeScreen;
