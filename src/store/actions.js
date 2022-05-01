export const getProducts = () => {
  return {
    type: "apiCallBegan",
    payload: {
      url: "/api/products",
      onSuccess: "products/apiCallSuccessiful",
      onError: "apiCallFailed",
    },
  };
};

export const getLocations = () => {
  return {
    type: "getLocation",
    payload: {
      url: "api/deliverylocations",
      onSuccess: "location/apiCallSuccessiful",
      onError: "apiCallFailed",
    },
  };
};

export const getCartDetails = (data) => {
  return {
    type: "cart/cartDetails",
    payload: data,
  };
};
