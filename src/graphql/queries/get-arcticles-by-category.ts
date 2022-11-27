import { gql } from "@apollo/client";

export const GET_ARTICLES_BY_CATEGORY = gql`
  query MyQuery($category: Category!) {
    articles(where: { category: $category }) {
      id
      title
      description
      featuredImage {
        url
      }
      authors {
        id
        name
        biography
        avatar {
          url
        }
      }
    }
  }
`;
