import { Box, Grid2 as Grid, Snackbar } from "@mui/material";
import { useEffect, useState } from "react";
import { AppError, CatsList, FavouriteCatsList } from "../../types";
import { fetchAllCats, fetchCats } from "../../utils";
import CatCard from "../../components/CatCard/CatCard";

const CatsPage: React.FC<{}> = () => {
  /* state */
  const [catsList, setCatsList] = useState<CatsList>([]);

  const [errorFetchingCatsList, setErrorFetchingCatsList] = useState<
    AppError | undefined
  >();

  /* effects */
  useEffect(() => {
    const fetchCats = async () => {
      try {
        const allCats = await fetchAllCats();

        setCatsList(allCats);
      } catch (e: any) {
        // handle Error
        setErrorFetchingCatsList({
          message: e.message || "Failed to fetch cats!",
        });
      }
    };

    fetchCats();
  }, []);

  /* events */
  const handleErrorFetchingCatsList = () => {
    setErrorFetchingCatsList(undefined);
  };

  return (
    <>
      {errorFetchingCatsList && (
        <Snackbar
          open={!!errorFetchingCatsList.message}
          onClose={handleErrorFetchingCatsList}
          message={errorFetchingCatsList.message}
          color="error"
        />
      )}

      {!errorFetchingCatsList && (
        <Box>
          <h2>Listing all cats</h2>
          <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
            {catsList.map((cat) => {
              return (
                <Grid size={{ xs: 4, sm: 4, md: 3 }} key={`cat-${cat.id}`}>
                  <CatCard cat={cat} />
                </Grid>
              );
            })}
          </Grid>
        </Box>
      )}
    </>
  );
};

export default CatsPage;
