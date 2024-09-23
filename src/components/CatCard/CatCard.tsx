import FavoriteIcon from "@mui/icons-material/Favorite";
import { Card, CardActions, CardMedia, IconButton } from "@mui/material";
import { CatCardProps } from "./CatCardProps";
import { favouriteACat, unfavouriteACat } from "../../utils";
import { useState } from "react";

const CatCard: React.FC<CatCardProps> = ({ cat, favouriteId = undefined }) => {
  /* state */
  const [favId, setFavId] = useState<string | undefined>(favouriteId);

  /* events */
  const handleFavouriting = async () => {
    try {
      if (favId !== undefined) {
        const favouriteCatDetails = await unfavouriteACat(favId);

        if (favouriteCatDetails.message === "SUCCESS") {
          setFavId(undefined);
        }
      } else {
        const favouriteCatDetails = await favouriteACat(cat.id);
        if (favouriteCatDetails.message === "SUCCESS") {
          setFavId(favouriteCatDetails.id);
        }
      }
    } catch (e) {}
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
          <FavoriteIcon color={!!favId ? "error" : undefined} />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default CatCard;
