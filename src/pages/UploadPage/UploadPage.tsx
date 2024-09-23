import { Box, Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { uploadNewCat } from "../../utils";

const UploadPage: React.FC<{}> = () => {
  /* state */
  const [fileToUpload, setFileToUpload] = useState<FileList | null>(null);

  /* effects */
  useEffect(() => {
    if (fileToUpload !== null) {
      console.log(`file: ${fileToUpload.item(0)?.name}`);
    }
  }, [fileToUpload]);

  /* events */
  const handleSelectFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFileToUpload(e.target.files);
  };

  const handleUploadFile = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const file = fileToUpload?.item(0);
      if (!file) {
        console.log("file issues..");
        return;
      }

      console.log("uploading..");
      const newCat = new FormData();
      newCat.append("file", file);
      newCat.append("sub_id", "my-user-1");

      const uploadedImage = await uploadNewCat(newCat);

      console.log("uploaded", uploadedImage);
    } catch (e) {
      console.error("upload error", e);
    }
  };

  return (
    <Box>
      <Typography variant="h2">Upload you cat photo</Typography>
      <Typography variant="body1" data-testid="upload-page-description">
        Description for uplad system will go here
      </Typography>

      <Box component="form" onSubmit={handleUploadFile}>
        <Button
          component="label"
          role={undefined}
          variant="contained"
          tabIndex={-1}
        >
          Pick a new image
          <input type="file" onChange={handleSelectFile} multiple />
        </Button>

        <Button type="submit" disabled={!fileToUpload} disableTouchRipple>
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default UploadPage;
