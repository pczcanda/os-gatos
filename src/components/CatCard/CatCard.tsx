import FavoriteIcon from "@mui/icons-material/Favorite";
import { Card, CardActions, CardMedia, IconButton } from "@mui/material";
import { CatCardProps } from "./CatCardProps";
import { favouriteACat } from "../../utils";
import { useState } from "react";

const CatCard: React.FC<CatCardProps> = ({ cat, isFavourite = false }) => {
  /* state */
  const [favourited, setFavourited] = useState<boolean>(isFavourite);

  /* events */
  const handleFavouriting = async () => {
    try {
      if (favourited) {
      } else {
        const favouriteCatDetails = await favouriteACat(cat.id);
        if (favouriteCatDetails.message === "SUCCESS") {
          setFavourited(true);
        }
      }
    } catch (e) {
      setFavourited(false);
    }
  };

  return (
    <Card>
      {cat.url && (
        <CardMedia
          component="img"
          height={240}
          image={cat.url}
          alt={`A cat with id ${cat.id}`}
          data-testid={`cat-${cat.id}`}
        />
      )}
      <CardActions>
        <IconButton aria-label="add to favorites" onClick={handleFavouriting}>
          <FavoriteIcon color={favourited ? "error" : undefined} />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default CatCard;
