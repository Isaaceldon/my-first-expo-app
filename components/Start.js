import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";

export default function Start({ navigation }) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.p}>Welcome</Text>
      </View>
      <View style={styles.buton}>
        <Button
          onPress={() => {
            navigation.navigate("Home");
          }}
          color="#ffc107"
          title="START"
        ></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "teal",
    alignItems: "center",
    justifyContent: "center",
  },

  p: {
    fontSize: 50,
    color: "#ffc107",
    marginBottom: 50,
  },

  buton: {
    marginBottom: 0,
  },
});
