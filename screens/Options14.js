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
      <StoryText text="The Horse turn into a giant eagle and you fly off into the sky. At a certain point you start hanging on for dear life but you just can't hold on! You fall to what seems like your death until you surprisingly land in a pool of water. You swim to the surface only to realize you've won the game. " />
      <RowSeparator />
    </SafeAreaView>
  );
};
