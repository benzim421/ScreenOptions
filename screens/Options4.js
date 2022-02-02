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
      <StoryText text="Hey, I commend the money first attitude. As you open up a bag you found on the ground, you begin to fill it up with gold. Soon the bag begins to get heavy but you persist. The growl starts to get louder and louder, but you continue to collect this precious metal. Out of nowhere, a Sumatran Tiger comes out of the opening. As he's staring at you, you freeze." />
      <RowSeparator />
      <RowItem
        title="Throw a Bar of Gold at it"
        icon={
          <AntDesign
            name="login"
            size={24}
            color="black"
            onPress={() => navigation.push("The Throw")}
          />
        }
      />

      <RowSeparator />

      <RowItem
        title="Try to Run to the Portal"
        icon={
          <Entypo
            name="chevron-right"
            size={24}
            color="black"
            onPress={() => navigation.push("The Sprint to Safety")}
          />
        }
      />

      <RowSeparator />
    </SafeAreaView>
  );
};
