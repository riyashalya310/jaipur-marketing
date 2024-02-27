import MyCarousel from "../Carousel";
import ReactContext from "../Context";
import Header from "../Header";
import "./index.css";

const Home = () => (
  <ReactContext.Consumer>
    {(value) => {
      const { name } = value;
      return (
        <>
          <Header />
          <div className="background">
            <h1>Hi {name}!</h1>
            <MyCarousel />
            <div>
              <ul></ul>
              <h1>What do you want to learn today {name}</h1>
            </div>
          </div>
        </>
      );
    }}
  </ReactContext.Consumer>
);
export default Home;
