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
      <StoryText text="As you enter into what looks like a magical place, darkness quickly surrounds you. You come to realize that maybe the simulation is playing tricks on you. You are actually on a deserted island with absolutely no resources, making it feel like you're in the movie Castaway. Hahaha, I'm just kidding. You won. Wasn't that simple?" />
      <RowSeparator />
      <RowItem
        title="Victory!"
        icon={
          <AntDesign
            name="login"
            size={24}
            color="black"
            onPress={() => navigation.push("Gold Collection")}
          />
        }
      />
      <RowSeparator />
    </SafeAreaView>
  );
};
