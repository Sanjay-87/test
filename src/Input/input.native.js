import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { Button, HelperText, TextInput } from "react-native-paper";
import { isEmpty } from "lodash";

function Input(props) {
  const {
    label,
    mode,
    value,
    onChangeText,
    disabled,
    placeholder,
    multiline,
    numberOfLines,
    onFocus,
    onBlur,
    render,
    style,
    editable,
    autoFocus,
    keyboardType,
    maxLength,
    req,
    secureTextEntry,
    helperText,
    helperTextType,
    editText,
    onEdit,
    Icon,
    onChange,
    autoCapitalize,
    theme,
    errorMessage,
    imageUrl,
  } = props;

  return (
    <View style={Inputstyles.inputWrapper}>
      <TextInput
        label={label}
        mode={mode}
        value={value}
        onChangeText={onChangeText}
        onChange={onChange}
        disabled={disabled || editText}
        placeholder={placeholder}
        multiline={multiline}
        numberOfLines={numberOfLines}
        onFocus={onFocus}
        onBlur={onBlur}
        style={[Inputstyles.inlineStyle, style]}
        editable={editable}
        autoFocus={autoFocus}
        keyboardType={keyboardType}
        maxLength={maxLength}
        secureTextEntry={secureTextEntry}
        render={render}
        req={req}
        theme={theme}
        error={!isEmpty(errorMessage) ? true : false}
        autoCapitalize={autoCapitalize}
        {...props}
      />

      {editText && (
        <View style={Inputstyles.button}>
          <Button color={"#00BC32"} onPress={onEdit}>
            Edit
          </Button>
        </View>
      )}
      {Icon && (
        <View style={Inputstyles.icon}>
          <Icon />
        </View>
      )}
      {imageUrl ? (
        <View style={Inputstyles.icon}>
          <Image style={Inputstyles.logo} source={{ uri: imageUrl }} />
        </View>
      ) : null}
      {!isEmpty(helperText) && (
        <HelperText
          type={helperTextType}
          visible={helperText ? true : false}
          style={Inputstyles.helperTextStyle}
        >
          {helperText}
        </HelperText>
      )}
      {!isEmpty(errorMessage) && (
        <HelperText
          type="error"
          visible={errorMessage ? true : false}
          style={Inputstyles.helperTextStyle}
        >
          {errorMessage}
        </HelperText>
      )}
    </View>
  );
}

const Inputstyles = StyleSheet.create({
  inlineStyle: {
    backgroundColor: "#F8F8F8",
    fontSize: 15,
  },
  button: {
    position: "absolute",
    right: 10,
    top: 15,
  },
  icon: {
    position: "absolute",
    right: 10,
    top: 20,
  },
  helperTextStyle: {
    paddingLeft: 0,
    paddingBottom: 0,
  },
  logo: {
    width: 20,
    height: 20,
  },
});

export default Input;
