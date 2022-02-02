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
      <StoryText text="While you are falling, you know that this is the end so you prepare to die. Before you know it, you feel the water hit and you get eaten by sharks. You know that this is the end so you shut your eyes and embrace for the worst. All around you, however, you see white. You think that you might be in heaven, when a portal appears in front of you. You walk towards it, and right as you enter you realize that this whole paragraph has been a lie. You're dead. Next time don't risk walking across a balance beam." />
      <RowSeparator />
      <RowItem
        title="Sorry Man This Doesn't Take You Anywhere."
        icon={<Entypo name="chevron-right" size={24} color="black" />}
      />

      <RowSeparator />
    </SafeAreaView>
  );
};
