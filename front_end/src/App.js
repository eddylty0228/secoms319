import logo from "./logo.svg";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState,useEffect } from "react";
import { Card, Button, Col, Row, Form, FormGroup,Container } from "react-bootstrap";

const ProductCard = ({ product }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={product.image} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
        <Button variant="primary">Buy Now</Button>
      </Card.Body>
    </Card>
  );
};

function App() {
  const [product, setProduct] = useState([]);
  const [viewer1, setViewer1] = useState(false);
  const [viewer4, setViewer4] = useState(false);
  const [oneProduct, setOneProduct] = useState([]);
  const [checked4, setChecked4] = useState(false);
  const [viewer2, setViewer2] = useState(false);

  const [index, setIndex] = useState(0);

  useEffect(() => {
    getAllProducts();
  }, []);
  //reload as check box
  useEffect(() => {
    getAllProducts();
  }, [checked4]);

  const showAllItems = product.map((el) => (
    
      <Col>
      <div key={el._id}>
        <Card style={{ width: "16rem"}}>
          <Card.Img variant="top" src={el.image} style={{height: "20rem"}} />
          <Card.Body>
            <Card.Title>{el.title}</Card.Title>
            <Card.Text>{el.category}</Card.Text>
            <Card.Text>${el.price}</Card.Text>
            <Card.Text>Rate:{el.rate}</Card.Text>
            <Card.Text>Count:{el.count}</Card.Text>
            
          </Card.Body>
        </Card>
        </div>
      </Col>
    
  ));

  const [addNewProduct, setAddNewProduct] = useState({
    _id: 0,
    title: "",
    price: 0.0,
    description: "",
    category: "",
    image: "http://127.0.0.1:4000/images/",
    rating: { rate: 0.0, count: 0 },
  });
  const showOneItem = oneProduct.map((el) => (
    <Container>
      <div key={el._id}>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={el.image} />
          <Card.Body>
            <Card.Title>{el.title}</Card.Title>
            <Card.Text>{el.category}</Card.Text>
            <Card.Text>${el.price}</Card.Text>
            <Card.Text>Rate:{el.rate}</Card.Text>
            <Card.Text>Count:{el.count}</Card.Text>
            <Card.Text>{el.description}</Card.Text>
          </Card.Body>
        </Card>
    </div>
    </Container>
    
  ));

  function handleOnSubmit(e) {
    e.preventDefault();
    console.log(e.target.value);
    fetch("http://localhost:4000/insert", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(addNewProduct),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Post a new product completed");
        console.log(data);
        if (data) {
          //const keys = Object.keys(data);
          const value = Object.values(data);
          alert(value);
        }
      });
  }
  function getOneProduct(id) {
    console.log(id);
    if (id >= 1 && id <= 20) {
      fetch("http://localhost:4000/" + id)
        .then((response) => response.json())
        .then((data) => {
          console.log("Show one product :", id);
          console.log(data);
          const dataArr = [];
          dataArr.push(data);
          setOneProduct(dataArr);
        });
      setViewer2(!viewer2);
    } else {
      console.log("Wrong number of Product id.");
    }
  }

  function getOneByOneProductNext() {
    if (product.length > 0) {
      if (index === product.length - 1) setIndex(0);
      else setIndex(index + 1);
      if (product.length > 0) setViewer4(true);
      else setViewer4(false);
    }
  }
  function getOneByOneProductPrev() {
    if (product.length > 0) {
      if (index === 0) setIndex(product.length - 1);
      else setIndex(index - 1);
      if (product.length > 0) setViewer4(true);
      else setViewer4(false);
    }
  }
  function deleteOneProduct(deleteid) {
    console.log("Product to delete :", deleteid);
    fetch("http://localhost:4000/delete/", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ _id: deleteid }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Delete a product completed : ", deleteid);
        console.log(data);
        if (data) {
          //const keys = Object.keys(data);
          const value = Object.values(data);
          alert(value);
        }
      });
    setChecked4(!checked4);
  }

  function getAllProducts() {
    fetch("http://localhost:4000/")
      .then((response) => response.json())
      .then((data) => {
        console.log("Show Catalog of Products :");
        console.log(data);
        setProduct(data);
      });
    setViewer1(!viewer1);
  }
  function handleChange(evt) {
    const value = evt.target.value;
    if (evt.target.name === "_id") {
      setAddNewProduct({ ...addNewProduct, _id: value });
    } else if (evt.target.name === "title") {
      setAddNewProduct({ ...addNewProduct, title: value });
    } else if (evt.target.name === "price") {
      setAddNewProduct({ ...addNewProduct, price: value });
    } else if (evt.target.name === "description") {
      setAddNewProduct({ ...addNewProduct, description: value });
    } else if (evt.target.name === "category") {
      setAddNewProduct({ ...addNewProduct, category: value });
    } else if (evt.target.name === "image") {
      const temp = value;
      setAddNewProduct({ ...addNewProduct, image: temp });
    } else if (evt.target.name === "rate") {
      setAddNewProduct({ ...addNewProduct, rating: { rate: value } });
    } else if (evt.target.name === "count") {
      const temp = addNewProduct.rating.rate;
      setAddNewProduct({
        ...addNewProduct,
        rating: { rate: temp, count: value },
      });
    }
  }
  return (
    <Container>
      <div>
        <h1>Catalog of Products</h1>
        <Button onClick={() => getAllProducts()}>Show All products</Button>
        <hr></hr>
        {viewer1 && (
          <div>
            Products <Row>{showAllItems}</Row>
          </div>
        )}
        <hr></hr>
      </div>
      <h1>Show one Product by Id:</h1>
      <Form.Control
          type="text"
          id="message"
          name="message"
          placeholder="id"
          onChange={(e) => getOneProduct(e.target.value)}
        />
      {viewer2 && <div>Product: {showOneItem}</div>}
      <div>
        <h3>Add a new product :</h3>
        <Form action="">
          
            <Form.Label>Id</Form.Label>
          <Form.Control
            type="number"
            placeholder="id?"
            name="_id"
            value={addNewProduct._id}
            onChange={handleChange}
          />
          
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="title?"
            name="title"
            value={addNewProduct.title}
            onChange={handleChange}
          />
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="number"
            placeholder="price?"
            name="price"
            value={addNewProduct.price}
            onChange={handleChange}
          />
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            placeholder="description?"
            name="description"
            value={addNewProduct.description}
            onChange={handleChange}
          />
          <Form.Label>Category</Form.Label>
          <Form.Control
            type="text"
            placeholder="category?"
            name="category"
            value={addNewProduct.category}
            onChange={handleChange}
          />
          <Form.Label>Image</Form.Label>
          <Form.Control
            type="text"
            placeholder="image?"
            name="image"
            value={addNewProduct.image}
            onChange={handleChange}
          />
          <Form.Label>Rate</Form.Label>
          <Form.Control
            type="number"
            placeholder="rate?"
            name="rate"
            value={addNewProduct.rating.rate}
            onChange={handleChange}
          />
          <Form.Label>Count</Form.Label>
          <Form.Control
            type="number"
            placeholder="count?"
            name="count"
            value={addNewProduct.rating.count}
            onChange={handleChange}
          />
          <Button type="submit" onClick={handleOnSubmit}>
            submit
          </Button>
        </Form>
      </div>
      <div>
        <h3>Delete one product:</h3>
        <Form.Check
          type="checkbox"
          id="acceptdelete"
          name="acceptdelete"
          checked={checked4}
          onChange={(e) => setChecked4(!checked4)}
        />
        <Row>
          <Col>
          <Button onClick={() => getOneByOneProductPrev()}>Prev</Button>
          </Col>
          <Col>
          <Button onClick={() => getOneByOneProductNext()}>Next</Button>
          </Col>
          <Col>
          <Button onClick={() => deleteOneProduct(product[index]._id)}> Delete
        </Button>
          </Col>
        </Row>
        
        
        
        
        {checked4 && (
          <div key={product[index]._id}>
          <Card style={{ width: "15rem" }}>
            <Card.Img variant="top" src={product[index].image} />
            <Card.Body>
              <Card.Title>{product[index].title}</Card.Title>
              <Card.Text>{product[index].category}</Card.Text>
              <Card.Text>${product[index].price}</Card.Text>
              <Card.Text>Rate:{product[index].rate}</Card.Text>
              <Card.Text>Count:{product[index].count}</Card.Text>
            </Card.Body>
          </Card>
      </div>
        )}
      </div>
    </Container>
    
  );
}

export default App;
