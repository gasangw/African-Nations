import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { FaRegArrowAltCircleRight } from 'react-icons/fa';
import './country.css';

const Country = ({ name, flags }) => (
  <Row xs={1} lg={1} className="g-4">
    <Col>
      <Card className="card-container">
        <Link to={`/name/${name.common}`}>
          <FaRegArrowAltCircleRight
            style={{ width: '10px', height: '10px' }}
            className="arrow-right"
          />
          <Card.Body>
            <Card.Img variant="top" src={flags.png} />
            <Card.Title>{`Country: ${name.common}`}</Card.Title>
          </Card.Body>
        </Link>
      </Card>
    </Col>
  </Row>
);
Country.defaultProps = {
  name: {},
};

Country.propTypes = {
  name: PropTypes.shape({
    common: PropTypes.string,
  }),
};

export default Country;
