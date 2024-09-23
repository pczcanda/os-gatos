import {
  Box,
  Button,
  Container,
  Grid2 as Grid,
  Snackbar,
  Typography,
} from "@mui/material";
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
import { Link, useNavigate } from "react-router-dom";
import { APP_ROUTES } from "../../constants";
import AddToPhotosIcon from "@mui/icons-material/AddToPhotos";

const CatsPage: React.FC<{}> = () => {
  /* state */
  const [catsList, setCatsList] = useState<CatsList>([]);
  const [favouriteCats, setFavouriteCats] = useState<FavouriteCatsList>([]);
  const [catVotes, setCatVotes] = useState<CatVotesList>([]);

  const [errorFetchingCatsData, setErrorFetchingCatsData] = useState<
    AppError | undefined
  >();

  /* hooks */
  const navigate = useNavigate();

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
  const handleNavigateToUpload = () => {
    navigate(APP_ROUTES.UPLOAD);
  };

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
          <Container component="main" className="main" maxWidth="lg">
            <Box my={8}>
              <Grid container spacing={4}>
                <Grid size={{ sm: 6 }}>
                  <Typography variant="h3">
                    Gatos - The cats Olympics
                  </Typography>
                </Grid>
                <Grid size={{ sm: 6 }}>
                  <Typography variant="body1" sx={{ mb: 4 }}>
                    Welcome to the Cat Olympics, where your feline squad is
                    already breaking records! Sir Whiskers is winning gold in
                    synchronized napping, while Fluffy McZoomies dominates the
                    100-meter dash around the living room. But the competition
                    is fierce, and the podium awaits new contenders. Just click
                    the button below to add more elite athletes to your team!
                  </Typography>

                  <Button
                    endIcon={<AddToPhotosIcon />}
                    onClick={handleNavigateToUpload}
                    variant="contained"
                  >
                    Add a new cathlete
                  </Button>
                </Grid>
              </Grid>
            </Box>

            <Box my={8}>
              <Grid container spacing={3} columns={{ xs: 4, sm: 8, md: 12 }}>
                {catsList.map((cat) => {
                  const favouriteDetails = favouriteCats.find(
                    (favCat) => favCat.image_id === cat.id
                  );

                  const votesForCat = catVotes
                    .filter((votedCat) => votedCat.image_id === cat.id)
                    .reduce(
                      (total, currentVote) => total + currentVote.value,
                      0
                    );

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
          </Container>
        </Box>
      )}
    </>
  );
};

export default CatsPage;
