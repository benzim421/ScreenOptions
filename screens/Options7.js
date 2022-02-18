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
      <StoryText text="You're slowly making your way across the beam and you feel that you are extremely close to the end. On the final step, a gust of wind hits you and you fall! Mid fall, however, someone catches you from above. Heart pounding through your chest, yelling for help, you get pulled up. You feel relieved and look up to ask the man who he is and why he saved you, just to realize it's Chris Dougherty! He picks you up and chucks you into the pool to die. I'd click on the death option if I were you." />
      <RowSeparator />
      <RowItem
        title="Death"
        icon={
          <AntDesign
            name="login"
            size={24}
            color="black"
            onPress={() => navigation.push("Death")}
          />
        }
      />

      <RowSeparator />
    </SafeAreaView>
  );
};
