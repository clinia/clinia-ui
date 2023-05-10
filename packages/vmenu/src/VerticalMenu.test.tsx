import { ChakraProvider } from "@chakra-ui/react";
import { findByText, render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { VerticalMenu, VerticalMenuItemType } from ".";

describe("it should render the menu", () => {
  it("should render each item", () => {
    const itemsText = ["test1", "test2"];
    const items: VerticalMenuItemType[] = itemsText.map((text) => ({
      key: text,
      icon: <>{text}</>,
    }));
    const { getByText } = render(<VerticalMenu items={items} />);

    itemsText.forEach((text) => {
      expect(getByText(text)).toBeVisible();
    });
  });
});
