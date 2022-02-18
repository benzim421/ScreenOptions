import React from "react";
import { Linking, SafeAreaView, StyleSheet, Text, Image } from "react-native";
import { RowSeparator, RowItem, StoryText } from "../components/rowitems";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

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
  img: {
    width: "auto",
    height: 400,
    marginTop: 20,
    marginLeft: 5,
  },
});

const openURL = (url) => {
  Linking.openURL(url);
};

export default ({ navigation }) => {
  return (
    <SafeAreaView>
      <StoryText
        text="You wake up in a pitch black room, with no memory of who or where you
        are. About 20 ft away, you see a lit up door."
      />
      <RowSeparator />
      <RowItem
        title="Go through the door"
        icon={
          <AntDesign
            name="login"
            size={24}
            color="black"
            onPress={() => navigation.push("The Lit Up Door")}
          />
        }
      />

      <RowSeparator />

      <RowItem
        title="Walk around the room to find something else."
        icon={
          <Entypo
            name="chevron-right"
            size={24}
            color="black"
            onPress={() => navigation.push("Exploration")}
          />
        }
      />

      <RowSeparator />
      <Image
        style={styles.img}
        source={{
          uri: "https://wallpapercave.com/wp/31K91HR.jpg",
        }}
      />
    </SafeAreaView>
  );
};
