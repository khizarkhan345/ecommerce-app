export const AddCartProduct = (id, product) => ({
  type: "ADD_CART",
  id,
  product,
});

export const RemoveCartProduct = (id) => ({
  type: "REMOVE_CART",
  id,
});

export const EditCartProduct = (id, updates) => ({
  type: "EDIT_CART",
  id,
  updates,
});
