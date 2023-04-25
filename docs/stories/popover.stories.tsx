import * as React from "react";
import { chakra } from "@chakra-ui/system";
import {
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
  Button,
  ButtonGroup,
  Box,
  Link,
  Text,
  IconButton,
  CheckIcon,
} from "@clinia-ui/react";

export default {
  title: "Components / Overlay / Popover",
  decorators: [
    (story: Function) => (
      <chakra.div mx="auto" maxW="400px" mt="200px">
        {story()}
      </chakra.div>
    ),
  ],
};
function Card() {
  return (
    <Box p={5}>
      <Text fontWeight="bold">swyx</Text>
      <Text mt={3}>
        Infinite Builder working on DX @Netlify. Helping people #LearnInPublic
      </Text>
    </Box>
  );
}

export function TwitterEx() {
  return (
    <Popover trigger="hover">
      <PopoverTrigger>
        <Link href="#test" color="primary.main">
          Hover to see @swyx profile
        </Link>
      </PopoverTrigger>

      <PopoverContent
        sx={{
          bg: "#15202b",
          color: "white",
          width: "400px",
        }}
      >
        <Card />
      </PopoverContent>
    </Popover>
  );
}

export function WithCustomAnimation() {
  return (
    <Popover>
      <PopoverTrigger>
        <IconButton aria-label="Check" p={8}>
          <CheckIcon />
        </IconButton>
      </PopoverTrigger>
      <PopoverContent
        width="400px"
        variants={{
          enter: {
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.15,
            },
          },
          exit: {
            y: -4,
            opacity: 0,
            transition: {
              duration: 0.1,
            },
          },
        }}
      >
        <PopoverArrow />
        <PopoverBody>Are you sure you want to have that milkshake?</PopoverBody>
      </PopoverContent>
    </Popover>
  );
}

export const simple = () => (
  <Popover placement="right-start">
    <PopoverTrigger>
      <chakra.button mt="180px">Trigger</chakra.button>
    </PopoverTrigger>
    <PopoverContent>
      <PopoverArrow />
      <PopoverCloseButton />
      <PopoverHeader>Confirmation!</PopoverHeader>
      <PopoverBody>
        <p>Are you sure you want to have that milkshake?</p>
        <br />
        <button>Yes</button>
        <button>No</button>
      </PopoverBody>
    </PopoverContent>
  </Popover>
);

export const basic = () => (
  <>
    <Popover placement="top">
      <PopoverTrigger>
        <chakra.button>Welcome home</chakra.button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverHeader>Submit now</PopoverHeader>
        <PopoverBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </PopoverBody>
      </PopoverContent>
    </Popover>

    <Popover placement="bottom">
      <PopoverTrigger>
        <chakra.button>Welcome home</chakra.button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader>Submit now</PopoverHeader>
        <PopoverBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </PopoverBody>
      </PopoverContent>
    </Popover>

    <chakra.input />
  </>
);

export const Arrow = () => (
  <>
    <Popover placement="top" arrowShadowColor="red" arrowSize={40}>
      <PopoverTrigger>
        <chakra.button>Welcome home</chakra.button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverHeader>Submit now</PopoverHeader>
        <PopoverBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </PopoverBody>
      </PopoverContent>
    </Popover>
  </>
);

export function ControlledUsage() {
  const [isOpen, setIsOpen] = React.useState(false);
  const open = () => setIsOpen(!isOpen);
  const close = () => setIsOpen(false);
  return (
    <>
      <Button mr={5} onClick={open}>
        Trigger
      </Button>
      <Popover
        returnFocusOnClose={false}
        isOpen={isOpen}
        onClose={close}
        placement="right"
        closeOnBlur={false}
      >
        <PopoverTrigger>
          <Button colorScheme="pink">Popover Target</Button>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverHeader fontWeight="semibold">Confirmation</PopoverHeader>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverBody>
            Are you sure you want to continue with your action?
          </PopoverBody>
          <PopoverFooter display="flex" justifyContent="flex-end">
            <ButtonGroup size="sm">
              <Button variant="outline">Cancel</Button>
              <Button colorScheme="red">Apply</Button>
            </ButtonGroup>
          </PopoverFooter>
        </PopoverContent>
      </Popover>
    </>
  );
}

export function WithLazyPopover() {
  return (
    <Popover isLazy>
      <PopoverTrigger>
        <Button>Popover Target</Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverBody>
          Are you sure you want to continue with your action?
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}

export function WithLazyPopoverMounted() {
  return (
    <Popover isLazy lazyBehavior="keepMounted">
      <PopoverTrigger>
        <Button>Popover Target</Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverBody>
          Are you sure you want to continue with your action?
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}

export const WithMatchWidth = () => (
  <Popover matchWidth>
    <PopoverTrigger>
      <Button w="400px">Long Content</Button>
    </PopoverTrigger>
    <PopoverContent w="full">
      <PopoverBody>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </PopoverBody>
    </PopoverContent>
  </Popover>
);
