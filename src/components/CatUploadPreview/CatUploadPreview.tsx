import { Card, CardActions, CardContent, CardMedia } from "@mui/material";
import { useMemo } from "react";
import { CatUploadPreviewProps } from "./CatUploadPreviewProps";

const CatUploadPreview: React.FC<CatUploadPreviewProps> = ({ catFile }) => {
  /* values */
  const filePreview = useMemo(
    () =>
      catFile
        ? URL.createObjectURL(catFile)
        : "https://placehold.co/600x400?text=Please%20select%20an%20image",
    [catFile]
  );

  return (
    <CardMedia
      component="img"
      width={"100%"}
      image={filePreview}
      alt={`Preview of new cat`}
    />
  );
};

export default CatUploadPreview;
