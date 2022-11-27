import { gql } from "@apollo/client";

export const GET_ARTICLE = gql`
query getArticle($id: ID!) {
  article(where: { id: $id }) {
    id
    title
    description
    authors {
      name
      avatar {
        url
      }
    }
  }
}
`;
