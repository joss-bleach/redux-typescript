import { useState } from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";

// Components
import Loading from "../Loading";
import Repository from "./Repository";

const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState("");
  const { searchRepositories } = useActions();
  const { data, error, loading } = useTypedSelector(
    (state) => state.repositories
  );

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    searchRepositories(term);
    setTerm("");
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 py-6">
          <input
            className="w-full md:w-3/5 h-12 rounded p-4 text-theme-background"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
          <button className="w-full md:w-2/5 bg-theme-button ml-0 md:ml-4 h-12 rounded font-semibold text-theme-background transition hover:bg-theme-button-highlight">
            Search
          </button>
        </div>
      </form>
      <div>
        {error && <p>{error}</p>}
        {loading && <Loading />}
        {!error &&
          !loading &&
          data.map((repository) => <Repository name={repository} />)}
      </div>
    </div>
  );
};

export default RepositoriesList;
