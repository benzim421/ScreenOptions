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
      <StoryText text="You remember that you play baseball, take the gold and throw it perfectly at the tigers eye. It falls to the ground, and isn't able to get back up. Just to make sure you're safe yo=u throw a couple more bars of gold at it. With newfound time, you collect even more gold and walk through the portal. It is the most magical place you've ever seen, and with all of your money you live a happy and successful life. Maybe money does buy a bit of happiness after all." />
      <RowSeparator />
      <RowItem
        title="Good"
        icon={<AntDesign name="login" size={24} color="black" />}
      />

      <RowSeparator />

      <RowItem
        title="Job"
        icon={<Entypo name="chevron-right" size={24} color="black" />}
      />

      <RowSeparator />
    </SafeAreaView>
  );
};
