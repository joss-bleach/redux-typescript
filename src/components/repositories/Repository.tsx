import { FaNpm, FaGithub } from "react-icons/fa";

type RepositoryType = {
  name: string;
  version: string;
  description: string;
  npm: string;
  github: string;
  publisher: string;
};

interface RepositoryProps {
  repository: RepositoryType;
}

const Repository: React.FC<RepositoryProps> = ({ repository }) => {
  return (
    <div className="w-full p-4 bg-theme-card rounded">
      <div className="flex flex-row justify-between items-center">
        <h3 className="font-semibold">{repository.name}</h3>
        <h5 className="text-xs font-semibold tracking-wide text-theme-card-tertiary">
          {repository.version}
        </h5>
      </div>
      <h2 className="text-sm">{repository.description}</h2>
      <div className="flex flex-row justify-between items-center pt-2">
        <h5 className="text-xs font-semibold tracking-wide text-theme-card-tertiary">
          Published by: {repository.publisher}
        </h5>
        <ul className="flex flex-row space-x-2">
          <li className="font-semibold text-theme-button transition hover:text-theme-button-highlight">
            <a href={repository.npm} rel="noreferrer" target="_blank">
              <FaNpm />
            </a>
          </li>
          <li className="font-semibold text-theme-button transition hover:text-theme-button-highlight">
            <a href={repository.github} rel="noreferrer" target="_blank">
              <FaGithub />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Repository;
