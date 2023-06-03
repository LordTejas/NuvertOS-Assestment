import { Link } from "react-router-dom";

interface IHomeProps {}

const Home = (props: IHomeProps) => {
  return (
    <main>
      <h1 className="text-4xl font-semibold text-center">Home</h1>

      <Link to='chemicals/1' state={{id: 2}}>
        <h1 className="">Click</h1>
      </Link>
    </main>
  );
};

export default Home;
