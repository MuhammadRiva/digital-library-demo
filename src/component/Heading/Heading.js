import { Container, Row, Col } from "react-bootstrap";
import "./Heading.css";

const Heading = () => {
  return (
    <div className="heading">
      <Container className="d-flex justify-content-center text-white">
        <Row>
          <Col>
            <h1>Digital Library Of The Future</h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Heading;
