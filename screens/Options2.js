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
      <StoryText text="As you enter a room the door shuts and locks behind you. You see a flashlight and explore around the room to find mass amounts of gold. To your left, you see a portal, but through an opening to your right you hear a growl starting to get louder." />
      <RowSeparator />
      <RowItem
        title="Take a couple minutes to collect as much gold as possible."
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

      <RowItem
        title="Run into the portal"
        icon={
          <Entypo
            name="chevron-right"
            size={24}
            color="black"
            onPress={() => navigation.push("The Portal")}
          />
        }
      />

      <RowSeparator />
    </SafeAreaView>
  );
};
