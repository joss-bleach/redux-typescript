import { Provider } from "react-redux";
import { store } from "../state";

// Components
import RepositoriesList from "./repositories/RepositoriesList";

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Search NPM Packages</h1>
        <RepositoriesList />
      </div>
    </Provider>
  );
};

export default App;
