import * as React from "react";
import { PinInput, PinInputField } from "@clinia-ui/react";

export default {
  title: "Components / Forms / PinInput",
};

export function ComponentExample() {
  return (
    <PinInput>
      <PinInputField />
      <PinInputField />
      <PinInputField />
    </PinInput>
  );
}

export const Sizes = () => (
  <>
    {["xs", "sm", "md", "lg"].map((size) => (
      <div key={size} style={{ marginBottom: "1rem" }}>
        <PinInput size={size}>
          <PinInputField />
          <PinInputField />
          <PinInputField />
        </PinInput>
      </div>
    ))}
  </>
);

export const Variants = () => (
  <>
    {["outline", "filled", "flushed", "unstyled"].map((variant) => (
      <div key={variant} style={{ marginBottom: "1rem" }}>
        <PinInput variant={variant}>
          <PinInputField />
          <PinInputField />
          <PinInputField />
        </PinInput>
      </div>
    ))}
  </>
);

export const Controlled = () => {
  const [value, setValue] = React.useState("");

  const handleChange = (value: string) => {
    setValue(value);
  };

  const handleComplete = (value: string) => {
    console.log(value);
  };

  return (
    <PinInput value={value} onChange={handleChange} onComplete={handleComplete}>
      <PinInputField />
      <PinInputField />
      <PinInputField />
    </PinInput>
  );
};
