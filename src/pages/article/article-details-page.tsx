import { useQuery } from "@apollo/client";
import { Avatar, Container, Stack, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { HeaderComponent } from "../../components/header";
import { GET_ARTICLE } from "../../graphql/queries";

export function ArticleDetailsPage() {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_ARTICLE, {
    variables: { id },
  });

  return (
    <>
      <HeaderComponent />
      <Container sx={{ paddingTop: 16 }}>
        <Stack flexDirection="row">
          <Avatar
            src={data?.article?.authors[0]?.avatar?.url}
            variant="rounded"
            sx={{ width: 100, height: 100, marginRight: 1 }}
          />

          <Stack>
            <Typography variant="h4">{data?.article?.title}</Typography>
            <Typography variant="subtitle1" fontWeight="bold">
              {data?.article?.authors[0]?.name}
            </Typography>
          </Stack>

        </Stack>
        <Typography variant="body1" marginTop={1} textAlign="justify">
          {data?.article?.description}
        </Typography>
      </Container>
    </>
  );
}
