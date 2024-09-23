import { ThumbDown, ThumbUp } from "@mui/icons-material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Card, CardActions, CardMedia, IconButton } from "@mui/material";
import { useState } from "react";
import { favouriteACat, unfavouriteACat, voteCatUp } from "../../utils";
import { CatCardProps } from "./CatCardProps";

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

  const handleVoteUp = async () => {
    try {
      const voteCatUpResponse = await voteCatUp(cat.id);
      if (voteCatUpResponse.message === "SUCCESS") {
        // setFavId(favouriteCatDetails.id);
      }
    } catch (e) {}
  };

  const handleVoteDown = async () => {
    try {
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
        <IconButton aria-label="vote up" onClick={handleVoteUp}>
          <ThumbUp />
        </IconButton>
        <IconButton aria-label="vote down" onClick={handleVoteDown}>
          <ThumbDown />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default CatCard;
