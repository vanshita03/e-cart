const card = {
  cart: [],
};

const Reducer = (state = card, action) => {
  switch (action.type) {
    case "Add-To-Cart":
      const indexitem = state.cart.findIndex(
        (item) => item.id == action.payload.id
      );

      if (indexitem >= 0) {
        state.cart[indexitem].proquantity += 1;
      } else {
        let datas = { ...action.payload, proquantity: 1 };
        return {
          ...state,
          cart: [...state.cart, datas],
        };
      }

    case "remove-To-Cart":
      let data = state.cart.filter((val) => val.id != action.payload);
      console.log(data);
      return {
        ...state,
        cart: data,
      };
      case "Decrement-To-Cart":
        const cartindex = state.cart.findIndex(
          (item) => item.id == action.payload.id
        );
        if(state.cart[cartindex].proquantity>=1){
          state.cart[cartindex].proquantity-= 1

          return{
            ...state,
            cart: [...state.cart],
          }
        }
        else if(state.cart[cartindex].proquantity ===1){
          let datas = state.cart.filter((val)=> val.id != action.payload);
          return{
            ...state,
            cart:datas
          }
        }
    default:
      return state;
  }

};
export default Reducer;
