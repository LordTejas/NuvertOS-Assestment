import { useLocation } from "react-router-dom";
import { fetchChemicalById } from "../routes/chemicals";
import { useQuery } from "react-query";
interface IChemicalDetailPageProps {}

const ChemicalDetailPage = (props: IChemicalDetailPageProps) => {
  const location = useLocation();
  const { data: chemical, status } = useQuery("chemical", () =>
    fetchChemicalById(location.state.id === undefined ? -1 : location.state.id)
  );

  const LoadingState = () => {
    return (
      <div className="flex flex-col justify-between gap-2 p-4 md:p-6 lg:p-8">
        {/* Header */}
        <div className="bg-gradient-to-r from-orange-300  to-red-600 bg-clip-text text-transparent text-justify">
          <h1>Loading ...</h1>
        </div>

        {/* Image */}
        <div className="w-full h-[18rem] md:h-[22rem] lg:h-[28rem] bg-white overflow-hidden rounded-lg">
          <img
            src="https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png"
            alt="placeholder"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Description */}
        <div className="w-full min-h-[6rem] text-white text-lg md:text-xl lg:text-2xl font-normal">
          <h3 className="text-4xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent text-justify">
            Description
          </h3>

          <p>Loading ...</p>
        </div>
      </div>
    );
  };

  const SuccessState = () => {
    return (
      <div className="flex flex-col justify-between gap-2 p-4 md:p-6 lg:p-8">
        {/* Header */}
        <div className="bg-gradient-to-r from-orange-300  to-red-600 bg-clip-text text-transparent text-justify">
          <h1>{chemical.name}</h1>
        </div>

        {/* Image */}
        <div className="w-full h-[18rem] md:h-[22rem] lg:h-[28rem] bg-white overflow-hidden rounded-lg">
          <img
            src={chemical.image}
            alt={chemical.name}
            className="w-full h-full object-contain"
          />
        </div>

        {/* Description */}
        <div className="w-full min-h-[6rem] text-white text-lg md:text-xl lg:text-2xl font-normal">
          <h3 className="text-4xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent text-justify">
            Description
          </h3>

          <p>{chemical.description}</p>
        </div>
      </div>
    );
  };

  const ErrorState = () => {
    return (
      <div className="flex flex-col justify-between gap-2 p-4 md:p-6 lg:p-8">
        <h1 className="text-center"> Something went wrong! </h1>
      </div>
    );
  };

  return (
    <main>
      <section className="w-full min-h-[24rem] text-4xl lg:text-6xl font-bold text-white bg-gray-800">
        {/* Loading Status */}
        {status === "loading" && <LoadingState />}

        {/* Success Status */}
        {status === "success" && <SuccessState />}

        {/* Error State */}
        {status === "error" && <ErrorState />}
      </section>
    </main>
  );
};

export default ChemicalDetailPage;
