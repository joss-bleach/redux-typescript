import { Provider } from "react-redux";
import { store } from "../state";

// Components
import RepositoriesList from "./repositories/RepositoriesList";

const App = () => {
  return (
    <Provider store={store}>
      <div className="container mx-auto max-w-prose py-12 px-8">
        <div className="space-y-2">
          <h1 className="text-3xl font-semibold text-theme-headline">
            Search NPM Packages
          </h1>
          <h3 className="text-lg text-theme-paragraph">
            A quick React app using TypeScript and Redux to access the npmjs API
            to search for and display details about npm packages.
            <br />
            <a
              className="text-theme-button transition hover:underline"
              target="_blank"
              rel="noreferrer"
              href="https://github.com/joss-bleach/redux-typescript"
            >
              Click here
            </a>{" "}
            to view the project on GitHub.
          </h3>
        </div>
        <RepositoriesList />
      </div>
    </Provider>
  );
};

export default App;
