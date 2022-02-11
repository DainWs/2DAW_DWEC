import Banner from "./components/Banner";
import { ProductList } from "./components/ProductList";
import Subscribe from "./components/Subscribe";

function HomePage() {
  return (
    <div className="App">
      <Banner></Banner>
      <ProductList></ProductList>
      <Subscribe></Subscribe>
    </div>
  );
}

export default HomePage;