import React, { useEffect, useState } from "react";
import "./cartItem.css";
import { MdDeleteOutline } from "react-icons/md";

// var a=10;
// var b=20;
//  (a>b) ? (<div>a is greater </div> ): ( <div>b is small </div>)


const CartItem = ({ cart }) => {

  const [ CART, setCART] = useState([])

  useEffect(()=>{
     setCART(cart);
  },[cart])
 
  const deleteItem = () => {};

 

  // (cart.empty) ? (<div> Cart is empty </div>) : ( <div> </div>)

  var empty = 0;
  return (
    <>
      {CART?.map((item, cartindex) => {
        return (
          <>
            <div  className="Cart_section">
              <table className="Table_data">
                <tbody>
                  <tr className="Cart_data">
                    <td>
                      <img
                        src={item.img_url}
                        style={{ width: "90%", height: "90%" }}
                      />
                    </td>
                    <td id="Cart_name">
                      <h4>{item.name}</h4> {item.description}
                    </td>
                  </tr>
                  <tr className="Cart_priceDec">
                    <td id="price"> ₹ {item.price * item.quantity}.00 </td>
                    <td>
                      <button
                        className="btn btn-primary  ms-2"
                       //  onClick={deleteItem()}
                      >
                        <MdDeleteOutline />
                      </button>
                      <span
                        className="btn btn-primary ms-2"
                        // onClick={QuantityItem=()=>{}}
                      >
                        {item.quantity}
                      </span>
                      <button
                        className="btn btn-primary ms-2"
                         onClick={()=>{
                          const _CART =CART.map((item, index)=>{
                            return cartindex === index ? {...item, quantity: item.quantity + 1} : item 
                          });
                          setCART(_CART);
                         }}
                      >
                        +
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </>
        );
     
      })}

      <div className="Cart_footer">
        <div className="Subtotal">
          <h4> SubToatal </h4>
          <h4>
            ₹
            {CART.map((item) => item.price*item.quantity)
              .reduce((total, value) => total + value, 0)}
            .00
          </h4>
        </div>
        <div>
          <button>Checkout</button>
        </div>
      </div>
    </>
  );
};

export default CartItem;
