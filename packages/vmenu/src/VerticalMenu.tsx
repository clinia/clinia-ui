import { Center, Tooltip, VStack } from "@chakra-ui/react";

export type VerticalMenuItemType = {
  key: string;
  title?: string;
  icon?: JSX.Element;
};

export type VerticalMenuProps = {
  items?: VerticalMenuItemType[];
  selectedKeys?: string[];
  className?: string;
};

const VerticalMenu = ({
  items,
  selectedKeys,
  className,
}: VerticalMenuProps) => {
  return (
    <VStack className={className} spacing={0}>
      {items?.map((item) => {
        const style = selectedKeys?.includes(item.key)
          ? { backgroundColor: "primary.100", color: "primary.main" }
          : {};
        return (
          <Center key={item.key} w="100%" {...style}>
            <Tooltip label={item.title} placement="right" openDelay={500}>
              {item.icon}
            </Tooltip>
          </Center>
        );
      })}
    </VStack>
  );
};

export default VerticalMenu;
