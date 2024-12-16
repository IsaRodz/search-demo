import { gql } from "@apollo/client";

export const GET_CHARACTERS = gql`
  query getCharacters($name: String) {
    characters(filter: { name: $name }) {
      info {
        count
      }
      results {
        id
        name
        status
        species
        gender
        image
      }
    }
  }
`;
