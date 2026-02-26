import { useEffect, useState } from "react";

const Index6 = () => {
  const [cartCount, setCartCount] = useState(0);

  const availableItems = ["Shampoo", "Soap", "Sponge", "Water"];

  useEffect(() => {
    if (typeof Storage === "undefined") {
      alert(
        "Sorry, your browser does not support Web storage. Try again with a better one"
      );
    } else {
      displayCart();
    }
  }, []);

  const addItemToCart = (item) => {
    localStorage.setItem(item, true); 
    const newCount = cartCount + 1;
    localStorage.setItem('cartCount', newCount); 
    setCartCount(newCount); 
  };

  const displayCart = () => {
    const savedCount = +localStorage.getItem('cartCount') || 0;
    setCartCount(savedCount);
  };

  return (
    <>
      <p>Cart Count: {cartCount}</p>
      <ul>
        {availableItems.map((item, index) => (
          <li
            key={index}
            style={{ cursor: "pointer", marginBottom: "5px" }}
            onClick={() => addItemToCart(item)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Index6;