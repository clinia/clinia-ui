import { Icon } from "@clinia-ui/react";

export const CustomFieldsEnabledIcon = (
  props: React.ComponentProps<typeof Icon>
) => (
  <Icon
    width="1em"
    height="1em"
    viewBox="0 0 1024 1024"
    fill="currentcolor"
    {...props}
  >
    <path d="M853.334 170.667H170.667c-46.934 0-85.334 38.4-85.334 85.333v512c0 46.933 38.4 85.333 85.334 85.333h682.667c46.933 0 85.333-38.4 85.333-85.333V256c0-46.933-38.4-85.333-85.333-85.333Zm0 597.333H170.667V256h682.667v512ZM256 426.667h85.334V512H256v-85.333Zm0 170.666h341.334v85.334H256v-85.334Zm426.667 0H768v85.334h-85.333v-85.334Zm-256-170.666H768V512H426.667v-85.333Z" />
  </Icon>
);
