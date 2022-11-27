import { useQuery } from "@apollo/client";
import { Query } from "@apollo/client/react/components";
import { Avatar, Box, Container, Stack, Typography } from "@mui/material";
import FeatueSVG from "../../assets/research.svg";
import { BottomComponent } from "../../components/bottom";
import { CardArticleComponent } from "../../components/card-article";
import { HeaderComponent } from "../../components/header";
import {
  GET_ARTICLES_BY_CATEGORY,
  GET_ARTICLES_LIST
} from "../../graphql/queries";
import { CategoryEnum, IArticle } from "../../types";

export function HomePage() {
  const { data } = useQuery(GET_ARTICLES_LIST);

  return (
    <>
      <HeaderComponent />

      <Container sx={{ paddingTop: 16 }}>
        <Stack
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Stack minHeight="40vh">
            <Typography variant="h2">RESCADA</Typography>
            <Typography variant="subtitle1">
              A primeira revista científica 100% digital
            </Typography>

            <Typography variant="body1" marginTop={4} maxWidth="80%">
              Aceitamos submissões oriundas de esforços de pesquisa suportado
              por diferentes abordagens. Os textos submetidos devem abordar
              questões contemporâneas de importância regional sem perder de
              vista as articulações com o contexto global. Assim, o objetivo é
              fomentar debates, elaboração de políticas públicas e novas formas
              de gestão alinhadas aos desafios sociais contemporâneos.
            </Typography>
          </Stack>

          <Box width="50vw" sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}>
            <img src={FeatueSVG} alt="test" width="100%" />
          </Box>
        </Stack>

        {/* Fundadores */}
        <Typography marginTop={8} variant="h6" fontWeight="bold">
          Fundadores
        </Typography>
        <Stack direction="row" spacing={2} paddingLeft={1} paddingTop={1}>
          <Stack alignItems="center" justifyContent="center">
            <Avatar
              alt="Thiago Moraes"
              src="https://media-exp1.licdn.com/dms/image/C4D03AQGC9tXYJWNOzg/profile-displayphoto-shrink_200_200/0/1617669061941?e=1674691200&v=beta&t=htoGaYU60n5gF8jFd2wbaexKhRgfkFTE4LT1tQcrBSI"
            />
            <Typography>Thiago M</Typography>
            <Typography variant="caption">Description</Typography>
          </Stack>
          <Stack alignItems="center" justifyContent="center">
            <Avatar
              alt="Luciano Lima Ferreira"
              src="https://media-exp1.licdn.com/dms/image/C4D03AQFZHzPBaBlV1A/profile-displayphoto-shrink_200_200/0/1658810654189?e=1674691200&v=beta&t=Vv1AV5AWfdw3FakN3ei7qgTaRa_rxwilU7p9s45CVA0"
            />
            <Typography>Luciano L</Typography>
            <Typography variant="caption">Description</Typography>
          </Stack>
        </Stack>

        {/* Edição Atual */}
        <Typography marginTop={8} variant="h6" fontWeight="bold">
          Edição Atual
        </Typography>
        <Stack spacing={1} paddingLeft={1} paddingTop={1}>
          <Typography variant="body1" fontWeight="bold">
            v. 1 n. 1 (2023): Edição Especial Inovação Social: Pesquisa,
            Definição e Teorização de Inovação Social
          </Typography>
          <Typography>(Janeiro - Julho)</Typography>
        </Stack>

        {/* Autores na versão atual */}
        <Typography marginTop={8} variant="h6" fontWeight="bold">
          Autores na versão atual
        </Typography>
        <Stack direction="row" paddingTop={1}>
          {data?.authors?.map((author) => (
            <>
              <Stack
                alignItems="center"
                justifyContent="center"
                sx={{ maxWidth: 120 }}
              >
                <Avatar
                  alt={author.name}
                  src={author.avatar.url || "/broken-image.jpg"}
                />
                <Typography maxWidth="80%" textAlign="center">
                  {author.name}
                </Typography>
                <Typography variant="caption">{author.description}</Typography>
              </Stack>
            </>
          ))}
        </Stack>

        <Typography marginTop={8} variant="h6" fontWeight="bold">
          Artigos Teóricos
        </Typography>
        <Stack flexDirection="row">
          <Query
            query={GET_ARTICLES_BY_CATEGORY}
            variables={{ category: CategoryEnum.TheoricalArticles }}
          >
            {({ data }) =>
              data?.articles.map((article: IArticle) => (
                <CardArticleComponent
                  id={article.id}
                  title={article.title}
                  description={article.description}
                  featureImage={article?.featuredImage?.url}
                  authorName={article?.authors[0]?.name}
                  authorImage={article?.authors[0]?.avatar.url}
                />
              ))
            }
          </Query>
        </Stack>

        <Typography marginTop={8} variant="h6" fontWeight="bold">
          Relatório Reflexivo
        </Typography>
        <Stack flexDirection="row">
          <Query
            query={GET_ARTICLES_BY_CATEGORY}
            variables={{ category: CategoryEnum.ReflectiveReport }}
          >
            {({ data }) =>
              data?.articles.map((article: IArticle) => (
                <CardArticleComponent
                  id={article.id}
                  title={article.title}
                  description={article.description}
                  featureImage={article?.featuredImage?.url}
                  authorName={article?.authors[0]?.name}
                  authorImage={article?.authors[0]?.avatar.url}
                />
              ))
            }
          </Query>
        </Stack>
      </Container>
      <BottomComponent />
    </>
  );
}
