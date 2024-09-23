import { Box, SxProps, Theme } from "@mui/material";

const loaderSx: SxProps<Theme> = {
  height: "40px",
  aspectRatio: 1.5,
  "--c": "#000 96%,#fff",
  background: `
          radial-gradient(farthest-side at 100% 100%,var(--c)),
          radial-gradient(farthest-side at 0    100%,var(--c)),
          radial-gradient(farthest-side at 100% 0   ,var(--c)),
          radial-gradient(farthest-side at 0    0   ,var(--c))
          `,
  backgroundSize: "33.4% 50%",
  backgroundRepeat: "no-repeat",
  animation: `l9 2s infinite linear`,
  margin: "0 auto",

  "@keyframes l9": {
    "0%": { backgroundPosition: "0 0,50% 0,0 100%,50% 100%" },
    "12.5%": { backgroundPosition: "0 0,100% 0,0 100%,50% 100%" },
    "25%": { backgroundPosition: "50% 0,100% 0,0 100%,50% 100%" },
    "37.5%": { backgroundPosition: "50% 0,100% 0,0 100%,100% 100%" },
    "50%": { backgroundPosition: "50% 0,100% 0,50% 100%,100% 100%" },
    "62.5%": { backgroundPosition: "0 0,100% 0,50% 100%,100% 100%" },
    "75%": { backgroundPosition: "0 0,50% 0,50% 100%,100% 100%" },
    "87.5%": { backgroundPosition: "0 0,50% 0,0 100%,100% 100%" },
    "100%": { backgroundPosition: "0 0,50% 0,0 100%,50% 100%" },
  },
};

const Loader: React.FC<{}> = () => {
  return <Box className="loader" sx={loaderSx} />;
};

export default Loader;
