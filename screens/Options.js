import React from "react";
import { Linking, SafeAreaView, StyleSheet } from "react-native";
import { RowSeparator, RowItem } from "../components/rowitems";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    color: "#000000",
    margin: 20,
    color: "#000000",
  },
  separator: {
    backgroundColor: "#000000",
    height: StyleSheet.hairlineWidth,
    marginHorizontal: 20,
  },
  row: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    marginRight: 20,
  },
});

const openURL = (url) => {
  Linking.openURL(url);
};

export default () => {
  return (
    <SafeAreaView>
      <RowItem title="Remember to Click the Icon Not the Title:)" />

      <RowSeparator />

      <RowItem
        title="Menu"
        icon={
          <AntDesign
            name="login"
            size={24}
            color="black"
            onPress={() => openURL("https://benzim421.github.io/Menu/")}
          />
        }
      />

      <RowSeparator />

      <RowItem
        title="About Me"
        icon={
          <Entypo
            name="chevron-right"
            size={24}
            color="black"
            onPress={() => openURL("https://benzim421.github.io/aboutme/")}
          />
        }
      />

      <RowSeparator />

      <RowItem
        title="Responsive"
        icon={
          <AntDesign
            name="creditcard"
            size={24}
            color="black"
            onPress={() => openURL("https://benzim421.github.io/Responsive/")}
          />
        }
      />

      <RowSeparator />
    </SafeAreaView>
  );
};
