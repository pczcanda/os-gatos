import { Box, Grid2 as Grid, Snackbar } from "@mui/material";
import { useEffect, useState } from "react";
import CatCard from "../../components/CatCard/CatCard";
import {
  AppError,
  CatsList,
  CatVotesList,
  FavouriteCatsList,
} from "../../types";
import {
  fetchAllCats,
  fetchAllCatVotes,
  fetchAllFavouriteCats,
} from "../../utils";
import { Link } from "react-router-dom";
import { APP_ROUTES } from "../../constants";

const CatsPage: React.FC<{}> = () => {
  /* state */
  const [catsList, setCatsList] = useState<CatsList>([]);
  const [favouriteCats, setFavouriteCats] = useState<FavouriteCatsList>([]);
  const [catVotes, setCatVotes] = useState<CatVotesList>([]);

  const [errorFetchingCatsData, setErrorFetchingCatsData] = useState<
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
        setErrorFetchingCatsData({
          message: e.message || "Failed to fetch cats!",
        });
      }
    };

    const fetchFavouriteCats = async () => {
      try {
        const allFavouriteCats = await fetchAllFavouriteCats();

        setFavouriteCats(allFavouriteCats);
      } catch (e: any) {
        // handle Error
        setErrorFetchingCatsData({
          message: e.message || "Failed to fetch favourite cats!",
        });
      }
    };

    const fetchCatVotes = async () => {
      try {
        const allCatVotes = await fetchAllCatVotes();

        setCatVotes(allCatVotes);
      } catch (e: any) {
        // handle Error
        setErrorFetchingCatsData({
          message: e.message || "Failed to fetch favourite cats!",
        });
      }
    };

    fetchCats();
    fetchFavouriteCats();
    fetchCatVotes();
  }, []);

  /* events */
  const handleErrorFetchingCatsData = () => {
    setErrorFetchingCatsData(undefined);
  };

  return (
    <>
      {errorFetchingCatsData && (
        <Snackbar
          open={!!errorFetchingCatsData.message}
          onClose={handleErrorFetchingCatsData}
          message={errorFetchingCatsData.message}
          color="error"
        />
      )}

      {!errorFetchingCatsData && (
        <Box>
          <h2>Listing all cats</h2>
          <Link to={APP_ROUTES.UPLOAD}>Add a new cat</Link>

          <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
            {catsList.map((cat) => {
              const favouriteDetails = favouriteCats.find(
                (favCat) => favCat.image_id === cat.id
              );

              const votesForCat = catVotes
                .filter((votedCat) => votedCat.image_id === cat.id)
                .reduce((total, currentVote) => total + currentVote.value, 0);

              return (
                <Grid size={{ xs: 4, sm: 4, md: 3 }} key={`cat-${cat.id}`}>
                  <CatCard
                    cat={cat}
                    favouriteId={favouriteDetails?.id}
                    votesCount={votesForCat}
                  />
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
