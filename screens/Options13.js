import React from "react";
import { Linking, SafeAreaView, StyleSheet } from "react-native";
import { RowSeparator, RowItem, StoryText } from "../components/rowitems";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import Navigation from "./Navigation";

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

export default ({ navigation }) => {
  return (
    <SafeAreaView>
      <StoryText text="The Dolphin ends up being a shark and you get eaten. Sorry." />
      <RowSeparator />
      <RowItem
        title="Play Again"
        icon={
          <AntDesign
            name="login"
            size={24}
            color="black"
            onPress={() => navigation.push("The Beginning")}
          />
        }
      />

      <RowSeparator />
    </SafeAreaView>
  );
};
