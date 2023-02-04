import { InputHTMLAttributes } from "react";
import { Control, useController } from "react-hook-form";
import * as S from "./styles";

type TextInputProps = {
  id: string;
  control: Control<any>;
  hasError?: boolean;
  optionalLabel?: boolean;
} & Omit<InputHTMLAttributes<HTMLInputElement>, "id">;

export function TextInput({
  id,
  control,
  optionalLabel = false,
  ...props
}: TextInputProps) {
  const {
    field,
    fieldState: { error },
  } = useController({
    name: id,
    control,
  });

  return (
    <S.InputWrapper
      htmlFor={id}
      optionalLabel={!field.value && optionalLabel}
      id={`${id}-container`}
      hasError={!!error}
    >
      <S.Input {...props} {...field} id={id} />
    </S.InputWrapper>
  );
}
