import FavoriteIcon from "@mui/icons-material/Favorite";
import { Card, CardActions, CardMedia, IconButton } from "@mui/material";
import { CatCardProps } from "./CatCardProps";

const CatCard: React.FC<CatCardProps> = ({ cat, isFavourite = false }) => {
  /* events */
  const handleFavouriting = () => {};

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
          <FavoriteIcon color={isFavourite ? "error" : undefined} />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default CatCard;
