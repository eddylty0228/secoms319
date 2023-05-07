import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import {
  Card,
  Col,
  Navbar,
  Container,
  Nav,
  Button,
  Row,
  Image,
} from "react-bootstrap";
import Footer from "./Footer"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [product, setProduct] = useState([]);
  const [oneProduct, setOneProduct] = useState({});
  const [homeView, setHomeView] = useState(true);
  const [gameView, setGameView] = useState(false);
  const [musicView, setMusicView] = useState(false);
  const [movieView, setMovieView] = useState(false);
  const [carView, setCarView] = useState(false);
  const [collecttionView, setCollectionView] = useState(false);
  const [gameProduct, setGameProduct] = useState([]);
  const [movieProduct, setMovieProduct] = useState([]);
  const [musicProduct, setMusicProduct] = useState([]);
  const [carProduct, setCarProduct] = useState([]);
  const [collectionProduct, setCollectionProduct] = useState([]);
  const [addToCollectionProduct, setAddToCollectionProduct] = useState({
    _id: 0,
    title: "",
    description: "",
    category: "",
    image: "http://127.0.0.1:8080/images/",
    rate: 0.0,
  });
  useEffect(() => {
    getGameProducts();
  }, []);
  useEffect(() => {
    getMovieProducts();
  }, []);
  useEffect(() => {
    getMusicProducts();
  }, []);
  useEffect(() => {
    getCarProducts();
  }, []);
  useEffect(() => {
    getCollectionProducts();
  }, []);
  useEffect(() => {
    getAllProducts();
  }, []);
  const showAllItems = product.map((el, index) => (
    <Col key={el._id} style={{ margin: "15px" }}>
      <Card style={{ width: "16rem", height: "33rem" }}>
        <Card.Img
          variant="top"
          src={el.image}
          style={{ height: "20rem", objectFit: "cover" }}
          alt={el.name}
        />
        <Card.Body>
          <Card.Title>{el.name}</Card.Title>
          <Card.Text className="text-end">Catagory: {el.category}</Card.Text>
          <Card.Text className="text-end">Rate: {el.rating.rate}</Card.Text>
          
        </Card.Body>
        <Card.Footer>
        <Button variant="primary" className="mt-auto" onClick={()=>handleAddToCollection(el._id)}>ADD TO COLLECTION</Button>
      </Card.Footer>
      </Card>
    </Col>
  ));

  const itemsPerRow = 4;
  const rows = [];
  for (let i = 0; i < showAllItems.length; i += itemsPerRow) {
    const rowItems = showAllItems.slice(i, i + itemsPerRow);
    const row = <Row key={`row-${i}`}>{rowItems}</Row>;
    rows.push(row);
  }
  // const showOneItem = oneProduct.map((el) => (
  //   <Col key={el._id}>
  //     <Card style={{ width: "16rem" }}>
  //       <Card.Img variant="top" src={el.image} style={{ height: "20rem" }} />
  //       <Card.Body>
  //         <Card.Title>{el.title}</Card.Title>
  //         <Card.Text>{el.category}</Card.Text>
  //         <Card.Text>Rate:{el.rate}</Card.Text>
  //       </Card.Body>
  //     </Card>
  //   </Col>
  // ));
  const showGames = gameProduct.map((el) => (
    <Row key={el._id} style={{ marginTop: "25px" }}>
      <Col sm={12} md={4}>
        <Image
          src={el.image}
          style={{ height: "39rem", width: "25rem", objectFit: "cover" }}
        />
      </Col>
      <Col sm={12} md={8}>
        <Card style={{ height: "39rem" }}>
          <Card.Header className="d-flex justify-content-between align-items-center">
            <Card.Title>{el.name}</Card.Title>
            <div className="ml-auto">
              <Button variant="primary">+</Button>
            </div>
          </Card.Header>

          <Card.Body>
            <Card.Text>Catagory: {el.category}</Card.Text>
            <Card.Text>Rate: {el.rating.rate}</Card.Text>
            <Card.Text>{el.description}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  ));
  const showMovies = movieProduct.map((el) => (
    <Row key={el._id} style={{ marginTop: "25px" }}>
      <Col sm={12} md={4}>
        <Image
          src={el.image}
          style={{ height: "39rem", width: "25rem", objectFit: "cover" }}
        />
      </Col>
      <Col sm={12} md={8}>
        <Card style={{ height: "39rem" }}>
          <Card.Header className="d-flex justify-content-between align-items-center">
            <Card.Title>{el.name}</Card.Title>
            <div className="ml-auto">
              <Button variant="primary">+</Button>
            </div>
          </Card.Header>

          <Card.Body>
            <Card.Text>Catagory: {el.category}</Card.Text>
            <Card.Text>Rate: {el.rating.rate}</Card.Text>
            <Card.Text>{el.description}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  ));
  const showMusic = musicProduct.map((el) => (
    <Row key={el._id} style={{ marginTop: "25px" }}>
      <Col sm={12} md={4}>
        <Image
          src={el.image}
          style={{ height: "39rem", width: "25rem", objectFit: "cover" }}
        />
      </Col>
      <Col sm={12} md={8}>
        <Card style={{ height: "39rem" }}>
          <Card.Header className="d-flex justify-content-between align-items-center">
            <Card.Title>{el.name}</Card.Title>
            <div className="ml-auto">
              <Button variant="primary">+</Button>
            </div>
          </Card.Header>

          <Card.Body>
            <Card.Text>Catagory: {el.category}</Card.Text>
            <Card.Text>Rate: {el.rating.rate}</Card.Text>
            <Card.Text>{el.description}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  ));
  const showCars = carProduct.map((el) => (
    <Row key={el._id} style={{ marginTop: "25px" }}>
      <Col sm={12} md={4}>
        <Image
          src={el.image}
          style={{ height: "39rem", width: "25rem", objectFit: "cover" }}
        />
      </Col>
      <Col sm={12} md={8}>
        <Card style={{ height: "39rem" }}>
          <Card.Header className="d-flex justify-content-between align-items-center">
            <Card.Title>{el.name}</Card.Title>
            <div className="ml-auto">
              <Button variant="primary">+</Button>
            </div>
          </Card.Header>

          <Card.Body>
            <Card.Text>Catagory: {el.category}</Card.Text>
            <Card.Text>Rate: {el.rating.rate}</Card.Text>
            <Card.Text>{el.description}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  ));
  const showCollection = collectionProduct.map((el) => (
    <Col key={el._id} style={{ margin: "15px" }}>
      <Card style={{ width: "16rem", height: "33rem" }}>
        <Card.Img
          variant="top"
          src={el.image}
          style={{ height: "20rem", objectFit: "cover" }}
          alt={el.name}
        />
        <Card.Body>
          <Card.Title>{el.name}</Card.Title>
          <Card.Text className="text-end">Catagory: {el.category}</Card.Text>
          <Card.Text className="text-end">Rate: {el.rating.rate}</Card.Text>
          
        </Card.Body>
        <Card.Footer>
        <Button variant="primary" className="mt-auto">DELETE</Button>
      </Card.Footer>
      </Card>
    </Col>
  ));
  function getAllProducts() {
    fetch("http://localhost:8080/")
      .then((response) => response.json())
      .then((data) => {
        console.log("Show Catalog of Products :");
        console.log(data);
        setProduct(data);
      });
    setGameView(false);
    setHomeView(true);
    setCarView(false);
    setMovieView(false);
    setMusicView(false);
    setCollectionView(false);
  }
  function getOneProduct(id) {
    console.log(id);
    if (id >= 1 && id <= 20) {
      fetch("http://localhost:8080/" + id)
        .then((response) => response.json())
        .then((data) => {
          console.log("Show one product :", id);
          console.log(data);
          setOneProduct(data);
        });
    } else {
      console.log("Wrong number of Product id.");
    }
  }
  function handleAddToCollection(key){
    getOneProduct(key);
    console.log("add id: " +key +" to collection")
    fetch("htto://localhost:8080/addCollection",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body: JSON.stringify(oneProduct)
    })
    .then((response)=>response.json())
    .then((data)=>{
      console.log("Post a new product completed")
      console.log(data)
      if(data){
        const value = Object.values(data);
        alert(value);
      }
    })
    toast.success('Succesfuly added')
    setOneProduct()
  }
  function getGameProducts() {
    fetch("http://localhost:8080/category/games")
      .then((response) => response.json())
      .then((data) => {
        console.log("Show games");
        console.log(data);

        setGameProduct(data);
      });
    setGameView(true);
    setHomeView(false);
    setCarView(false);
    setMovieView(false);
    setMusicView(false);
    setCollectionView(false);
  }
  function getMovieProducts() {
    fetch("http://localhost:8080/category/movies")
      .then((response) => response.json())
      .then((data) => {
        console.log("Show movies");
        console.log(data);
        setMovieProduct(data);
      });
    setGameView(false);
    setHomeView(false);
    setCarView(false);
    setMovieView(true);
    setMusicView(false);
    setCollectionView(false);
  }
  function getMusicProducts() {
    fetch("http://localhost:8080/category/music")
      .then((response) => response.json())
      .then((data) => {
        console.log("Show music");
        console.log(data);
        setMusicProduct(data);
      });
    setGameView(false);
    setHomeView(false);
    setCarView(false);
    setMovieView(false);
    setMusicView(true);
    setCollectionView(false);
  }
  function getCarProducts() {
    fetch("http://localhost:8080/category/cars")
      .then((response) => response.json())
      .then((data) => {
        console.log("Show cars");
        console.log(data);
        setCarProduct(data);
      });
    setGameView(false);
    setHomeView(false);
    setCarView(true);
    setMovieView(false);
    setMusicView(false);
    setCollectionView(false);
  }
  function getCollectionProducts() {
    fetch("http://localhost:8080/category/collection")
      .then((response) => response.json())
      .then((data) => {
        console.log("Show collection");
        console.log(data);
        setCollectionProduct(data);
      });
    setGameView(false);
    setHomeView(false);
    setCarView(false);
    setMovieView(false);
    setMusicView(false);
    setCollectionView(true);
  }

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand onClick={() => getAllProducts()}>
            Entertament Website
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Button className="nav-link" onClick={() => getAllProducts()}>
                Home
              </Button>
              <Button className="nav-link" onClick={() => getGameProducts()}>
                Games
              </Button>
              <Button className="nav-link" onClick={() => getMovieProducts()}>
                Movies
              </Button>
              <Button className="nav-link" onClick={() => getMusicProducts()}>
                Music
              </Button>
              <Button className="nav-link" onClick={() => getCarProducts()}>
                Cars
              </Button>
              <Button
                className="nav-link"
                onClick={() => getCollectionProducts()}
              >
                My Collection
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div>
        {gameView && (
          <Container>
            <h3 className="subtitle">Game</h3>
            <hr></hr>
            {showGames}
          </Container>
        )}
        {movieView && (
          <Container>
            <h3 className="subtitle">Movie</h3>
            <hr></hr>
            {showMovies}
          </Container>
        )}
        {musicView && (
          <Container>
            <h3 className="subtitle">Music</h3>
            <hr></hr>
            {showMusic}
          </Container>
        )}
        {carView && (
          <Container>
            <h3 className="subtitle">Car</h3>
            <hr></hr>
            {showCars}
          </Container>
        )}
        {collecttionView && (
          <Container>
            <h3 className="subtitle">My Collection</h3>
            <hr></hr>
            {showCollection}
          </Container>
        )}
        {homeView && (
          <Container>
            <h3 className="subtitle">All Items</h3>
            <hr></hr>
            {rows}
          </Container>
        )}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
