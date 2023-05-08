import { chakra } from "@chakra-ui/system";
import * as React from "react";
import {
  Tag,
  TagCloseButton,
  TagLabel,
  TagLeftIcon,
  TagRightIcon,
  Avatar,
  AddIcon,
  SettingsIcon,
} from "@clinia-ui/react";

export default {
  title: "Components / Data Display / Tag",
  decorators: [
    (story: Function) => (
      <chakra.div maxW="600px" mx="auto" mt="40px">
        {story()}
      </chakra.div>
    ),
  ],
};

export const basic = () => <Tag>Primary</Tag>;

export const withSizes = () => (
  <>
    <Tag size="sm">Sizes</Tag>
    <Tag size="md">Sizes</Tag>
    <Tag size="lg">Sizes</Tag>
  </>
);

/**
 * Pass the `colorScheme` prop to use any color in the theme object to
 * change the background color of the tag component
 */

export const colorSchemes = () => (
  <>
    <Tag size="sm" colorScheme="green">
      Gray
    </Tag>
    <Tag size="md" colorScheme="pink">
      Gray
    </Tag>
    <Tag size="lg" colorScheme="blue">
      Gray
    </Tag>
  </>
);

/**
 * The tag component can contain an Icon. This is done by using the `TagIcon` component.
 * Positioning the tag icon can be done by placing it before (left side)
 * or after (right side) the tag component
 */

export const withLeftIcon = () => (
  <Tag colorScheme="cyan">
    <TagLeftIcon w="12px" h="12px" as={AddIcon} />
    <TagLabel>Green</TagLabel>
  </Tag>
);

export const withRightIcon = () => (
  <>
    <Tag colorScheme="cyan">
      <TagLabel>Green</TagLabel>
      <TagRightIcon w="12px" h="12px" as={AddIcon} />
    </Tag>

    <Tag variant="solid" colorScheme="teal">
      <TagLabel>Teal</TagLabel>
      <TagRightIcon as={SettingsIcon} />
    </Tag>
  </>
);

/**
 * Use the `TagCloseButton` to apply a close button to the tag component.
 */

export const withCloseButton = () => (
  <>
    <Tag variant="solid" size="sm">
      <TagLabel>Tab Label</TagLabel>
      <TagCloseButton />
    </Tag>

    <Tag variant="solid" size="md">
      <TagLabel>Tab Label</TagLabel>
      <TagCloseButton />
    </Tag>

    <Tag variant="solid" size="lg">
      <TagLabel>Tab Label</TagLabel>
      <TagCloseButton />
    </Tag>
  </>
);

/**
 * Tag component can contain a custom element. This is done by placing the custom element
 * within the tag component.
 */

export const withCustomElement = () => (
  <Tag size="lg" borderRadius="full">
    <Avatar
      src="https://bit.ly/sage-adebayo"
      size="xs"
      name="Segun Adebayo"
      marginLeft={-1}
      marginRight={2}
    />
    <TagLabel>Segun</TagLabel>
    <TagCloseButton />
  </Tag>
);
