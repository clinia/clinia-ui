import { Icon } from "@clinia-ui/react";

export const BrokenImageIcon = (props: React.ComponentProps<typeof Icon>) => (
  <Icon
    width="1em"
    height="1em"
    viewBox="0 0 1024 1024"
    fill="currentcolor"
    {...props}
  >
    <path d="M938.667 881.939 142.061 85.333l-56.728 56.728 92.938 93.34v529.863c0 44.256 36.209 80.465 80.465 80.465h529.863l92.938 92.938 57.13-56.728ZM258.736 765.264V315.866l275.191 275.191-33.795 42.244-80.466-109.432-120.697 160.93h328.7l80.465 80.465H258.736Zm113.858-563.256-80.465-80.465h529.863c44.256 0 80.466 36.209 80.466 80.465v529.863l-80.466-80.465V202.008H372.594Z" />
  </Icon>
);
