import {
  Products,
  Product,
} from "~/entities/product";

type State = {
  products: Products;
  userProducts: Products;
};

const state = (): State => ({
  products: [],
  userProducts: [],
});

const mutations = {
  assignProducts(state: State, products: Products) {
    state.products = products;
  },
  addUserProduct(state: State, product: Product) {
    state.userProducts.push(product);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
};
