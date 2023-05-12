import { render } from "@testing-library/react";
import * as Icons from "./index";

describe("Icons", () => {
  it.each(Object.entries(Icons))(
    "%s should hevae 1024 x 1024 view box",
    (name, Icon) => {
      const { container } = render(<Icon />);
      const element = container.querySelector(".chakra-icon");
      expect(element).toHaveAttribute("viewBox", "0 0 1024 1024");
    }
  );
});
