import React from "react";
import { CliniaIcon } from "@clinia-ui/icons/CliniaIcon";
import { AccessibilityIcon } from "@clinia-ui/icons/AccessibilityIcon";

export default {
  title: "Icons",
};

const props = {
  color: "primary.main",
  boxSize: "30px",
};

export const CliniaIcon_ = () => <CliniaIcon {...props} />;

export const AccessibilityIcon_ = () => <AccessibilityIcon {...props} />;
