/* eslint-disable */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** An ISO 8601-encoded datetime */
  ISO8601DateTime: { input: any; output: any; }
};

export type Album = {
  __typename?: 'Album';
  bgColor: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  isWide: Scalars['Boolean']['output'];
  media: Array<Medium>;
  mediaUrl: Scalars['String']['output'];
  name: Scalars['String']['output'];
  onMapsUrl: Scalars['String']['output'];
  siteUrl: Scalars['String']['output'];
  textColor: Scalars['String']['output'];
};

/** AlbumCollection type */
export type AlbumCollection = {
  __typename?: 'AlbumCollection';
  /** A collection of paginated AlbumCollection */
  collection: Array<Album>;
  /** Pagination Metadata for navigating the Pagination */
  metadata: CollectionMetadata;
};

export type CollectionMetadata = {
  __typename?: 'CollectionMetadata';
  /** Current Page of loaded data */
  currentPage: Scalars['Int']['output'];
  /** The number of items per page */
  limitValue: Scalars['Int']['output'];
  /** The total number of items to be paginated */
  totalCount: Scalars['Int']['output'];
  /** The total number of pages in the pagination */
  totalPages: Scalars['Int']['output'];
};

export type HomeAudio = {
  __typename?: 'HomeAudio';
  createdAt: Scalars['ISO8601DateTime']['output'];
  id: Scalars['ID']['output'];
  mediaUrl: Scalars['String']['output'];
  updatedAt: Scalars['ISO8601DateTime']['output'];
};

export type HomeVideo = {
  __typename?: 'HomeVideo';
  createdAt: Scalars['ISO8601DateTime']['output'];
  id: Scalars['ID']['output'];
  mediaUrl: Scalars['String']['output'];
  updatedAt: Scalars['ISO8601DateTime']['output'];
};

export type Industry = {
  __typename?: 'Industry';
  bgColor: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  isWide: Scalars['Boolean']['output'];
  media: Array<Medium>;
  mediaUrl: Scalars['String']['output'];
  name: Scalars['String']['output'];
  onMapsUrl: Scalars['String']['output'];
  siteUrl: Scalars['String']['output'];
  textColor: Scalars['String']['output'];
};

/** IndustryCollection type */
export type IndustryCollection = {
  __typename?: 'IndustryCollection';
  /** A collection of paginated IndustryCollection */
  collection: Array<Industry>;
  /** Pagination Metadata for navigating the Pagination */
  metadata: CollectionMetadata;
};

export type Medium = {
  __typename?: 'Medium';
  content: Scalars['String']['output'];
  contentType: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  mediumableType: Scalars['String']['output'];
};

export type Museum = {
  __typename?: 'Museum';
  bgColor: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  isWide: Scalars['Boolean']['output'];
  media: Array<Medium>;
  mediaUrl: Scalars['String']['output'];
  name: Scalars['String']['output'];
  onMapsUrl: Scalars['String']['output'];
  siteUrl: Scalars['String']['output'];
  textColor: Scalars['String']['output'];
};

/** MuseumCollection type */
export type MuseumCollection = {
  __typename?: 'MuseumCollection';
  /** A collection of paginated MuseumCollection */
  collection: Array<Museum>;
  /** Pagination Metadata for navigating the Pagination */
  metadata: CollectionMetadata;
};

export type Mutation = {
  __typename?: 'Mutation';
};

export type Query = {
  __typename?: 'Query';
  albumsPaginated?: Maybe<AlbumCollection>;
  /** Return home audio */
  homeAudio: HomeAudio;
  /** Return home video */
  homeVideo: HomeVideo;
  industriesPaginated?: Maybe<IndustryCollection>;
  museumsPaginated?: Maybe<MuseumCollection>;
};


export type QueryAlbumsPaginatedArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryIndustriesPaginatedArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryMuseumsPaginatedArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
};
