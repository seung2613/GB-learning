import React, { memo } from "react";
import { View, StyleSheet, Text } from "react-native";
import { TextInput as Input } from "react-native-paper";
import { theme } from "../core/theme";

/**
 * This class is for the user text input box styling pre-set class...
 * If imported, it automatically set the textbox with the pre-setted style.
 */
const TextInput = ({ errorText, ...props }) => (
  <View style={styles.container}>
    <Input
      style={styles.input}
      selectionColor={theme.colors.primary}
      underlineColor="transparent"
      mode="outlined"
      {...props}
    />
    {errorText ? <Text style={styles.error}>{errorText}</Text> : null}
  </View>
);

/**
 * This function is where the style is setted.
 */
const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginVertical: 12
  },
  input: {
    backgroundColor: theme.colors.surface
  },
  error: {
    fontSize: 14,
    color: theme.colors.error,
    paddingHorizontal: 4,
    paddingTop: 4
  }
});

export default memo(TextInput);
