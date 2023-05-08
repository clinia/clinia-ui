import * as React from "react";
import { Link, LinkOverlay, LinkBox } from "@clinia-ui/react";

export default {
  title: "Components / Navigation / Link",
};

/**
 * Here's a basic link component
 * in Chakra.
 */
export const Default = () => (
  <Link isExternal href="https://google.com">
    This is a link
  </Link>
);

export const WithLinkOverlay = () => (
  <LinkBox
    borderWidth="1px"
    bg="white"
    p="4"
    rounded="lg"
    as="article"
    _hover={{ shadow: "lg" }}
  >
    <h2>
      <LinkOverlay href="google.com">Some blog post</LinkOverlay>
    </h2>
    <p>
      As a side note, using quotation marks around an attribute value is
      required only if this value is not a valid identifier.
    </p>
  </LinkBox>
);
