export const act = (item) => {
  return {
    type: "Add-To-Cart",
    payload: item,
  };
};

export const remove = (id) => {
  return {
    type: "remove-To-Cart",
    payload: id,
  };
};

export const dec = (item) => {
  return {
    type: "Decrement-To-Cart",
    payload: item,
  };
};

