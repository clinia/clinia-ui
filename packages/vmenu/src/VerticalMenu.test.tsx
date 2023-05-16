import { render } from "@testing-library/react";
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
