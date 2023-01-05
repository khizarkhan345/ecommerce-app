const DataReducerDefaultState = [];

export default (state = DataReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      if (state.length === 0) {
        return [...state, ...action.product];
      } else {
        return state;
      }
    case "REDUCE_STOCK":
      return state.map((product) => {
        if (product.id === action.id) {
          const product1 = { ...product };
          product1.stock = product1.stock - action.count;
          return product1;
        } else {
          return product;
        }
      });
    case "ADD_STOCK":
      return state.map((product) => {
        if (product.id === action.id) {
          const product1 = { ...product };
          product1.stock = product1.stock + action.count;
          return product1;
        } else {
          return product;
        }
      });
    default:
      return state;
  }
};
