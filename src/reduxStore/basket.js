import { createSlice } from "@reduxjs/toolkit";

export const basketSlice = createSlice({
  name: "basket",
  initialState: { basketItems: [] },
  reducers: {
    addItemToBasket: (state, action) => {
      let tmp = [...state.basketItems];
      const product = action.payload.product;
      const existingProduct = tmp.find((x) => x.product.id === product.id); // eklenmek istenen urunun sepette olup olmadigini kontrol eder
      if (existingProduct !== undefined) { // urun var
        existingProduct.quantity += 1;
        tmp = tmp.map((x) => {
          if (x.product.id === product.id) {
            return existingProduct;
          }
          return x;
        });
      } else {
        const newItem = { quantity: 1, product: product };
        tmp.push(newItem);
      }
      state.basketItems = tmp;
    },

    removeFromBasket: (state, action) => {
      let tmp = [...state.basketItems];
      const product = action.payload.product;
      const existingProduct = tmp.find((x) => x.product.id === product.id); // sepetten cikarilmak istenen urunu bulur
      if (existingProduct.quantity > 1) {
        existingProduct.quantity -= 1;
        tmp = tmp.map((x) => {
          if (x.product.id === product.id) {
            return existingProduct;
          }
          return x;
        });
      } else {
        tmp = tmp.filter((x) => x.product.id !== product.id); // sepetten urun cikarilir
      }
      state.basketItems = tmp;
    },
    clearBasket: (state, action) => {
      state.basketItems = [];
    },
  },
});

export const { addItemToBasket, removeFromBasket, clearBasket } =
  basketSlice.actions;
export default basketSlice.reducer;
