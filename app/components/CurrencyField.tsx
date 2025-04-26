import React, { forwardRef, Ref, useImperativeHandle, useMemo, useRef } from "react"
import { TextInput as RNTextInput, TextStyle, ViewStyle } from "react-native"
import { TextField, TextFieldProps } from "./TextField"
import { TextInput } from "react-native-paper"
import MaskInput, { createNumberMask } from "react-native-mask-input"

export interface CurrencyFieldProps extends Omit<TextFieldProps, "ref" | "value"> {
  value?: number
  onChangeValue?: (value: number | undefined) => void
}

/**
 * A component that allows for the entering and editing of text.
 * @see [Documentation and Examples]{@link https://docs.infinite.red/ignite-cli/boilerplate/components/CurrencyField/}
 * @param {CurrencyFieldProps} props - The props for the `CurrencyField` component.
 * @returns {JSX.Element} The rendered `CurrencyField` component.
 */
export const CurrencyField = forwardRef(function CurrencyField(
  props: CurrencyFieldProps,
  ref: Ref<RNTextInput>,
) {
  const { value, onChangeValue, ...TextInputProps } = props
  const input = useRef<RNTextInput>(null)

  useImperativeHandle(ref, () => input.current as RNTextInput)

  const currencyMask = createNumberMask({
    delimiter: "٫",
    separator: ".",
    precision: 0,
  })

  const helper = useMemo(() => {
  }, [value, props.error])

  return (
    <TextField
      ref={input}
      value={value ? value.toString() : ""}
      right={<TextInput.Affix text="﷼" />}
      style={$leftAlien}
      keyboardType="numeric"
      render={(props) => (
        <MaskInput
          {...props}
          mask={currencyMask}
          onChangeText={(masked, unmasked) => {
          }}
        />
      )}
      {...TextInputProps}
    />
  )
})
const $leftAlien: ViewStyle | TextStyle = { direction: "ltr", textAlign: "left" }
