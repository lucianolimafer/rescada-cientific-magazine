import { gql } from "@apollo/client";

export const GET_ARTICLES_LIST = gql`
  query Assets {
    articles {
      id
      title
      description
      featuredImage {
        url
      }
      authors {
        name
        avatar {
          url
        }
      }
    }
  }
`;
