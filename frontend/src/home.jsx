
import Landing1 from "./landing1";
import Contact from "./contact";
import Trendbooks from "./trendbook";
import Otherbooks from "./otherbooks";
import Reviews from "./reviews";
import Body from "./body";
import National from "./national";

const Home = () => {
  return (
    <div>
        <Landing1/>
        <Trendbooks/>
        <National/>
        <Body/>
        <Otherbooks/>
        <Reviews/>
        <Contact/>
    </div>
  );
}

export default Home;
