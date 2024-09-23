import { Box, Snackbar } from "@mui/material";
import { useEffect, useState } from "react";
import { AppError, CatsList } from "../../types";
import { fetchCats } from "../../utils";

const CatsPage: React.FC<{}> = () => {
  /* state */
  const [catsList, setCatsList] = useState<CatsList>([]);
  const [errorFetchingCatsList, setErrorFetchingCatsList] = useState<
    AppError | undefined
  >();

  /* effects */
  useEffect(() => {
    const fetchCakes = async () => {
      try {
        const allCats = await fetchCats();

        setCatsList(allCats);
      } catch (e: any) {
        // handle Error
        setErrorFetchingCatsList({
          message: e.message || "Failed to fetch cats!",
        });
      }
    };

    fetchCakes();
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
          <Box component="ul">
            {catsList.map((cat) => {
              return (
                <Box
                  component="li"
                  role="listitem"
                  mb={2}
                  key={`cat-${cat.id}`}
                >
                  <img src={cat.url} />
                </Box>
              );
            })}
          </Box>
        </Box>
      )}
    </>
  );
};

export default CatsPage;
