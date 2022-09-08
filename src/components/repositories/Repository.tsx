interface RepositoryProps {
  name: string;
}

const Repository: React.FC<RepositoryProps> = ({ name }) => {
  return (
    <div>
      <h1>{name}</h1>
    </div>
  );
};

export default Repository;
