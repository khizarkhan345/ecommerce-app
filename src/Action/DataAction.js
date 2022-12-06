export const AddProduct = (product) => ({
  type: "ADD_PRODUCT",
  product,
});

export const AddStock = (id, count) => ({
  type: "ADD_STOCK",
  id,
  count,
});

export const ReduceStock = (id, count) => ({
  type: "REDUCE_STOCK",
  id,
  count,
});
