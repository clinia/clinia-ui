import * as React from "react";
import {
  Radio,
  RadioGroup,
  Stack,
  Wrap,
  SimpleGrid,
  Container,
  WrapItem,
} from "@clinia-ui/react";

export default {
  title: "Components / Forms / Radio",
  decorators: [(story: Function) => <Container mt="40px">{story()}</Container>],
};

export const Basic = () => <Radio>Hello</Radio>;

export const Disabled = () => <Radio isDisabled>Disabled</Radio>;

export const Readonly = () => (
  <Radio mt="40px" isChecked isReadOnly size="lg">
    I'm a readonly radio
  </Radio>
);

export const WithSizes = () => {
  const sizes = ["sm", "md", "lg"];

  return (
    <>
      {sizes.map((size) => (
        <Radio key={size} size={size} name="sample" ml="1rem">
          Option
        </Radio>
      ))}
    </>
  );
};

export const _RadioGroup = () => {
  const [value, setValue] = React.useState("");
  return (
    <RadioGroup value={value} onChange={setValue}>
      <Stack>
        <Radio value="Option 1">Option 1</Radio>
        <Radio value="Option 2">Option 2</Radio>
        <Radio value="Option 3">Option 3</Radio>
      </Stack>
      <button onClick={() => setValue("")}>Clear</button>
    </RadioGroup>
  );
};

export const GroupWithStack = () => {
  return (
    <RadioGroup defaultValue="Option 1" onChange={console.log}>
      <Stack>
        <Radio value="Option 1">Option 1</Radio>
        <Radio value="Option 2">Option 2</Radio>
        <Radio value="Option 3">Option 3</Radio>
      </Stack>
    </RadioGroup>
  );
};

export const GroupWithWrap = () => {
  const range = Array.from(Array(10)).map((_, i) => i + 1);
  return (
    <RadioGroup onChange={console.log} defaultValue="Option 1">
      <Wrap spacing={[2, 4, 6]}>
        {range.map((num) => (
          <WrapItem key={num}>
            <Radio value={`Option ${num}`}>{`Option ${num}`}</Radio>
          </WrapItem>
        ))}
      </Wrap>
    </RadioGroup>
  );
};

export const GroupWithSimpleGrid = () => {
  const range = Array.from(Array(10)).map((_, i) => i + 1);
  return (
    <RadioGroup onChange={console.log} defaultValue="Option 1">
      <SimpleGrid columns={2} spacing={[2, 4, 6]}>
        {range.map((num) => (
          <Radio key={num} value={`Option ${num}`}>{`Option ${num}`}</Radio>
        ))}
      </SimpleGrid>
    </RadioGroup>
  );
};

export function DisabledRadioGroup() {
  return (
    <RadioGroup isDisabled>
      <Radio value="one">One</Radio>
      <Radio value="two" isDisabled>
        Two
      </Radio>
      <Radio value="three" isDisabled={false}>
        Three
      </Radio>
    </RadioGroup>
  );
}
