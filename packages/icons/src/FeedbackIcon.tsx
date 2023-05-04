import { Icon } from "@clinia-ui/react";

export const FeedbackIcon = (props: React.ComponentProps<typeof Icon>) => (
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
      d="M853.333 170.667H170.667v512h682.666v-512ZM170.667 85.333c-47.128 0-85.334 38.205-85.334 85.334v768.001L256 768.001l-.001-.001h597.334c47.129 0 85.334-38.205 85.334-85.333v-512c0-47.129-38.205-85.334-85.334-85.334H170.667Zm298.416 172.671a2 2 0 0 1 2-2h81.334a2 2 0 0 1 2 2v209.333a2 2 0 0 1-2 2h-81.334a2 2 0 0 1-2-2V258.004Zm85.334 296.669c0 23.564-19.103 42.667-42.667 42.667s-42.667-19.103-42.667-42.667 19.103-42.666 42.667-42.666 42.667 19.102 42.667 42.666Z"
    />
  </Icon>
);
