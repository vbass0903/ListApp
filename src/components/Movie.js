//Bootstrap
import Card from "react-bootstrap/Card";
import { Col, Row } from "react-bootstrap";

const Movie = (props) => {
  return (
    <Card className="mt-1">
      <Card.Body>
        <Row>
          <Col className="col-2">
            <img
              src="https://a.ltrbxd.com/resized/film-poster/4/2/2/0/3/5/422035-burning-0-125-0-187-crop.jpg?k=103798ec50"
              width="125"
              height="187"
              alt="Burning"
              srcset="https://a.ltrbxd.com/resized/film-poster/4/2/2/0/3/5/422035-burning-0-250-0-375-crop.jpg?k=7b24f00a4c 2x"
              class="image"
            ></img>
          </Col>
          <Col>
          <Row>
            <h4>Burning</h4>
            </Row>
            <Row>
              <h5>Lee Chang-dong</h5>
            </Row>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default Movie;
