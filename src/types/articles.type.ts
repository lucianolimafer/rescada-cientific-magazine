import { IAuthor } from "./author.type";

export type IArticle = {
  id: string;
  title: string;
  description: string;
  authors: IAuthor[];
  featuredImage: {
    url: string;
  }
}
