import Body from "./component/Body/Body";
import Heading from "./component/Heading/Heading";
import Navigasi from "./component/Navbar/Navbar";
import Services from "./component/Services/Services.js";

function App() {
  return (
    <div>
      <div className="navBG">
        <Navigasi />
      </div>
      <div className="myBG">
        <Heading />
      </div>
      <div>
        <Services />
      </div>
      <div>
        <Body />
      </div>
    </div>
  );
}

export default App;
