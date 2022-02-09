import Header from "./pages/components/Header";
import Banner from "./pages/components/Banner";
import { ProductList } from "./pages/components/ProductList";
import Subscribe from "./pages/components/Subscribe";
import Footer from "./pages/components/Footer";

function App() {
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

export default App;
