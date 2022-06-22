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

export const getCartDetails = () => {
  console.log("clll");
  return {
    type: "getCart",
    payload: {
      url: "/api/cart",
      onSuccess: "cart/apiCallSuccessiful",
      onError: "apiCallFailed",
    },
  };
};
export const getUserInfo = () => {
  return {
    type: "getUser",
    payload: {
      url: "/api/users",
      onSuccess: "user/userInformation",
      onError: "apiCallFailed",
    },
  };
};
