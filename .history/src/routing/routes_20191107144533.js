import ProductsView from "../components/views/ProductsView/ProductsView";
import ProductDetailView from "../components/views/ProductDetailView/ProductDetailView";

const routes = [
  {
    path: "/",
    id: 1,
    view: "ProductsView",
    Component: ProductsView
  },
  {
    path: "/products/:id",
    id: 2,
    view: "ProductDetailView",
    Component: ProductDetailView
  }
];

export default routes;
