import "./App.css";
import "./assets/fonts.css";
import firstCardImage from "./assets/body1_15a3_9.png";
import secondCardImage from "./assets/body2_5160_10.png";
import thirdCardImage from "./assets/body3_fa53_11.png";
import fourthCardImage from "./assets/body4_b846_12.png";
import footerEdge from "./assets/footer-edge_b3e5_16.png";
import Logo from "./components/Logo/Logo";
import Box from "./components/Box/Box";
import Button from "./components/MainButton/Button";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <div className="section_headline flex justify-center py-4">
        <Logo size="big" />
      </div>
      <div className="section_content">
        <div className="header-main-wrapper w-4/5 mx-auto mb-4">
          <h1 className="header-main ff-raleway font-extrabold text-2xl text-center">
            New Keto Routine Speeds Your Metabolism to Ketosis. Take our quick 1
            minute quiz to see if it would work for you?
          </h1>
        </div>
        <div className="main-box-wrapper mt-5 mx-auto">
          <Box image={firstCardImage} />
          <Box image={secondCardImage} />
          <Box image={thirdCardImage} />
          <Box image={fourthCardImage} />
        </div>
        <Button type="main" label="take the quiz now" />
      </div>
      <div
        className="divider-footer"
        style={{ backgroundImage: `url(${footerEdge})` }}
      ></div>
      <Footer />
    </div>
  );
}

export default App;
