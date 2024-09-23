import {
  Box,
  Button,
  Container,
  Grid2 as Grid,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CatUploadPreview from "../../components/CatUploadPreview/CatUploadPreview";
import { APP_ROUTES } from "../../constants";
import { uploadNewCat } from "../../utils";
import {
  pageIntroSx,
  uploadFileSx,
  uploadPreviewSx,
} from "./UploadPage.styles";

const UploadPage: React.FC<{}> = () => {
  /* state */
  const [fileToUpload, setFileToUpload] = useState<File | null>(null);

  /* hooks */
  const navigate = useNavigate();

  /* effects */
  useEffect(() => {
    if (fileToUpload !== null) {
      console.log(`file: ${fileToUpload.name}`);
    }
  }, [fileToUpload]);

  /* values */

  /* events */
  const handleSelectFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.files !== null && setFileToUpload(e.target.files[0]);
  };

  const handleUploadFile = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const file = fileToUpload;
      if (!file) {
        console.log("file issues..");
        return;
      }

      console.log("uploading..");
      const newCat = new FormData();
      newCat.append("file", file);

      const uploadedImage = await uploadNewCat(newCat);

      console.log("uploaded", uploadedImage);

      navigate(APP_ROUTES.ROOT);
    } catch (e) {
      console.error("upload error", e);
    }
  };

  return (
    <Box className="upload-page">
      <Box my={8}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid size={{ sm: 6 }}>
              <Typography variant="h3">Upload your cathlete</Typography>
            </Grid>
            <Grid size={{ sm: 6 }}>
              <Typography variant="body1" data-testid="upload-page-description">
                Ready to enter your next feline Olympian? Upload a picture of
                your new champion—just one, please! Make sure it’s a cat (yes,
                the committee will be checking!). No sneaky dogs, bunnies, or
                ferrets trying to get in on the action—we’re keeping this
                competition strictly paws and whiskers. Let’s see if your new
                recruit has what it takes to climb the podium!
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box className="upload-preview" sx={uploadPreviewSx}>
        <Container maxWidth="lg">
          <Box component="form" onSubmit={handleUploadFile}>
            <Grid container spacing={4}>
              <Grid size={{ md: 6 }}>
                <Box className="upload-preview">
                  <CatUploadPreview catFile={fileToUpload} />
                  <Button
                    component="label"
                    role={undefined}
                    variant="outlined"
                    tabIndex={-1}
                    sx={uploadFileSx}
                  >
                    {fileToUpload ? "Swap image" : "Pick an image"}
                    <input type="file" onChange={handleSelectFile} multiple />
                  </Button>
                </Box>
              </Grid>
              <Grid size={{ md: 6 }}>
                {fileToUpload && (
                  <Box>
                    <Typography variant="body1" sx={{ mb: 4 }}>
                      Your cathlete is ready to be submitted to the competition
                    </Typography>

                    <Button
                      type="submit"
                      disableTouchRipple
                      size="large"
                      variant="contained"
                    >
                      Send your cat to the Gatos
                    </Button>
                  </Box>
                )}
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default UploadPage;
