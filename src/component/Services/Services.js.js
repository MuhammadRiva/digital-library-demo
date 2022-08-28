import { Container, Row, Col } from "react-bootstrap";
import "./Services.css";

const Services = () => {
  return (
    <div className="myServices">
      <Container className="d-flex justify-content-center">
        <Row>
          <Col>
            <h1>Kami Punya Apa Yang Anda Butuhkan</h1>
            <p className="text-center">Membaca semakin lebih mudah dan menyenangkan</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Services;
