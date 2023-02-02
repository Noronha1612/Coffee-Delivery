import { Minus, Plus } from "phosphor-react";
import { memo, useEffect, useState } from "react";
import * as S from "./styles";

type NumberInputProps = {
  onChange?: (value: number) => void;
  initialValue?: number;
};

export const NumberInput: React.FC<NumberInputProps> = memo(
  ({ onChange, initialValue }) => {
    const [currentValue, setCurrentValue] = useState(initialValue ?? 1);

    const strictPositiveNumber = (value: number) => {
      return value < 1 ? 1 : value;
    };
    const incrementCurrentValue = () => {
      setCurrentValue((previous) => strictPositiveNumber(previous + 1));
    };
    const decrementCurrentValue = () =>
      setCurrentValue((previous) => strictPositiveNumber(previous - 1));

    useEffect(() => {
      onChange?.(currentValue);
    }, [currentValue]);

    return (
      <S.QuantitySelector>
        <span onClick={decrementCurrentValue}>
          <Minus size={14} />
        </span>
        <span className="value">{currentValue}</span>
        <span onClick={incrementCurrentValue}>
          <Plus size={14} />
        </span>
      </S.QuantitySelector>
    );
  }
);
