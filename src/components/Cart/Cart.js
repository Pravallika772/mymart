// src/components/Cart.js

import React, { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import Footer from "../footer";
import "./cartStyle.css";

const Cart = () => {
  const {
    cartItems,
    removeItemFromCart,
    increaseItemQuantity,
    decreaseItemQuantity,
    getTotalAmount,
  } = useContext(CartContext);

  const totalAmount = getTotalAmount();
  const formattedTotalAmount = totalAmount.toFixed(2);

  // Empty Cart
  if (cartItems.length === 0) {
    return (
      <div className="pageTitle">
        <h1 style={{ height: "260px", paddingTop: "100px" }}>
          Your Cart is Empty
        </h1>
        <Footer />
      </div>
    );
  }

  return (
    <div className="CartPage">
      <h2 style={{ paddingTop: "100px" }}>Shopping Cart</h2>

      <div className="cartDivisions">

        {/* Cart Items */}
        <div className="displayCartItems">

          {cartItems.map((item) => (
            <div key={item.id} className="cartItems">

              <div className="cartProduct">

                <div className="productImage">
                  <img src={item.img} alt={item.name} />
                </div>

                <div className="itemDetails">
                  <h4>{item.name}</h4>

                  <div className="itemPrice">
                    <p>
                      Price : ${item.price.toFixed(2)}
                    </p>

                    <p>
                      Quantity : {item.quantity}
                    </p>

                    <p>
                      Subtotal : $
                      {(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>

              </div>

              <div className="itemIcons">

                <div className="itemQuantity">
                  <button
                    className="increase"
                    onClick={() => increaseItemQuantity(item.id)}
                  >
                    +
                  </button>

                  <button
                    className="decrease"
                    onClick={() => decreaseItemQuantity(item.id)}
                  >
                    -
                  </button>
                </div>

                <div className="crossIcon">
                  <button
                    onClick={() => removeItemFromCart(item.id)}
                  >
                    ❌
                  </button>
                </div>

              </div>

            </div>
          ))}

        </div>

        {/* Cart Summary */}
        <div className="cartTotal">
          <h3>Cart Summary</h3>
          <hr />

          <div className="summaryRow">
            <span>Total Items</span>
            <span>{cartItems.length}</span>
          </div>

          <div className="summaryRow">
            <span>Total Price</span>
            <span>${formattedTotalAmount}</span>
          </div>

          <button className="checkoutBtn">
            Proceed to Checkout
          </button>

        </div>

      </div>

      <Footer />
    </div>
  );
};

export default Cart;
