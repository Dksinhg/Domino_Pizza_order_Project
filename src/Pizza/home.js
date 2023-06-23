import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./home.css";
import Dropdown from "react-bootstrap/Dropdown";
import { FcRating } from "react-icons/fc";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CartItem from "./cartItem";
import { useCart } from "react-use-cart";

// import {useCart, CartProvider} from "react-use-cart";


const Home =()=> {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://run.mocky.io/v3/ec196a02-aaf4-4c91-8f54-21e72f241b68")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  
  const [cart, setcart] = useState([]);

  const AddItem = (data) =>{
        setcart([...cart,{ ...data, quantity:1} ])
  }

  return (
    <div>
      <Container>
        <Row>
          <Col sm={8}>
          
            {data.map((item, index) => {
              return (
                <>
                  <div key={index} className="Pizza-caintainer">
                    <div
                      className="Pizza-Subcainter"
                      style={{ width: "20rem" }}
                      key={index}
                    >
                      <div className="Caintainer-img">
                        <img
                          src={item.img_url}
                          style={{ width: "310px", height:"190px" }}
                        />
                      </div>
                      <div className="Container-description">
                        <div className="Container-veg">
                          {item.isVeg ? (
                            <div> Veg Pizzza</div>
                          ) : (
                            <div> Non-veg Pizza</div>
                          )}
                        </div>
                        <div className="caontainer-details">
                          <div className="price-rating">
                            <p> ₹ {item.price}.00</p>
                            <p>
                              <FcRating /> {item.rating}
                            </p>
                          </div>
                          <div className="name-des">
                            <Card.Title>{item.name}</Card.Title>
                            <Card.Text>{item.description}</Card.Text>
                          </div>
                        </div>
                        <div className="Dropdown-list">{item.size.isRadio}</div>

                        <button className="button" onClick={()=>AddItem(item, index)}>
                          Add to cart
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}

            
          </Col>
          <Col sm={4}>
            <div className="Cart-container">
              <h2>  Your Items  </h2>
                 <CartItem cart={cart}  />
            </div>
            {/* <CartItem cart={cart} /> */}
          </Col>
        </Row>
      </Container>

      
    </div>
  );
}

export default Home;
