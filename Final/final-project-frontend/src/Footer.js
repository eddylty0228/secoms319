import { Container, Row, Col, Button} from 'react-bootstrap';

function Footer() {
    return (
        <footer className="bg-light py-3" style={{marginTop:'20px'}}>
          <Container>
            <Row>
              <Col>
                <p>© 2023 Group 74</p>
              </Col>
              <Col className="text-right">
                <Button variant="secondary" href="#top">
                  To the Top
                </Button>
              </Col>
            </Row>
          </Container>
        </footer>
      );
}
export default Footer;
