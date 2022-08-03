import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { getCountries } from '../../redux/countries/countries';
import Country from '../Country/Country';
import images from '../../assets/images.jpg';
import './countries.css';

const Countries = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries.countries);
  useEffect(() => {
    dispatch(getCountries());
  }, []);
  return (
    <>
      <Container className="map">
        <Row>
          <Col xs={6}>
            <div className="africa-image">
              <img src={images} alt="africa map" />
            </div>
          </Col>
          <Col xs={6} className="righ-map-column" style={{ color: 'blue', zIndex: '1' }}>
            <h3 style={{ paddingTop: '35px' }}>AFRICAN COUNTRIES</h3>
          </Col>
        </Row>
      </Container>
      <Container className="grid-container">
        {Object.keys(countries).map((countryId) => {
          const {
            currencies, flags, name, population,
          } = countries[countryId];
          return (
            <Country
              key={population}
              currencies={currencies}
              flags={flags}
              name={name}
              population={population}
            />
          );
        })}
      </Container>
    </>
  );
};

export default Countries;
