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
      <StoryText text="Without a flashlight, you only have your sense of touch. As you feel around the room you don't find much and you are starting to lose hope. And then, out of nowhere, AAAAAAH!! You fall through a hole in the ground and land on a balance beam hanging over a pool filled with hungry sharks. Looking around nervously, you see an opening that you might be able to jump to. However, there is a person waiting for you if you choose to cross the balance beam." />
      <RowSeparator />
      <RowItem
        title="Attempt to walk across the beam."
        icon={
          <AntDesign
            name="login"
            size={24}
            color="black"
            onPress={() => navigation.push("The Beam")}
          />
        }
      />

      <RowSeparator />

      <RowItem
        title="Jump"
        icon={
          <Entypo
            name="chevron-right"
            size={24}
            color="black"
            onPress={() => navigation.push("The Jump")}
          />
        }
      />

      <RowSeparator />
    </SafeAreaView>
  );
};
