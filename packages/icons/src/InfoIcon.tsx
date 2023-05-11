import { Icon } from "@clinia-ui/react";

export const InfoIcon = (props: React.ComponentProps<typeof Icon>) => (
  <Icon
    width="1em"
    height="1em"
    viewBox="0 0 1024 1024"
    fill="currentcolor"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M512 938.667c235.642 0 426.667-191.025 426.667-426.667 0-235.641-191.025-426.667-426.667-426.667C276.359 85.333 85.334 276.36 85.334 512c0 235.642 191.025 426.667 426.666 426.667Zm42.667-640c0 23.564-19.103 42.666-42.667 42.666s-42.666-19.102-42.666-42.666C469.334 275.103 488.436 256 512 256c23.564 0 42.667 19.103 42.667 42.667Zm-85.333 130a2 2 0 0 1 2-2h81.333a2 2 0 0 1 2 2V766a2 2 0 0 1-2 2h-81.333a2 2 0 0 1-2-2V428.667Z"
    />
  </Icon>
);
