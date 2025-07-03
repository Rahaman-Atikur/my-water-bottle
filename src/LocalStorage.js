const getCartFromLocalStorage = () => {
  const storedCartString = localStorage.getItem("cart");
  if (storedCartString) {
    const storedCart = JSON.parse(storedCartString);
    return storedCart;
  } else {
    return [];
  }
};
const addItemToLocalStorage = (id) => {
  const cart = getCartFromLocalStorage();
  const newCart = [...cart, id];
  saveCartToLocalStorage(newCart);
};

const saveCartToLocalStorage = (cart) => {
  const cartStringified = JSON.stringify(cart);
  localStorage.setItem("cart", cartStringified);
};

const removeFromLocalStorage = (id) => {
  const storedCart = getCartFromLocalStorage();
  const remainingCart = storedCart.filter((storedId) => storedId != id);
};

export {
  getCartFromLocalStorage as getStoreCart,
  addItemToLocalStorage as addIdToStoreCart,
  removeFromLocalStorage as removeFromCart
};
