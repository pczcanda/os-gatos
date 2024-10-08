import { ThumbDown, ThumbUp } from "@mui/icons-material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  IconButton,
} from "@mui/material";
import { useState } from "react";
import {
  favouriteACat,
  unfavouriteACat,
  voteCatDown,
  voteCatUp,
} from "../../utils";
import { CatCardProps } from "./CatCardProps";

const CatCard: React.FC<CatCardProps> = ({
  cat,
  favouriteId = undefined,
  votesCount = 0,
}) => {
  /* state */
  const [favId, setFavId] = useState<string | undefined>(favouriteId);
  const [votes, setVotes] = useState<number>(votesCount);

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
    } catch (e) {
      console.error("error trying to handle favouriting cat"); // This error would need to be displayed on page
    }
  };

  const handleVoteUp = async () => {
    try {
      const voteCatUpResponse = await voteCatUp(cat.id);
      if (voteCatUpResponse.message === "SUCCESS") {
        setVotes((currentVotes) => currentVotes + 1);
        console.error("error trying to handle voting the cat up"); // This error would need to be displayed on page
      }
    } catch (e) {}
  };

  const handleVoteDown = async () => {
    try {
      const voteCatUpResponse = await voteCatDown(cat.id);
      if (voteCatUpResponse.message === "SUCCESS") {
        setVotes((currentVotes) => currentVotes - 1);
      }
    } catch (e) {
      console.error("error trying to handle voting the cat down"); // This error would need to be displayed on page
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
      <CardContent>
        <Chip label={`Score: ${votes}`} data-testid="cat-votes" />
      </CardContent>
      <CardActions>
        <IconButton aria-label="add to favorites" onClick={handleFavouriting}>
          <FavoriteIcon
            color={!!favId ? "error" : undefined}
            data-testid={!!favId ? "favourite-cat" : "unfavourite-cat"}
          />
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
