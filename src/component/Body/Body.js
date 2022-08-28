import { Col, Container, Row } from "react-bootstrap";
import "./Body.css";

const Body = () => {
  return (
    <div>
      <div className="body">
        <Container>
          <Row>
            <Col md={4}>text</Col>
            <Col md={{ span: 4, offset: 4 }}>gambar kanan</Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Body;
