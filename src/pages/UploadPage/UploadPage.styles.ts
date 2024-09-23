import { SxProps } from "@mui/material";
import { Theme } from "@mui/system";

export const uploadFileSx: SxProps<Theme> = {
  mt: 4,

  "& input": {
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  },
};

export const uploadPreviewSx: SxProps<Theme> = {
  backgroundColor: "#FAFAFA",
  p: 8,
};
