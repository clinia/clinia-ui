import { chakra, useTheme } from "@chakra-ui/system";
import * as React from "react";
import {
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderTrack,
  RangeSliderThumb,
} from "@clinia-ui/react";

export default {
  title: "Components / Forms / Range Slider",
  decorators: [
    (story: Function) => (
      <chakra.div maxWidth="400px" height="300px" mx="auto" mt="40px">
        {story()}
      </chakra.div>
    ),
  ],
};

export function HorizontalSlider() {
  return (
    <RangeSlider onChangeEnd={console.log}>
      <RangeSliderTrack>
        <RangeSliderFilledTrack />
      </RangeSliderTrack>
      <RangeSliderThumb index={0} />
      <RangeSliderThumb index={1} />
    </RangeSlider>
  );
}

export function VerticalSlider() {
  return (
    <RangeSlider orientation="vertical" onChangeEnd={console.log}>
      <RangeSliderTrack>
        <RangeSliderFilledTrack />
      </RangeSliderTrack>
      <RangeSliderThumb index={0} />
      <RangeSliderThumb index={1} />
    </RangeSlider>
  );
}

export function SteppedHorizontalSlider() {
  const [value, setValue] = React.useState([3, 10]);
  return (
    <RangeSlider value={value} onChange={setValue} min={1} max={20} step={2}>
      <RangeSliderTrack>
        <RangeSliderFilledTrack />
      </RangeSliderTrack>
      <RangeSliderThumb index={0} />
      <RangeSliderThumb index={1} />
    </RangeSlider>
  );
}

export function DynamicSlider() {
  const [points, setPoints] = React.useState<number[]>([30, 70]);

  React.useEffect(() => {
    setTimeout(() => {
      setPoints([30, 50, 70]);
    }, 1000);
  }, []);

  return (
    <RangeSlider value={points} onChange={setPoints}>
      <RangeSliderTrack>
        <RangeSliderFilledTrack />
      </RangeSliderTrack>
      {points.map((_p, index) => (
        <RangeSliderThumb key={index} index={index} />
      ))}
    </RangeSlider>
  );
}
