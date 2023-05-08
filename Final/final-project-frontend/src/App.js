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
  Modal,
} from "react-bootstrap";
import Footer from "./Footer";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [product, setProduct] = useState([]);
  const [oneProduct, setOneProduct] = useState({});
  const [homeView, setHomeView] = useState(true);
  const [gameView, setGameView] = useState(false);
  const [AboutUsView, setAboutUsView] = useState(false);
  const [musicView, setMusicView] = useState(false);
  const [movieView, setMovieView] = useState(false);
  const [carView, setCarView] = useState(false);
  const [collecttionView, setCollectionView] = useState(false);
  const [gameProduct, setGameProduct] = useState([]);
  const [movieProduct, setMovieProduct] = useState([]);
  const [musicProduct, setMusicProduct] = useState([]);
  const [carProduct, setCarProduct] = useState([]);
  const [collectionProduct, setCollectionProduct] = useState([]);
  const [addToCollectionProduct, setAddToCollectionProduct] = useState({});
  //popup
  const [showModal, setShowModal] = useState(false);

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
    <Col
      key={el._id}
      style={{ marginTop: "15px", marginBottom: "15px" }}
      className="col col-3"
    >
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
          <Button
            variant="primary"
            className="mt-auto"
            onClick={() => {
              handleAddToCollection(el._id);
            }}
          >
            ADD TO COLLECTION
          </Button>
        </Card.Footer>
      </Card>
    </Col>
  ));

  //const itemsPerRow = 4;
  //const rows = [];
  //for (let i = 0; i < showAllItems.length; i += itemsPerRow) {
  //const rowItems = showAllItems.slice(i, i + itemsPerRow);
  //const row = <Row key={`row-${i}`}>{rowItems}</Row>;
  //rows.push(row);
  //}
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
              <Button
                variant="primary"
                onClick={() => {
                  handleAddToCollection(el._id);
                }}
              >
                +
              </Button>
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
              <Button
                variant="primary"
                onClick={() => {
                  handleAddToCollection(el._id);
                }}
              >
                +
              </Button>
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
              <Button
                variant="primary"
                onClick={() => {
                  handleAddToCollection(el._id);
                }}
              >
                +
              </Button>
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
              <Button
                variant="primary"
                onClick={() => {
                  handleAddToCollection(el._id);
                }}
              >
                +
              </Button>
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
    <Col
      key={el._id}
      style={{ marginTop: "15px", marginBottom: "15px" }}
      className="col col-3"
    >
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
          <Button
            variant="primary"
            className="mt-auto"
            onClick={() => {
              deleteOneProduct(el._id);
            }}
          >
            Delete
          </Button>
        </Card.Footer>
      </Card>
    </Col>
  ));

  //const itemsPerCollectionRow = 4;
  //const rowsCollection = [];
  //for (let i = 0; i < showCollection.length; i += itemsPerCollectionRow) {
  //const collectionrowItems = showCollection.slice(i, i + itemsPerCollectionRow);
  //const collectionrow = <Row key={`row-${i}`}>{collectionrowItems}</Row>;
  //rowsCollection.push(collectionrow);
  //}
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
    setAboutUsView(false);
  }

  function handleAddToCollection(key) {
    fetch("http://localhost:8080/" + key)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        console.log("add id: " + key + " to collection");
        fetch("http://localhost:8080/addToCollection", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log("Post a new product completed");
            console.log(data);
          });
      });
    setShowModal(true);
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
    setAboutUsView(false);
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
    setAboutUsView(false);
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
    setAboutUsView(false);
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
    setAboutUsView(false);
  }
  function getCollectionProducts() {
    fetch("http://localhost:8080/mycollection/collection")
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
    setAboutUsView(false);
  }
  //delete by id
  function deleteOneProduct(deleteid) {
    console.log("Product to delete :", deleteid);
    fetch("http://localhost:8080/delete/", {
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
        getCollectionProducts();
      });
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
              <Button className="nav-link" onClick={() => {
                setAboutUsView(true);
                setGameView(false);
    setHomeView(false);
    setCarView(false);
    setMovieView(false);
    setMusicView(false);
    setCollectionView(false);

                }}>
                About Us
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
            <Row>{showCollection}</Row>
          </Container>
        )}
        {homeView && (
          <Container>
            <h3 className="subtitle">All Items</h3>
            <hr></hr>
            <Row>{showAllItems}</Row>
          </Container>
        )}
        {AboutUsView && (
          <Container>
            <header>
              <title>
              SE/ComS319 Construction of User Interfaces, Spring 2023
            </title>
            </header>
            

            <h1>SE/ComS319 Construction of User Interfaces, Spring 2023</h1>
            <p>Date: 2023/5/6</p>
            <p>Name of students and ISU email:</p>
            <p>Tianyi Luo - lty228@iastate.edu</p>
            <p>Matthew Gudenkauf - mattgude@iastate.edu</p>
              
            <p>
              Professor and email: Dr. Abraham N. Aldaco
              Gastelum - aaldaco@iastate.edu
            </p>
          </Container>
        )}
      </div>
      <div>
        <Modal show={showModal} onHide={() => setShowModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Added to your collection.</Modal.Title>
          </Modal.Header>
          <Modal.Footer>
            <Button onClick={() => setShowModal(false)}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
