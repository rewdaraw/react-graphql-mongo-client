import React from 'react';
import { Container, Navbar, NavbarBrand } from 'reactstrap';

export const Header: React.FC = () => {
  return (
    <Navbar color="primary" dark className="mb-4">
      <Container>
        <NavbarBrand href="/">Movie list</NavbarBrand>
      </Container>
    </Navbar>
  );
};
