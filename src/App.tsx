import "./App.scss";
import CardCarousel from "./components/Carousel";
import Header from "./components/header/Header";

interface Dish {
  id: number;
  name_res: string;
  chef: string;
  top_dishes: { dish: string; url: string }[];
}

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <h1>React Carousel with Dish Cards</h1>
      <CardCarousel />
    </div>
  );
};

export default App;
