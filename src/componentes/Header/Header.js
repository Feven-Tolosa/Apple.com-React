import logo from "../../apple-responsive-replica-html-css-mar-2020/images/icons/logo-sm.png";
import search from "../../apple-responsive-replica-html-css-mar-2020/images/icons/search-icon-sm.png";
import cart from "../../apple-responsive-replica-html-css-mar-2020/images/icons/cart-sm.png";
import Container from "react-bootstrap/Container";
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import "../../apple-responsive-replica-html-css-mar-2020/css/styles.css";
import "../../apple-responsive-replica-html-css-mar-2020/css/bootstrap.css";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="nav-wrapper fixed-top">
      <Container>
        <Nav>
          <Navbar className="w-100" collapseOnSelect expand="lg" variant="dark">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Link className="navbar-brand mx-auto" to="/">
              <img src={logo} alt="apple" />
            </Link>
            <Navbar.Collapse id="basic-navbar-nav">
              <ul className="navbar-nav nav-justified w-100 nav-fill">
                <Nav.Link className="nav-item">
                  <Link className="nav-link js-scroll-trigger" to="/mac/">
                    mac
                  </Link>
                </Nav.Link>
                <Nav.Link className="nav-item">
                  <Link className="nav-link js-scroll-trigger" to="/iphone/">
                    iphone
                  </Link>
                </Nav.Link>
                <Nav.Link className="nav-item">
                  <Link className="nav-link js-scroll-trigger" to="/ipad/">
                    ipad
                  </Link>
                </Nav.Link>
                <Nav.Link className="nav-item">
                  <Link className="nav-link js-scroll-trigger" to="/watch/">
                    watch
                  </Link>
                </Nav.Link>
                <Nav.Link className="nav-item">
                  <Link className="nav-link js-scroll-trigger" to="/tv/">
                    tv
                  </Link>
                </Nav.Link>
                <Nav.Link className="nav-item">
                  <Link className="nav-link js-scroll-trigger" to="/Music/">
                    Music
                  </Link>
                </Nav.Link>
                <Nav.Link className="nav-item">
                  <Link className="nav-link js-scroll-trigger" to="/support/">
                    Support
                  </Link>
                </Nav.Link>
                <Nav.Link className="nav-item">
                  <Link className="nav-link js-scroll-trigger" to="">
                    <img src={search} alt="search" />
                  </Link>
                </Nav.Link>
                <Nav.Link className="nav-item">
                  <Link className="nav-link js-scroll-trigger" to="/cart/">
                    <img src={cart} alt="cart" />
                  </Link>
                </Nav.Link>
              </ul>
            </Navbar.Collapse>
          </Navbar>
        </Nav>
      </Container>
    </div>
  );
}
export default Header;
