import React from "react";
import { Control, useController } from "react-hook-form";

import * as S from "./styles";

type Option = {
  label: string;
  value: string;
  icon: JSX.Element;
};

type RadioGroupProps = {
  id: string;
  options: Option[];
  control: Control<any>;
};

export const RadioGroup: React.FC<RadioGroupProps> = ({
  options,
  control,
  id,
}) => {
  const {
    field,
    fieldState: { error },
  } = useController({
    name: id,
    control,
    defaultValue: "",
  });

  return (
    <>
      {error && <S.ErrorMessage>{error.message}</S.ErrorMessage>}
      <S.Container>
        {options.map((option) => (
          <S.RadioItem htmlFor={`${id}-${option.value}`} key={option.value}>
            <input
              {...field}
              id={`${id}-${option.value}`}
              type="radio"
              value={option.value}
            />
            {option.icon}
            <span>{option.label}</span>
          </S.RadioItem>
        ))}
      </S.Container>
    </>
  );
};
