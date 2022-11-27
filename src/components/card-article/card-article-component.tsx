import {
  Avatar,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Stack,
  Typography
} from "@mui/material";
import { useNavigate } from "react-router-dom";

interface ICardArticleComponent {
  id: string;
  title: string;
  featureImage: string;
  description: string;
  authorName: string;
  authorImage?: string;
}

export function CardArticleComponent({
  id,
  title,
  featureImage,
  description,
  authorImage,
  authorName,
}: ICardArticleComponent) {
  const navigate = useNavigate();
  const navigateToArticleDetails = () => navigate(`/article/${id}`);

  return (
    <Card sx={{ maxWidth: 345, marginRight: 2, marginTop: 2 }} onClick={navigateToArticleDetails}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={featureImage}
          alt="green iguana"
        />
        <CardContent sx={{ minHeight: 230 }}>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description.slice(0, 100)}(...)
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Stack alignItems="center" justifyContent="center" flexDirection="row">
          <Avatar
            alt={authorName}
            src={authorImage || "/broken-image.jpg"}
            sx={{ marginRight: 1 }}
          />
          <Typography textAlign="center">{authorName}</Typography>
        </Stack>
      </CardActions>
    </Card>
  );
}
