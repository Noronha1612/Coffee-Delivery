import { HTMLAttributes, useRef } from "react";
import { Control, useController, useWatch } from "react-hook-form";
import * as S from "./styles";

type TextInputProps = {
  id: string;
  control: Control<any>;
  hasError?: boolean;
  optionalLabel?: boolean;
} & Omit<HTMLAttributes<HTMLInputElement>, "id">;

export function TextInput<ControlType extends Control<any>>({
  id,
  control,
  optionalLabel = false,
  ...props
}: TextInputProps) {
  const { field } = useController({
    name: id,
    control,
  });

  return (
    <S.InputWrapper
      htmlFor={id}
      optionalLabel={!field.value && optionalLabel}
      id={`${id}-container`}
    >
      <S.Input {...props} {...field} id={id} />
    </S.InputWrapper>
  );
}
