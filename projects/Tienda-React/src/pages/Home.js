import Header from "./components/Header";
import Banner from "./components/Banner";
import { ProductList } from "./components/ProductList";
import Subscribe from "./components/Subscribe";
import Footer from "./components/Footer";

function Home() {
  return (
    <div className="App">
      <Header></Header>
      <Banner></Banner>
      <ProductList></ProductList>
      <Subscribe></Subscribe>
      <Footer></Footer>
    </div>
  );
}

export default Home;