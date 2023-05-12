import { Icon } from "@clinia-ui/react";

export const ChangeRequestsIcon = (
  props: React.ComponentProps<typeof Icon>
) => (
  <Icon
    width="1em"
    height="1em"
    viewBox="0 0 1024 1024"
    fill="currentcolor"
    {...props}
  >
    <path d="M853.333 85.333H170.666c-46.933 0-84.906 38.4-84.906 85.334l-.427 768L256 768h597.333c46.933 0 85.333-38.4 85.333-85.333v-512c0-46.934-38.4-85.334-85.333-85.334Zm0 597.334H220.586l-49.92 49.92v-561.92h682.667v512ZM256 512h85.333v85.333H256V512Zm0-128h85.333v85.333H256V384Zm0-128h85.333v85.333H256V256Zm170.666 256H640v85.333H426.666V512Zm0-128H768v85.333H426.666V384Zm0-128H768v85.333H426.666V256Z" />
  </Icon>
);
