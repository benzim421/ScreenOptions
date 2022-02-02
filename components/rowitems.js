import React from "react";
import { View, StyleSheet, TouchableHighlight, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export const RowSeparator = () => {
  return <View style={styles.separator} />;
};

export const StoryText = ({ text }) => {
  return <Text style={styles.storytext}>{text}</Text>;
};

export const RowItem = ({ title, icon }) => {
  return (
    <TouchableHighlight>
      <View style={styles.row}>
        <Text style={styles.text}>{title}</Text>
        {icon}
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    color: "#000000",
    margin: 20,
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
  storytext: {
    marginHorizontal: 20,
    marginBottom: 20,
    marginTop: 20,
    color: "red",
    fontFamily: "American Typewriter",
    fontSize: 20,
  },
});
