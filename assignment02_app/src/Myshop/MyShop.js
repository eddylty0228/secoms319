import React, { useState, useEffect } from "react";
import items from "./products.json";
const MyShop = () => {
  const [cart, setCart] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  useEffect(() => {total();}, [cart]);
  const total = () => {
    let totalVal = 0;
    for (let i = 0; i < cart.length; i++) {
      totalVal += cart[i].price;
    }
    setCartTotal(totalVal);
  };
  function howManyofThis(id) {
    let hmot = cart.filter((cartItem) => cartItem.id === id);
    return hmot.length;
  }
  const listItems = items.map((el) => (
    //products
    <div></div>
  ));
  const cartItems = cart.map((el) => (
    <div></div>
  ));
  return(
    <div class="card">
            <div class="row">
                <div class="col-md-8 cart">
                    <div class="title">
                        <div class="row">
                            <div class="col"><h4><b>Shopping Cart</b></h4></div>
                            <div class="col align-self-center text-right text-muted">3 items</div>
                        </div>
                    </div>    
                    <div class="row border-top border-bottom">
                        <div class="row main align-items-center">
                            <div class="col-2"><img class="img-fluid" src="https://i.imgur.com/1GrakTl.jpg"/></div>
                            <div class="col">
                                <div class="row text-muted">Shirt</div>
                                <div class="row">Cotton T-shirt</div>
                            </div>
                            <div class="col">
                                <a href="#">-</a><a href="#" class="border">1</a><a href="#">+</a>
                            </div>
                            <div class="col">&euro; 44.00 <span class="close">&#10005;</span></div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="row main align-items-center">
                            <div class="col-2"><img class="img-fluid" src="https://i.imgur.com/ba3tvGm.jpg"/></div>
                            <div class="col">
                                <div class="row text-muted">Shirt</div>
                                <div class="row">Cotton T-shirt</div>
                            </div>
                            <div class="col">
                                <a href="#">-</a><a href="#" class="border">1</a><a href="#">+</a>
                            </div>
                            <div class="col">&euro; 44.00 <span class="close">&#10005;</span></div>
                        </div>
                    </div>
                    <div class="row border-top border-bottom">
                        <div class="row main align-items-center">
                            <div class="col-2"><img class="img-fluid" src="https://i.imgur.com/pHQ3xT3.jpg"/></div>
                            <div class="col">
                                <div class="row text-muted">Shirt</div>
                                <div class="row">Cotton T-shirt</div>
                            </div>
                            <div class="col">
                                <a href="#">-</a><a href="#" class="border">1</a><a href="#">+</a>
                            </div>
                            <div class="col">&euro; 44.00 <span class="close">&#10005;</span></div>
                        </div>
                    </div>
                   
                </div>
                
            </div>
            
        </div>
  );
};
export default MyShop;
