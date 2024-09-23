import { Box, Typography } from "@mui/material";

const UploadPage: React.FC<{}> = () => {
  return (
    <Box>
      <Typography variant="h2">Upload you cat photo</Typography>
      <Typography variant="body1" data-testid="upload-page-description">
        Description for uplad system will go here
      </Typography>
    </Box>
  );
};

export default UploadPage;
