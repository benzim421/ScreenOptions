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
      <StoryText text="As you walk out the other side of the portal, you see a dolphin you can ride off into the ocean and a horse you can ride off into the land." />
      <RowSeparator />
      <RowItem
        title="Ride Dolphin"
        icon={
          <AntDesign
            name="login"
            size={24}
            color="black"
            onPress={() => navigation.push("The Dolphin Ride")}
          />
        }
      />

      <RowSeparator />
      <RowItem
        title="Ride Horse"
        icon={
          <AntDesign
            name="login"
            size={24}
            color="black"
            onPress={() => navigation.push("The Horse Ride")}
          />
        }
      />

      <RowSeparator />
    </SafeAreaView>
  );
};
