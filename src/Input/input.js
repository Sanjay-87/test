import React from 'react';
import TextField from 'material-ui/TextField';

const Input = (props) => {
  if (props.type === 'date' || props.shrink) {
    return (
      <TextField
        error={props.error}
        type={props.type}
        value={props.value}
        helperText={props.helperText}
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          max: `${props.max}`
        }}
        fullWidth
        required={props.required}
        className={props.class}
        id={props.id}
        label={props.label}
        onFocus={props.onFocus}
        name={props.name}
        variant={props.variant}
        onChange={props.onChange}
      />
    );
  } else {
    return (
      <TextField
        inputref={props.inputref}
        error={props.error}
        rows={props.rows}
        disabled={props.disabled}
        type={props.type}
        defaultValue={props.defaultValue}
        value={props.value}
        helperText={props.helperText}
        placeholder={props.placeholder}
        required={props.required}
        className={props.class}
        id={props.id}
        label={props.label}
        onFocus={props.onFocus}
        onBlur={props.onBlur}
        name={props.name}
        onChange={props.onChange}
        variant={props.variant}
        onKeyPress={props.onKeyChange}
        inputProps={{
          maxLength: props.maxLength,
          inputMode: props.inputMode,
          pattern:props.pattern,
        }}
        onClick={props.onClick}
        autoComplete={props.autoComplete}
        autoFocus={props.autoFocus}
        multiline={props.multiline}
        rowsMax="3"
      />
    );
  }
};

export default Input;
