import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FaLessThan, FaMicrophone } from 'react-icons/fa';
import { FiSettings } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { searchCountry } from '../../redux/countries/countries';

const Header = () => {
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search.length > 0) {
      dispatch(searchCountry(search));
    }
  };
  return (
    <Navbar>
      <Container>
        <Link to="/">
          <Navbar.Brand className="year">
            <FaLessThan className="icon" />
            {' '}
            <span>2022</span>
          </Navbar.Brand>
        </Link>
        <Form className="d-flex justify-content-end flex-grow-1 pe-3" onSubmit={handleSubmit}>
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            value={search}
            name="country"
            onChange={handleSearch}
          />
          <Button variant="outline-success" type="submit">Search</Button>
        </Form>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <FaMicrophone className="icon" />
          </Navbar.Text>
          <Navbar.Text>
            <FiSettings className="icon" />
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
