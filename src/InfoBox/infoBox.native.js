import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { isEmpty } from "lodash";
import { alertVariants } from "./common";

const Styles = StyleSheet.create({
  infoBoxContainer: {
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 5,
  },
  bodyText: {
    marginLeft: 30,
    marginTop: 11,
    color: "#767e86",
    fontSize: 13,
  },
  stretch: {
    width: 20,
    height: 20,
    backgroundColor: "lightblue",
  },
});

export default function InfoBox({
  heading,
  messageText,
  bodyText,
  variant,
  containerStyle,
}) {
  const alert = alertVariants;

  return (
    <View
      style={[
        Styles.infoBoxContainer,
        { backgroundColor: alert[variant].bgColor },
        containerStyle,
      ]}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
        }}
      >
        {alert[variant].icon_native}
        <Text
          style={{
            color: alert[variant].color,
            fontSize: 13,
            lineHeight: 21,
            marginLeft: 12,
            flex: 1,
            marginTop: -4,
          }}
        >
          {!isEmpty(heading) ? heading : messageText}React native
        </Text>
      </View>
      {!isEmpty(bodyText) && <Text style={Styles.bodyText}>{bodyText}</Text>}
    </View>
  );
}

export const INFOBOX_VARIANTS = {
  SUCCESS: "success",
  ERROR: "danger",
  PENDING: "pending",
  INFO: "info",
};
