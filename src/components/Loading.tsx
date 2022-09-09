import { FaSpinner } from "react-icons/fa";

const Loading: React.FC = () => {
  return (
    <div className="w-full py-6 flex flex-row justify-center">
      <FaSpinner className="text-4xl animate-spin font-semibold text-theme-headline" />
    </div>
  );
};

export default Loading;
