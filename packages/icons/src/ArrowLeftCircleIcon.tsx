import { Icon } from "@clinia-ui/react";

export const ArrowLeftCircleIcon = (
  props: React.ComponentProps<typeof Icon>
) => (
  <Icon width="1em" height="1em" viewBox="0 0 1024 1024" fill="none" {...props}>
    <circle
      cx="512"
      cy="512"
      r="384.002"
      stroke="currentColor"
      strokeWidth="53.33"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M588.407 350.26c11.901 11.901 11.901 31.198 0 43.099L457.576 524.19l130.831 130.831c11.901 11.902 11.901 31.199 0 43.1-11.902 11.902-31.198 11.902-43.1 0L392.926 545.74c-11.902-11.901-11.902-31.198 0-43.099L545.307 350.26c11.902-11.902 31.198-11.902 43.1 0Z"
      fill="currentColor"
    />
  </Icon>
);
