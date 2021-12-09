//Bootstrap
import Card from "react-bootstrap/Card";
import { Col, Row, ButtonGroup, Button } from "react-bootstrap";

const Movie = (props) => {
  var imdbRating = props.info.Ratings[0];
  var rtRating = props.info.Ratings[1];
  var metaRating = props.info.Ratings[2];

  return (
    <Card className="shadow p-3 mb-4 bg-body rounded">
      <Card.Body>
        <Row>
          <Col className="col-3">
            <img
              src={props.info.Poster}
              width="125"
              height="187"
              alt={props.info.Title}
              srcSet={props.info.Poster}
              className="image"
            ></img>
          </Col>
          <Col className="col-6">
            <Row>
              <h4>{props.info.Title}</h4>
            </Row>
            <Row>
              <h5>{props.info.Director}</h5>
            </Row>
            <Row className="mt-3">
              <h5>
                {imdbRating.Source}: {imdbRating.Value}
              </h5>
            </Row>
            <Row>
              <ButtonGroup className="mt-4 me-2">
                <Button className="me-2">Completed</Button>
                <Button>Plan to Watch</Button>
              </ButtonGroup>
            </Row>
          </Col>
          <Col>
            <h5>{props.info.Year}</h5>
          </Col>
          <Col>
            <h5>{props.info.Country.split(",")[0]}</h5>
          </Col>
        </Row>
        <Row>
          {/* <Col>
            <h5>{rtRating.Source}: {rtRating.Value}</h5>
          </Col>
          <Col>
            <h5>{metaRating.Source}: {metaRating.Value}</h5>
          </Col> */}
        </Row>
      </Card.Body>
    </Card>
  );
};

export default Movie;
