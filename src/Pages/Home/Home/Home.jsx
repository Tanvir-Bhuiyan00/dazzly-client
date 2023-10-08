import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Collections from "../Collections/Collections";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Dazzly | Home</title>
      </Helmet>
      <Banner />
      <Collections />
    </div>
  );
};

export default Home;
