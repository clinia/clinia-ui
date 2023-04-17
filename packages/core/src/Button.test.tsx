import {render} from "@testing-library/react"
import { Button } from "./Button";

describe('it should render the button', () => {
  it('should render the button', () => {
    const { getByText } = render(<Button>Click me</Button>);
    expect(getByText('Click me')).toBeTruthy()
  });
})