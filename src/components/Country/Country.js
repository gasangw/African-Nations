import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { FaRegArrowAltCircleRight } from 'react-icons/fa';

const Country = ({ name, population }) => (
  <Row xs={1} lg={1} className="g-4">
    <Col>
      <Card className="card-container">
        <Link to={`/name/${name.common}`}>
          <FaRegArrowAltCircleRight
            style={{ width: '20px', height: '20px' }}
            className="arrow-right"
          />
          <Card.Body>
            <Card.Title>{`Country: ${name.common}`}</Card.Title>
            <Card.Text>{`Population: ${population}`}</Card.Text>
          </Card.Body>
        </Link>
      </Card>
    </Col>
  </Row>
);
Country.defaultProps = {
  // flags: {},
  name: {},
  population: PropTypes.number,
};

Country.propTypes = {
  // flags: PropTypes.shape({
  //   png: PropTypes.string,
  // }),
  name: PropTypes.shape({
    common: PropTypes.string,
  }),
  population: PropTypes.number,
};

export default Country;
