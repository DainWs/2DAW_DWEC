import Header from "./components/Header";
import { ProductList } from "./components/ProductList";
import Subscribe from "./components/Subscribe";
import Footer from "./components/Footer";

function Carrito() {
  return (
    <div className="App">
      <Header></Header>
      <ProductList></ProductList>
      <Subscribe></Subscribe>
      <Footer></Footer>
    </div>
  );
}

export default Carrito;