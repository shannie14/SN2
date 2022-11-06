import { gql } from "@apollo/client";

export const QUERY_EPISODES = gql`
  query getEpisodes {
    episodes {
      _id
      series
      titles
      talent
      p1
      p2
      p3
      p4
      p5
    }
  }
`;
