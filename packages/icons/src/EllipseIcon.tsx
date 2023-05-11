import { Icon } from "@clinia-ui/react";

export const EllipseIcon = (props: React.ComponentProps<typeof Icon>) => (
  <Icon
    width="1em"
    height="1em"
    viewBox="0 0 1024 1024"
    stroke="currentcolor"
    fill="none"
    {...props}
  >
    <circle cx="512" cy="512" r="300" strokeWidth="175" />
  </Icon>
);
