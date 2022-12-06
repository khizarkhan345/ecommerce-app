export const AddCartProduct = (product) => ({
  type: "ADD_CART",
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
