import { Warning } from "@mui/icons-material";
import {
  Alert,
  Box,
  Button,
  Container,
  Dialog,
  Grid2 as Grid,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CatUploadPreview from "../../components/CatUploadPreview/CatUploadPreview";
import Loader from "../../components/Loader/Loader";
import { APP_ROUTES, IMAGE_TYPE_RGX } from "../../constants";
import { AppError } from "../../types";
import { uploadNewCat } from "../../utils";
import { uploadFileSx, uploadPreviewSx } from "./UploadPage.styles";

const UploadPage: React.FC<{}> = () => {
  /* state */
  const [fileToUpload, setFileToUpload] = useState<File | null>(null);
  const [uploadingFile, setUploading] = useState<boolean>(false);
  const [errorUploadingFile, setErrorUploadingFile] = useState<
    AppError | undefined
  >();

  /* hooks */
  const navigate = useNavigate();

  /* events */
  const handleSelectFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    setErrorUploadingFile(undefined);
    if (e.target.files !== null) {
      const file = e.target.files[0];

      if (!file.name.match(IMAGE_TYPE_RGX)) {
        setErrorUploadingFile({
          message:
            "Please ensure the image is an accepted image type: JPEG, PNG",
        });
        return;
      }
      setFileToUpload(file);
    }
  };

  const handleUploadFile = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const file = fileToUpload;
      if (!file) {
        throw new Error(
          "There is no file for the cathlete. Please ensure you add one"
        );
      }

      setUploading(true);
      const newCat = new FormData();
      newCat.append("file", file);

      const uploadedImage = await uploadNewCat(newCat);

      setUploading(false);

      navigate(APP_ROUTES.ROOT);
    } catch (e) {
      setUploading(false);

      setErrorUploadingFile({
        message:
          "The committee has not approved this image. Are you sure this is a cathlete?",
      });
    }
  };

  return (
    <>
      <Box className="upload-page">
        <Box my={8}>
          <Container maxWidth="lg">
            <Grid container spacing={4}>
              <Grid size={{ sm: 6 }}>
                <Typography variant="h3">Add a new cathlete</Typography>
              </Grid>
              <Grid size={{ sm: 6 }}>
                <Typography
                  variant="body1"
                  data-testid="upload-page-description"
                >
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
                        Your cathlete is ready to be submitted to the
                        competition
                      </Typography>

                      <Button
                        type="submit"
                        disableTouchRipple
                        size="large"
                        variant="contained"
                        disabled={uploadingFile}
                      >
                        Send your cat to the Gatos
                      </Button>

                      {errorUploadingFile && (
                        <Alert
                          icon={<Warning fontSize="inherit" />}
                          severity="error"
                          sx={{ mt: 4 }}
                        >
                          {errorUploadingFile.message}
                        </Alert>
                      )}
                    </Box>
                  )}
                </Grid>
              </Grid>
            </Box>
          </Container>
        </Box>
      </Box>
      <Dialog open={uploadingFile}>
        <Box sx={{ p: 4 }}>
          <Typography variant="h4" sx={{ mb: 3 }}>
            Uploading cathlete
          </Typography>
          <Loader />
        </Box>
      </Dialog>
    </>
  );
};

export default UploadPage;
