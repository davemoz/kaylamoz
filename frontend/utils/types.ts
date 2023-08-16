export type WorkType = {
  id: number;
  attributes: {
    Title: string;
    Description: string;
    Slug: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    Media: {
      data: [MediaType];
    };
    Category: {
      data: {
        id: number;
        attributes: {
          createdAt: string;
          updatedAt: string;
          publishedAt: string;
          Name: string;
        };
      };
    };
  };
};

export type MediaType = {
  id: number;
  attributes: {
    name: string;
    alternativeText: string;
    caption: string;
    width: number;
    height: number;
    formats: {
      thumbnail: {
        ext: string;
        url: string;
        hash: string;
        mime: string;
        name: string;
        path: string;
        size: number;
        width: number;
        height: number;
      };
    };
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: string;
    provider: string;
    provider_metadata: string;
    createdAt: string;
    updatedAt: string;
  };
};

export type CategoryType = {
  attributes: {
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    Name: string;
  };
};

export type WorkParamsProps = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};
