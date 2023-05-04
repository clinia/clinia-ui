import { Icon } from "@clinia-ui/react";

export const ArrowRightCircleIcon = (
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
      d="M435.593 350.26c-11.902 11.901-11.902 31.198 0 43.099L566.424 524.19 435.593 655.022c-11.902 11.901-11.902 31.198 0 43.099 11.901 11.902 31.198 11.902 43.1 0L631.074 545.74c11.901-11.901 11.901-31.198 0-43.099L478.693 350.26c-11.902-11.902-31.199-11.902-43.1 0Z"
      fill="currentColor"
    />
  </Icon>
);
