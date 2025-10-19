import { createContext, useState } from "react";
import { food_list } from "../assets/assets";
import { useEffect } from "react";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({}); // ✅ start as empty object

  const addTocart = (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
  };

const removeFromCart = async (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    if (token) {
      const response= await axios.post(
        url + "/api/cart/remove",
        { itemId },
        { headers: { token } }
      );
      if(response.data.success){
        toast.success("item Removed from Cart")
      }else{
        toast.error("Something went wrong")
      }
    }
  };


   useEffect(() => {
  console.log("Updated cart:", cartItems);
}, [cartItems]);

  

  const contextvalue = {
    food_list,
    cartItems,
    setCartItems,
    addTocart,
    removeFromCart,
  };


  return (
    <StoreContext.Provider value={contextvalue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
