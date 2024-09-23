import { Card, CardMedia } from "@mui/material";
import { CatCardProps } from "./CatCardProps";

const CatCard: React.FC<CatCardProps> = ({ cat }) => {
  return (
    <Card>
      {cat.url && (
        <CardMedia
          component="img"
          height={240}
          image={cat.url}
          alt={`A cat with id ${cat.id}`}
        />
      )}
    </Card>
  );
};

export default CatCard;
