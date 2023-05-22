import React, { useContext } from 'react';
import { FaCoffee, FaShoppingBag, FaSignInAlt, FaUserCircle } from 'react-icons/fa';
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { AuthContext } from "../context";
import { Link } from "react-router-dom";

const Header = () => {
  const { isAuth, setIsAuth, user, setUser } = useContext(AuthContext);

  const exit = e => {
    setIsAuth(false);
    setUser({});
    localStorage.setItem("user", "");
  }

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Link className="navbar-brand" to="/">Sweet World <FaCoffee/></Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Link className="nav-link" to="/products">Каталог <FaShoppingBag/></Link>
            {
              isAuth
                ?
                <>
                  <NavDropdown title={<FaUserCircle/>} menuVariant="dark">
                    <Link to="/account" className="dropdown-item">
                      Кабинет
                    </Link>
                    {
                      user.is_superuser &&
                      <a className="dropdown-item" href="http://45.141.101.242:30/admin">Для администратора</a>
                    }

                    <NavDropdown.Item onClick={exit}>
                      Выйти
                    </NavDropdown.Item>
                  </NavDropdown>
                </>
              : <Link className="nav-link" to="/login">Войти <FaSignInAlt/></Link>
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;