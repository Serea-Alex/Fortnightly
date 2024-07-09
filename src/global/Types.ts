export type Articles = {
  status: string;
  totalResults: number;
  articles: Article[];
};

export type Article = {
  source: {id: string; name: string};
  author: string | null;
  title: string;
  description: string | null;
  url: string;
  urlToImage: string | null;
  publishedAt: string;
  content: string;
};

export type ArticleRoute = {
  key: string;
  name: string;
  path?: string | undefined;
  params: {
    article: Article;
  };
};

export type RootStackParamList = {
  FRONT: undefined;
  DRAWER: undefined;
  ARTICLE: {article: Article};
  FULL_ARTICLE: {article: Article};
};
