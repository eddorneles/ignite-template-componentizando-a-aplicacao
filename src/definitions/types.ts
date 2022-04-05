export type GenreName = 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';

export interface MovieProps {
    imdbID: string;
    Title: string;
    Poster: string;
    Ratings: Array<{
      Source: string;
      Value: string;
    }>;
    Runtime: string;
  }