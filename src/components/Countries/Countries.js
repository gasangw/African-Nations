import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { getCountries } from '../../redux/countries/countries';
import Country from '../Country/Country';

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
          <p>Look up your Favorite country and learn more about it</p>
            </div>
          </Col>
          <Col xs={6} className="righ-map-column" style={{ color: 'white', zIndex: '1' }}>
            <h3 style={{ paddingTop: '40px' }}>AFRICA POPULATION</h3>
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
