import ProductDetail from "./components/ProductDetail";
import Subscribe from "./components/Subscribe";
import { useParams } from "react-router-dom";

function ProductPage() {
  let { productId } = useParams();

  return (
    <div className="App">
      <ProductDetail productId={productId}></ProductDetail>
      <Subscribe></Subscribe>
    </div>
  );
}

export default ProductPage;