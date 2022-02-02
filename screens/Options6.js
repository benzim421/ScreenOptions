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
      <StoryText text="You set up your feet, bend down and jump as far as you can. Your vision is limited a little bit but the ouline of the opening gives you hope. As you're just about to get there, BANG! It was a fake opening, you hit the wall painfully, and fall. You get ready to die as you curl into the ball ready to hit the water. You reach the water just to realize the sharks are fake, the water is fake, and you're in a simulation. You continue to fall and land in an odd room. To your right, a portal into what looks like your perfect world, and to your left one that looks into your equivalent of hell." />
      <RowSeparator />
      <RowItem
        title="Walk Towards The Good Looking Portal"
        icon={
          <AntDesign
            name="login"
            size={24}
            color="black"
            onPress={() => navigation.push("The Good Portal")}
          />
        }
      />

      <RowSeparator />

      <RowItem
        title="Walk Towards the Bad Looking Portal"
        icon={
          <Entypo
            name="chevron-right"
            size={24}
            color="black"
            onPress={() => navigation.push("The Bad Portal")}
          />
        }
      />

      <RowSeparator />
    </SafeAreaView>
  );
};
