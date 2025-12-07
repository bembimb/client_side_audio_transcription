import { View, Text, Pressable, StyleSheet, Linking } from "react-native";
import { REPO_URL } from "../screens/HomeScreenUtil";

const SettingsBar = () => {
  const openUrl = (url: string) => {
    Linking.openURL(url).catch((err) => {
      console.error("Failed to open URL:", err);
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <Pressable onPress={() => openUrl(REPO_URL)}>
          <Text style={styles.logoText}>Frontend Vite Template</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "rgba(148,163,184,0.4)",
    backgroundColor: "rgba(15,23,42,0.98)"
  },
  inner: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  logoRow: {
    flexDirection: "row",
    alignItems: "center"
  },
  logoText: {
    fontSize: 14,
    fontWeight: "700",
    color: "#e5e7eb",
    marginRight: 8,
    letterSpacing: 0.8,
    textTransform: "uppercase"
  },
  navRow: {
    flexDirection: "row",
    alignItems: "center"
  },
});

export default SettingsBar;
