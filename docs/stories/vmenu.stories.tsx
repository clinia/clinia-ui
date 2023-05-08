import { VerticalMenu, VerticalMenuItemType } from "@clinia-ui/vmenu";
import { CliniaIcon } from "@clinia-ui/icons/CliniaIcon";
import { ClinicIcon } from "@clinia-ui/icons/ClinicIcon";
import { SettingsIcon } from "@clinia-ui/icons/SettingsIcon";
import { Box, IconButton } from "@clinia-ui/react";
import { useState } from "react";

export default {
  title: "Vertical Menu",
};

export const Default = () => {
  const [selected, setSelected] = useState<string[]>([]);

  const items: VerticalMenuItemType[] = [
    {
      key: "clinia",
      icon: (
        <IconButton
          variant="unstyled"
          aria-label="clinia"
          icon={<CliniaIcon />}
          onClick={() => setSelected(["clinia"])}
        />
      ),
      title: "Clinia",
    },
    {
      key: "clinic",
      icon: (
        <IconButton
          variant="unstyled"
          aria-label="clinic"
          icon={<ClinicIcon />}
          onClick={() => setSelected(["clinic"])}
        />
      ),
      title: "Clinic",
    },
    {
      key: "settings",
      icon: (
        <IconButton
          variant="unstyled"
          aria-label="settings"
          icon={<SettingsIcon />}
          onClick={() => setSelected(["settings"])}
        />
      ),
      title: "Settings",
    },
  ];
  return (
    <Box width="50px">
      <VerticalMenu items={items} selectedKeys={selected} />
    </Box>
  );
};
