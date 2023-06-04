import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import ChemicalCard from "../components/ChemicalCard/ChemicalCard";
import {fetchChemicals} from "../routes/chemicals";
import { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar/SearchBar";

interface IHomeProps {}

interface IChemical {
  id: number;
  name: string;
  image: string;
  description: string;
}

const Home = (props: IHomeProps) => {
  const { data: chemicals, status } = useQuery<IChemical[]>("chemicals", fetchChemicals);
  const [search, setSearch] = useState<string>("");
  const [searchResults, setSearchResults] = useState<IChemical[]>([]);

  // Live Search
  useEffect(() => {
    const performSearch = () => {
      if (chemicals && search.length > 0) {
        setSearchResults(
          chemicals.filter((chemical) =>
            chemical.name.search(new RegExp(search, "i")) !== -1
          )
        );
      } else {
        setSearchResults([]);
      }
    }

    performSearch();

  }, [search]);

  const handleSearchChange = (e: any) => {
    setSearch(e.target.value);
  }

  const ChemicalGridItem = (chemical: IChemical) => (
    <>
      <div key={chemical.id} className="h-[28rem] md:h-[24rem] mx-auto">
        <Link to={`chemicals/${chemical.id}`} state={{id: chemical.id}}>
          <ChemicalCard
            name={chemical.name}
            image={chemical.image}
            description={chemical.description}
          />
        </Link>
      </div>
    </>
  );

  interface IChemicalGridProps {
    chemicals: IChemical[];
  }

  const ChemicalsGrid = ({chemicals}: IChemicalGridProps) => {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 lg:gap-4 p-2 ">
        {chemicals && chemicals.length > 0 && chemicals.map(ChemicalGridItem)}
      </div>
    );
  };

  return (
    <main className="flex flex-col gap-4 p-2 w-full min-h-screen bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400">
      <h1 className="text-4xl font-semibold text-center">Chemicals Store</h1>

      {/* Search Bar */}
      <div className="w-full h-[3rem]">
        <SearchBar value={search} onChange={handleSearchChange} placeholder="Search" />
      </div>

      {/* Chemicals Grid -> State Wise Dynamic Loading */}
      <div className="w-full min-h-[24rem] border-2 rounded-lg">
        {/* Loading State */}
        {status === "loading" && (
          <h1 className="w-full h-full">Loading Chemicals from our lab ...</h1>
        )}

        {/* Error State */}
        {status === "error" && (
          <h1 className="w-full h-full">Something went wrong!</h1>
        )}

        {/* Success State */}
        {status === "success" && <ChemicalsGrid chemicals={searchResults.length === 0 ? chemicals : searchResults} />}
      </div>
    </main>
  );
};

export default Home;
