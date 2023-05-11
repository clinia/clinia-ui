import { Icon } from "@clinia-ui/react";

export const CliniaIcon = (props: React.ComponentProps<typeof Icon>) => (
  <Icon
    width="1em"
    height="1em"
    viewBox="0 0 1024 1024"
    fill="currentcolor"
    {...props}
  >
    <path d="M512 284.63V13.7456C512 6.25569 505.795 0.284014 498.307 0.486444C221.886 7.70643 0 234.191 0 512.465C0 790.738 221.886 1017.22 498.307 1024.48C505.795 1024.68 512 1018.71 512 1011.22V740.333C512 733.281 506.469 727.479 499.42 727.074C386.606 720.562 297.129 626.972 297.129 512.465C297.129 397.957 386.606 304.401 499.42 297.855C506.469 297.451 512 291.681 512 284.596V284.63Z" />
    <path d="M1024 511.656C1023.93 467.998 988.25 432.776 944.642 432.776H602.218L818.944 215.973C853.547 181.358 848.994 123.801 809.163 95.3592C808.725 95.0555 808.286 94.7181 807.848 94.4145C776.449 72.1135 733.447 76.0946 706.197 103.321L515.879 293.706C513.383 296.203 512 299.577 512 303.086V721.845C512 725.354 513.383 728.728 515.879 731.224L706.197 921.609C733.414 948.836 776.415 952.817 807.848 930.516C808.286 930.212 808.725 929.909 809.163 929.571C848.994 901.13 853.547 843.573 818.944 808.957L602.218 592.155H944.642C988.284 592.155 1023.93 556.932 1024 513.275C1024 513.005 1024 512.735 1024 512.465C1024 512.195 1024 511.926 1024 511.656V511.656Z" />
  </Icon>
);