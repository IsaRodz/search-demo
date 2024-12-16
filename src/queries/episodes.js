import { gql } from "@apollo/client";

export const GET_EPISODES = gql`
  query getEpisodes($name: String) {
    episodes(filter: { name: $name }) {
      results {
        id
        name
        air_date
        episode
        characters {
          id
          name
          status
          species
          gender
          image
        }
      }
    }
  }
`;
