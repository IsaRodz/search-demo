import { useLazyQuery } from "@apollo/client";
import SearchResults from "./components/search-results";
import Searchbar from "./components/searchbar";
import { GET_CHARACTERS } from "./queries/characters";

function App() {
  const [searchQuery, { loading, data, error }] = useLazyQuery(GET_CHARACTERS);

  const handleSearch = (searchValue) => {
    searchQuery({ variables: { name: searchValue } });
  };

  return (
    <div className="container mt-4">
      <h1>React + Bootstrap + GraphQL search</h1>
      <Searchbar onSearch={handleSearch} />
      {loading && <p>Loading...</p>}
      {error && <p>Oops! Something went wrong...</p>}
      {data && <SearchResults data={data.characters.results} />}
    </div>
  );
}

export default App;
