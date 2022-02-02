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
      <StoryText text="You turn to run towards the portal and feel that you're moving extremely slow. Because of this, you instintively drop the bag of gold and hear a thud soon after. You don't look back, but entering the portal successfully, you assume the tiger tripped and fell. You enter into the most magical place ever, with beatiful surroundings, beautiful people, and happiness. Out of nowhere, you hear something resembling fast running. You turn around to see the tiger charging in your direction, and proceed to get eaten by it. Maybe you shouldn't thrown the gold at it." />
      <RowSeparator />
      <RowItem
        title="Better Luck"
        icon={<AntDesign name="login" size={24} color="black" />}
      />

      <RowSeparator />

      <RowItem
        title="Next Time"
        icon={<Entypo name="chevron-right" size={24} color="black" />}
      />

      <RowSeparator />
    </SafeAreaView>
  );
};
